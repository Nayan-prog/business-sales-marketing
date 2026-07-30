from urllib import request
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import authenticate
from rest_framework_simplejwt.tokens import RefreshToken
from django.db.models import Sum
from .models import Campaign, Lead, Customer, Notification

from .serializers import (
    RegisterSerializer,
    CampaignSerializer,
    LeadSerializer,
    CustomerSerializer,
    NotificationSerializer,
    UserSerializer,
)
# -----------------------------
# Register User
# -----------------------------
@api_view(["POST"])
@permission_classes([AllowAny])
def register(request):

    serializer = RegisterSerializer(data=request.data)

    if serializer.is_valid():
        user = serializer.save()

        refresh = RefreshToken.for_user(user)

        return Response({
            "message": "Registration Successful",
            "access": str(refresh.access_token),
            "refresh": str(refresh),
        }, status=status.HTTP_201_CREATED)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(["GET"])
@permission_classes([IsAuthenticated])
def profile(request):
    serializer = UserSerializer(request.user)
    return Response(serializer.data)


@api_view(["PUT"])
@permission_classes([IsAuthenticated])
def update_profile(request):
    serializer = UserSerializer(
        request.user,
        data=request.data,
        partial=True
    )

    if serializer.is_valid():
        serializer.save()
        return Response({
            "message": "Profile Updated Successfully",
            "user": serializer.data
        })

    return Response(
        serializer.errors,
        status=status.HTTP_400_BAD_REQUEST
    )

@api_view(["POST"])
@permission_classes([AllowAny])
def login(request):

    username = request.data.get("username")
    password = request.data.get("password")

    user = authenticate(username=username, password=password)

    if user is not None:

        refresh = RefreshToken.for_user(user)

        return Response({
            "message": "Login Successful",
            "access": str(refresh.access_token),
            "refresh": str(refresh),
            "username": user.username,
            "email": user.email,
        })

    return Response(
        {"error": "Invalid Username or Password"},
        status=status.HTTP_401_UNAUTHORIZED,
    )
# -----------------------------
# Create Campaign
# -----------------------------
@api_view(["POST"])
@permission_classes([IsAuthenticated])
def create_campaign(request):

    serializer = CampaignSerializer(data=request.data)

    if serializer.is_valid():

        serializer.save(user=request.user)

        Notification.objects.create(
            user=request.user,
            title="Campaign Created",
            message=f"{serializer.data['name']} created successfully."
        )

        return Response({
            "message": "Campaign Created Successfully",
            "campaign": serializer.data
        }, status=status.HTTP_201_CREATED)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def get_campaigns(request):

    campaigns = Campaign.objects.filter(user=request.user)

    serializer = CampaignSerializer(campaigns, many=True)

    return Response(serializer.data)
@api_view(["GET"])
@permission_classes([IsAuthenticated])
def get_campaign(request, id):

    try:
        campaign = Campaign.objects.get(id=id, user=request.user)
    except Campaign.DoesNotExist:
        return Response(
            {"error": "Campaign not found"},
            status=status.HTTP_404_NOT_FOUND,
        )

    serializer = CampaignSerializer(campaign)

    return Response(serializer.data)
@api_view(["PUT"])
@permission_classes([IsAuthenticated])
def update_campaign(request, id):

    try:
        campaign = Campaign.objects.get(id=id, user=request.user)
    except Campaign.DoesNotExist:
        return Response(
            {"error": "Campaign not found"},
            status=status.HTTP_404_NOT_FOUND,
        )

    serializer = CampaignSerializer(
        campaign,
        data=request.data,
        partial=True
    )

    if serializer.is_valid():
        serializer.save()

        return Response({
            "message": "Campaign Updated Successfully",
            "campaign": serializer.data
        })

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
@api_view(["DELETE"])
@permission_classes([IsAuthenticated])
def delete_campaign(request, id):

    try:
        campaign = Campaign.objects.get(id=id, user=request.user)
    except Campaign.DoesNotExist:
        return Response(
            {"error": "Campaign not found"},
            status=status.HTTP_404_NOT_FOUND,
        )

    campaign.delete()

    return Response({
        "message": "Campaign Deleted Successfully"
    })
