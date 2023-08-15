from django.shortcuts import render
from .models import Package


def index(req):
    return render(req, "index.html")


def company(req):
    return render(req, "company.html")


def mission(req):
    return render(req, "mission.html")


def people(req):
    return render(req, "people.html")


def solution_vi(req):
    return render(req, "solution.html")


def packages_courier(req):
    return render(req, "packages_courier.html")


def truckload(req):
    return render(req, "truckload.html")


def logistic(req):
    return render(req, "logistic.html")


def investors_page(req):
    return render(req, "investors.html")


def presentations(req):
    return render(req, "presentations.html")


def shareholder(req):
    return render(req, "shareholder.html")


def contact(req):
    return render(req, "contact.html")


def terms(req):
    return render(req, "terms.html")


def track_view(req):
    context = {}
    track_id = req.GET.get("track-id", None)

    if track_id is not None:
        try:
            package = Package.objects.get(track_id__exact=track_id)

            context["package"] = package
        except Package.DoesNotExist:
            context["package"] = None

    else:
        context["package"] = None
    return render(req, "track.html", context)
