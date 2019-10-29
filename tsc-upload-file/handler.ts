'use strict';
import { Storage } from '@google-cloud/storage';


// Creates a client
const storage = new Storage();
const bucketName = 'sls-gcp-python-hello-world-dev-1571718042216';

exports.http = (request, response) => {
    const { files } = request;
  response.status(200).send(`${JSON.stringify(request)}`);
};

exports.event = (event, callback) => {
  callback();
};