@api_view(["GET"])
@permission_classes([IsAuthenticated])
def dashboard(request):

    campaigns = Campaign.objects.filter(user=request.user)

    total_campaigns = campaigns.count()

    active_campaigns = campaigns.filter(status="active").count()

    completed_campaigns = campaigns.filter(status="completed").count()

    draft_campaigns = campaigns.filter(status="draft").count()

    total_budget = campaigns.aggregate(
        total=Sum("budget")
    )["total"] or 0

    recent_campaigns = CampaignSerializer(
        campaigns.order_by("-created_at")[:5],
        many=True
    ).data

    return Response({

        "total_campaigns": total_campaigns,

        "active_campaigns": active_campaigns,

        "completed_campaigns": completed_campaigns,

        "draft_campaigns": draft_campaigns,

        "total_budget": total_budget,

        "recent_campaigns": recent_campaigns,

    })
@api_view(["POST"])
@permission_classes([IsAuthenticated])
def create_lead(request):

    serializer = LeadSerializer(data=request.data)

    if serializer.is_valid():

        serializer.save(user=request.user)

        Notification.objects.create(
            user=request.user,
            title="New Lead",
            message=f"{serializer.data['name']} added successfully."
        )

        return Response(
            {
                "message": "Lead Created Successfully",
                "lead": serializer.data,
            },
            status=status.HTTP_201_CREATED,
        )

    return Response(
        serializer.errors,
        status=status.HTTP_400_BAD_REQUEST,
    )
@api_view(["GET"])
@permission_classes([IsAuthenticated])
def get_leads(request):

    print(request.headers.get("Authorization"))
    print(request.user)
    print(request.user.is_authenticated)

    leads = Lead.objects.filter(user=request.user)

    serializer = LeadSerializer(leads, many=True)

    return Response(serializer.data)

@api_view(["GET"])
@permission_classes([IsAuthenticated])
def get_lead(request, id):

    try:
        lead = Lead.objects.get(id=id, user=request.user)
    except Lead.DoesNotExist:
        return Response(
            {"error": "Lead not found"},
            status=status.HTTP_404_NOT_FOUND,
        )

    serializer = LeadSerializer(lead)

    return Response(serializer.data)

@api_view(["PUT"])
@permission_classes([IsAuthenticated])
def update_lead(request, id):

    try:
        lead = Lead.objects.get(id=id, user=request.user)
    except Lead.DoesNotExist:
        return Response(
            {"error": "Lead not found"},
            status=status.HTTP_404_NOT_FOUND,
        )

    serializer = LeadSerializer(
        lead,
        data=request.data,
        partial=True
    )

    if serializer.is_valid():
        serializer.save()

        return Response({
            "message": "Lead Updated Successfully",
            "lead": serializer.data
        })

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(["DELETE"])
@permission_classes([IsAuthenticated])
def delete_lead(request, id):

    try:
        lead = Lead.objects.get(id=id, user=request.user)
    except Lead.DoesNotExist:
        return Response(
            {"error": "Lead not found"},
            status=status.HTTP_404_NOT_FOUND,
        )

    lead.delete()

    return Response({
        "message": "Lead Deleted Successfully"
    })

@api_view(["POST"])
@permission_classes([IsAuthenticated])
def create_customer(request):

    serializer = CustomerSerializer(data=request.data)

    if serializer.is_valid():

        serializer.save(user=request.user)

        Notification.objects.create(
            user=request.user,
            title="New Customer",
            message=f"{serializer.data['name']} became a customer."
        )

        return Response(
            {
                "message": "Customer Created Successfully",
                "customer": serializer.data,
            },
            status=status.HTTP_201_CREATED,
        )

    return Response(
        serializer.errors,
        status=status.HTTP_400_BAD_REQUEST,
    )

@api_view(["GET"])
@permission_classes([IsAuthenticated])
def get_customers(request):

    customers = Customer.objects.filter(user=request.user)

    serializer = CustomerSerializer(customers, many=True)

    return Response(serializer.data)

