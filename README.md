#Call Me Service

## Intro

This project is built based on the idea of service centric design, and is separated into two parts:
- TwiML_server that should be run on a web host. The current port is 3000
- index.js that calls call_service.js to make the call to the given target at a given time

This project simply uses Twilio's Promise API since everything is single thread given the little traffic. The call also
depends on the resolved Promise from TwiML_server so it makes sense to do everything in Promise instead of callbacks.

## Install

- ` npm install ` at the root level of the folder. If you are running Ubuntu and need to set up node and npm, [here][1] is a great and simple
way. If you are running Windows or Mac, simple download from website.
- On your web host, run ` node twiml_server.js ` to start the server. Due to dependencies you need the entire project on your server.
- On your local test machine, run ` node index.js ` to execute the call. Change time and target in index.js to suit your need.
- Find in ` lib/db/db_config ` and replace your SID and token

## Why JavaScript

- I am personally more fluent in JS, and JS is also built for web application thus allowing maximum functionality in this kind of service.

[1]: https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions
