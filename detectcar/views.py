from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .process import process_file
from PIL import Image
from random import random
import io
import os


@api_view(["GET"])
def index(request):
    return render(request, "build/index.html")


@api_view(["POST"])
def upload(request):
    if request.method == "POST":
        file = request.FILES["file"]
        image = Image.open(file).convert("RGB")

        results = process_file(image)

        os.makedirs("ofiles", exist_ok=True)
        img_path = f"ofiles/file_{round(random() * 10000)}.jpg"
        results[0].save(filename=img_path)

        with open(img_path, "rb") as f:
            img_bytes = f.read()

        os.remove(img_path)

        return HttpResponse(img_bytes)