@api_view(["GET"])
@permission_classes([IsAuthenticated])
def get_customer(request, id):

    try:
        customer = Customer.objects.get(id=id, user=request.user)
    except Customer.DoesNotExist:
        return Response(
            {"error": "Customer not found"},
            status=status.HTTP_404_NOT_FOUND,
        )

    serializer = CustomerSerializer(customer)

    return Response(serializer.data)

@api_view(["PUT"])
@permission_classes([IsAuthenticated])
def update_customer(request, id):

    try:
        customer = Customer.objects.get(id=id, user=request.user)
    except Customer.DoesNotExist:
        return Response(
            {"error": "Customer not found"},
            status=status.HTTP_404_NOT_FOUND,
        )

    serializer = CustomerSerializer(
        customer,
        data=request.data,
        partial=True
    )

    if serializer.is_valid():

        serializer.save()

        return Response({
            "message": "Customer Updated Successfully",
            "customer": serializer.data
        })

    return Response(serializer.errors,
                    status=status.HTTP_400_BAD_REQUEST)

@api_view(["DELETE"])
@permission_classes([IsAuthenticated])
def delete_customer(request, id):

    try:
        customer = Customer.objects.get(id=id, user=request.user)
    except Customer.DoesNotExist:
        return Response(
            {"error": "Customer not found"},
            status=status.HTTP_404_NOT_FOUND,
        )

    customer.delete()

    return Response({
        "message": "Customer Deleted Successfully"
    })

@api_view(["GET"])
@permission_classes([IsAuthenticated])
def analytics(request):

    campaigns = Campaign.objects.filter(user=request.user)
    leads = Lead.objects.filter(user=request.user)
    customers = Customer.objects.filter(user=request.user)

    total_campaigns = campaigns.count()
    total_leads = leads.count()
    total_customers = customers.count()

    active_campaigns = campaigns.filter(status="active").count()

    total_budget = campaigns.aggregate(
        total=Sum("budget")
    )["total"] or 0

    conversion_rate = 0

    if total_leads > 0:
        conversion_rate = round(
            (total_customers / total_leads) * 100,
            2
        )

    return Response({

        "total_campaigns": total_campaigns,

        "active_campaigns": active_campaigns,

        "total_leads": total_leads,

        "total_customers": total_customers,

        "conversion_rate": conversion_rate,

        "total_budget": total_budget,

    })

@api_view(["GET"])
@permission_classes([IsAuthenticated])
def get_notifications(request):

    notifications = Notification.objects.filter(
        user=request.user
    ).order_by("-created_at")

    serializer = NotificationSerializer(
        notifications,
        many=True
    )

    return Response({
        "count": notifications.count(),
        "notifications": serializer.data
    })

@api_view(["PUT"])
@permission_classes([IsAuthenticated])
def mark_notification_read(request, id):

    try:
        notification = Notification.objects.get(
            id=id,
            user=request.user
        )
    except Notification.DoesNotExist:

        return Response(
            {"error": "Notification not found"},
            status=status.HTTP_404_NOT_FOUND,
        )

    notification.is_read = True
    notification.save()

    return Response({
        "message": "Notification marked as read"
    })
from django.contrib.auth.hashers import check_password

@api_view(["PUT"])
@permission_classes([IsAuthenticated])
def change_password(request):

    old_password = request.data.get("old_password")
    new_password = request.data.get("new_password")

    if not check_password(old_password, request.user.password):
        return Response(
            {"error": "Old password is incorrect"},
            status=status.HTTP_400_BAD_REQUEST
        )

    request.user.set_password(new_password)
    request.user.save()

    return Response({
        "message": "Password changed successfully"
    })
@api_view(["DELETE"])
@permission_classes([IsAuthenticated])
def delete_notification(request, id):

    try:
        notification = Notification.objects.get(
            id=id,
            user=request.user
        )
    except Notification.DoesNotExist:
        return Response(
            {"error": "Notification not found"},
            status=status.HTTP_404_NOT_FOUND
        )

    notification.delete()

    return Response({
        "message": "Notification deleted successfully"
    })