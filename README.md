# Detect Cars

## Installation

1. Clone git repo

```bash
git clone https://github.com/PrasitSahu/detect-car.git
cd detect-car
```

2. Install dependencies

```bash
pip install pipenv
pipenv shell
pipenv install
```

> [!NOTE]
> Use a `bash` shell

3. Create build

```bash
./build.sh
```

4. Run server

```shell
python manage.py runserver
```

### Docker

```bash
docker build . -t detect-car
docker run -it -p 8000:8000 detect-car
```

```bash
pipenv shell
```

```bash
python manage.py runserver 0.0.0.0:8000
```
