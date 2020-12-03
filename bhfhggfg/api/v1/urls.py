from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import HfgfkhgfkhfkhftViewSet

router = DefaultRouter()
router.register("hfgfkhgfkhfkhft", HfgfkhgfkhfkhftViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
