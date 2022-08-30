# Backend Plone 6

Installation from packages with pip and mxdev

Create a folder `backend` with a virtual Python environment.
Clone this repo.
Install prerequisites and run mxdev:

```shell
python -m venv venv
source venv/bin/activate
pip install -U pip wheel mxdev
mxdev -c mx.ini
```

Install your Plone packages, core and add-ons:

```shell
pip install -r requirements-mxdev.txt
```

Generate your Zope configuration with cookiecutter.
This is also necessary after changes of `instance.yaml`.

```shell
cookiecutter -f --no-input --config-file instance.yaml https://github.com/plone/cookiecutter-zope-instance
```

Run Zope:

```shell
runwsgi instance/etc/zope.ini
```

Voilà, your Plone is up and running on http://localhost:8080.


### All commands

```
python -m venv venv
source venv/bin/activate
pip install -U pip wheel mxdev

mxdev -c mx.ini
pip install -r requirements-mxdev.txt
cookiecutter -f --no-input --config-file instance.yaml https://github.com/plone/cookiecutter-zope-instance
runwsgi instance/etc/zope.ini
```

## Tasks on your backend installation from its packages

See my documentation of common tasks on the official Plone documentation:
https://6.dev-docs.plone.org/install/source.html#tasks-on-your-backend-installation-from-its-packages

- Add an add-on
- Pin the version of an add-on
- Checkout an add-on
- Pin the version of a Plone package / constraints
- Checkout a Plone package
- Build and start your instance


## Troubleshooting

### "The 'Paste' distribution was not found and is required by the application"

Be sure to activate the Python virtual environment.

```shell
source venv/bin/activate
runwsgi instance/etc/zope.ini
```

### Package 'example-contenttype' requires a different Python: 3.9.10 not in '==2.7,>=3.6'

Correct in `setup.py` of the mentioned add-on:

```
python_requires=">=3.6",
```

## Questions?

File an issue here or ping me on Discord: @ksuess

