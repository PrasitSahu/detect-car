import torch
from ultralytics import YOLO
import os

model_path = os.path.join(os.curdir, "detectcar", "model.pt")

model = YOLO(model_path)

device = "cuda" if torch.cuda.is_available() else "cuda"
model.to(device)


def process_file(file):
    results = model(file, imgsz=640)
    return results
