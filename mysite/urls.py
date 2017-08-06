from django.conf.urls import include, url

from django.contrib import admin
admin.autodiscover()

import racialjustice.views

# Examples:
# url(r'^$', 'mysite.views.home', name='home'),
# url(r'^blog/', include('blog.urls')),

urlpatterns = [
    url(r'^$', racialjustice.views.index, name='index'),
    url(r'^datavisual', racialjustice.views.datavisual, name='datavisual'),
    url(r'^police', racialjustice.views.police, name='police'),
    url(r'^jail', racialjustice.views.jail, name='jail'),
    url(r'^court', racialjustice.views.court, name='court'),
    url(r'^db', racialjustice.views.db, name='db'),
    url(r'^admin/', include(admin.site.urls)),
]
