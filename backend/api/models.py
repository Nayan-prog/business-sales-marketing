from django.contrib.auth.models import User
from django.db import models


class Campaign(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    status = models.CharField(
        max_length=50,
        choices=[
            ("draft", "Draft"),
            ("active", "Active"),
            ("completed", "Completed"),
        ],
        default="draft",
    )
    budget = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
class Lead(models.Model):

    STATUS_CHOICES = [
        ("new", "New"),
        ("contacted", "Contacted"),
        ("qualified", "Qualified"),
        ("lost", "Lost"),
        ("converted", "Converted"),
    ]

    user = models.ForeignKey(User, on_delete=models.CASCADE)

    name = models.CharField(max_length=200)

    email = models.EmailField()

    phone = models.CharField(max_length=20)

    company = models.CharField(max_length=200, blank=True)

    source = models.CharField(max_length=100)

    status = models.CharField(
        max_length=20,
        choices=STATUS_CHOICES,
        default="new",
    )

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
    
class Customer(models.Model):

    user = models.ForeignKey(User, on_delete=models.CASCADE)

    name = models.CharField(max_length=200)

    email = models.EmailField()

    phone = models.CharField(max_length=20)

    company = models.CharField(max_length=200)

    city = models.CharField(max_length=100)

    country = models.CharField(max_length=100)

    total_purchase = models.DecimalField(
        max_digits=10,
        decimal_places=2,
        default=0
    )

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
    
class Notification(models.Model):

    user = models.ForeignKey(User, on_delete=models.CASCADE)

    title = models.CharField(max_length=200)

    message = models.TextField()

    is_read = models.BooleanField(default=False)

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title