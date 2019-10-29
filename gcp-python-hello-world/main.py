import json
import datetime

from google.cloud import storage

storage_client = storage.Client()

bucket_name = 'sls-gcp-python-hello-world-dev-1571718042216'

def endpoint(request):
    return json.dumps(request.files, indent=4)


# http -f POST example.com/jobs name='John Smith' cv@~/Documents/cv.pdf

