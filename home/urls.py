from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name="home-page"),
    path("company/", views.company, name="company-page"),
    path("mission/", views.mission, name="mission-page"),
    path("people/", views.people, name="people-page"),
    path("solutions/", views.solution_vi, name="solution-page"),
    path("packages-and-courier/", views.packages_courier, name="package-courier-page"),
    path("less-than-truckload/", views.truckload, name="truckload-page"),
    path("logistics/", views.logistic, name="logistic-page"),
    path("investors/", views.investors_page, name="investors-page"),
    path("presentations-and-reports/", views.presentations, name="presentations-page"),
    path("shareholder-information/", views.shareholder, name="shareholder-page"),
    path("contact/", views.contact, name="contact-page"),
    path("terms-of-use/", views.terms, name="terms-page"),
    path("track/", views.track_view, name="track-page"),
]
