from django.urls import path
from .views import (
    register,
    login,

    dashboard,
    analytics,

    profile,
    update_profile,
    change_password,

    create_campaign,
    get_campaigns,
    get_campaign,
    update_campaign,
    delete_campaign,

    create_lead,
    get_leads,
    get_lead,
    update_lead,
    delete_lead,

    create_customer,
    get_customers,
    get_customer,
    update_customer,
    delete_customer,

    get_notifications,
    mark_notification_read,
    delete_notification,
)

urlpatterns = [

    # Authentication
    path("register/", register),
    path("login/", login),

    # Dashboard
    path("dashboard/", dashboard),
    path("analytics/", analytics),

    # Profile
    path("profile/", profile),
    path("profile/update/", update_profile),
    path("change-password/", change_password),

    # Campaigns
    path("campaigns/", get_campaigns),
    path("campaigns/create/", create_campaign),
    path("campaigns/<int:id>/", get_campaign),
    path("campaigns/<int:id>/update/", update_campaign),
    path("campaigns/<int:id>/delete/", delete_campaign),

    # Leads
    path("leads/", get_leads),
    path("leads/create/", create_lead),
    path("leads/<int:id>/", get_lead),
    path("leads/<int:id>/update/", update_lead),
    path("leads/<int:id>/delete/", delete_lead),

    # Customers
    path("customers/", get_customers),
    path("customers/create/", create_customer),
    path("customers/<int:id>/", get_customer),
    path("customers/<int:id>/update/", update_customer),
    path("customers/<int:id>/delete/", delete_customer),

    # Notifications
    path("notifications/", get_notifications),
    path("notifications/<int:id>/read/", mark_notification_read),
    path("notifications/delete/<int:id>/", delete_notification),
]