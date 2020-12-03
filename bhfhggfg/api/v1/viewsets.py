from rest_framework import authentication
from bhfhggfg.models import Hfgfkhgfkhfkhft
from .serializers import HfgfkhgfkhfkhftSerializer
from rest_framework import viewsets


class HfgfkhgfkhfkhftViewSet(viewsets.ModelViewSet):
    serializer_class = HfgfkhgfkhfkhftSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Hfgfkhgfkhfkhft.objects.all()
