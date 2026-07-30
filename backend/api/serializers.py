from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Campaign
from .models import Campaign, Lead
from .models import Campaign, Lead, Customer
from .models import Campaign, Lead, Customer, Notification

class NotificationSerializer(serializers.ModelSerializer):

    class Meta:
        model = Notification
        fields = "__all__"
        read_only_fields = ["user", "created_at"]
class CustomerSerializer(serializers.ModelSerializer):

    class Meta:

        model = Customer

        fields = "__all__"

        read_only_fields = ["user", "created_at"]
class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ["username", "email", "password"]

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data["username"],
            email=validated_data["email"],
            password=validated_data["password"],
        )
        return user
    
class CampaignSerializer(serializers.ModelSerializer):
    class Meta:
        model = Campaign
        fields = "__all__"
        read_only_fields = ["user", "created_at"]

class LeadSerializer(serializers.ModelSerializer):

    class Meta:

        model = Lead

        fields = "__all__"

        read_only_fields = ["user", "created_at"]

from django.contrib.auth.models import User
from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            "id",
            "username",
            "first_name",
            "last_name",
            "email",
        ]