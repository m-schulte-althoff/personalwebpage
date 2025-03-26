import os
import sys

# Add your project directory to the sys.path
sys.path.insert(0, os.path.dirname(os.path.dirname(__file__)))
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(__file__)), 'django_project'))

# Set environment variable to tell Django where your settings.py is
os.environ['DJANGO_SETTINGS_MODULE'] = 'schopenhauer_project.settings'

# Activate your virtual environment
activate_this = os.path.expanduser('~/env/bin/activate_this.py')
with open(activate_this) as file_:
    exec(file_.read(), dict(__file__=activate_this))

# Import Django's WSGI handler
from django.core.wsgi import get_wsgi_application
application = get_wsgi_application()