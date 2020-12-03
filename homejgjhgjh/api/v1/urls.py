from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import HjhgfkhfViewSet

router = DefaultRouter()
router.register("hjhgfkhf", HjhgfkhfViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
