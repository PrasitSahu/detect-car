FROM nikolaik/python-nodejs:python3.8-nodejs22-slim

# Install system dependencies first
RUN apt-get update && \
    apt-get install -y libgl1 libglib2.0-0 libsm6 libxext6 libxrender-dev && \
    apt-get clean

# Set work directory
WORKDIR /home/detect-car

# Copy Pipenv files first (faster Docker caching)
COPY Pipfile ./

# Install pipenv
RUN pip install pipenv

RUN pipenv install

# Copy the project
COPY . .
# Expose Django port
EXPOSE 8000

# Start Django server
CMD ["bash"]
