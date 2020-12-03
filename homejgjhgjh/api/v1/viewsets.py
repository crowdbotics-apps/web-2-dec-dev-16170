from rest_framework import authentication
from homejgjhgjh.models import Hjhgfkhf
from .serializers import HjhgfkhfSerializer
from rest_framework import viewsets


class HjhgfkhfViewSet(viewsets.ModelViewSet):
    serializer_class = HjhgfkhfSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Hjhgfkhf.objects.all()
