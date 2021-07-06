---
title: Deploying modern apps
---

# Deploying modern apps

#DevOps #CloudNative #GitOps #IaaS

---

"The cloud" can be confusing, especially without context for why we do things in complex ways now.

---

## Historical context

---

The web requires applications to be "hosted" on internet-connected computers.

In HTTP we call these "servers".

---

### "On-premises"

How would you host a web application in 1994?

---

1. Acquire a computer (preferably powerful)

---

2. Acquire a fast internet connection

---

3. Designate a secure climate controlled room

---

4. Install Linux, Git, Node, all other software it needs

---

5. Configure firewalls, domain names etc

---

6. Copy app code onto machine and get it to auto-run

---

It's complicated to put stuff on the internet!

I'm not a Site Reliability Engineer (SRE) so I probs missed stuff.

---

Managing your own hardware requires a lot of expertise and investment.

This expertise is usually unrelated to your actual business.

---

Scaling to meet more demand requires physically setting up more computers, adding bigger hard drives etc.

---

### Rise of "The Cloud"

In 2006 Amazon (AWS) introduced Simple Storage Service (S3) and Elastic Compute Cloud (EC2).

---

Renting out access to computers in data centers they already had.

---

Cloud providers like AWS have big beefy computer hardware. 

Advances in "virtualisation" allowed them to rent out shared access to the same physical computer.

---

### Infrastructure-as-a-service (IaaS)

IaaS is the lowest level of cloud computing.

You rent access to a computer to run your code on.

E.g. AWS, Google Cloud Plaform, Microsoft Azure, Digital Ocean

---

#### IaaS downsides

IaaS only abstracts away owning the physical hardware.

You're generally still responsible for setting up the server, installing required software, deploying your code etc.

---

### Platform-as-a-service

Providers like Heroku emerged to help with this complexity.

"Give me a Git repo and I'll configure everything and deploy your app".

E.g. Heroku, Netlify, MS Azure App Service, Google Cloud App Engine

---

#### PaaS downsides

These platforms can only support a limited subset of things. E.g. Heroku only offers PostgreSQL as a DB.

You're somewhat "locked in" to a platform, unless you can exactly reproduce their server setup somewhere else.

---

### Rise of "containers"

Docker emerged out of a PaaS provider as a way to package up apps.

You define everything an app needs in a "container". You can now deploy it to any platform that understands the container format.

---

"Containerized" code is more portable than something that can only run on e.g. Heroku's platform.

They also avoid being limited to only services the PaaS provides.

---

### Functions-as-a-service (FaaS)

Also known as "serverless".

This is "compute on demand". Rather than a server sitting waiting for requests the computer can "spin up" when needed to run your code.

E.g. AWS Lambda, Azure Functions, Google Cloud Functions, Cloudflare Workers

---

"Serverless" still has servers somewhere. You just aren't thinking about them.

You write code, give it to a cloud provider and they run it on demand.

---

## Docker

---

Docker is a tool for packaging apps into "containers".

These contain everything the service needs in order to run.

---

Imagine setting up a brand new computer from scratch to run a Node app

---

1. Install Ubuntu

---

2. Install software

```shell
apt-get install node
# and probs other stuff
```

---

3. Copy app code onto computer

---

4. Install dependencies
```shell
npm install
```

---

5. Define how the app starts, on what port etc

---

This is an annoying manual process.

Nowadays it's nice to define infrastructure as code.

I.e. write instructions defining how to create the app.

---

This is a "Dockerfile":

```
FROM node:14-alpine

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD [ "node", "server.js" ]
```

---

It defines a base image to build from, plus the app-specific steps required to build and run our code.

---

We can give this file to Docker so it can "build" an "image".

An image is like a snapshot of your computer ready to run your app, with everything installed.

---

We then upload this image to a "registry" so we can use it whenever/wherever.

Finally we can tell our cloud platform to "pull" the image from the registry and run it.

---

### "Clusters"

Modern applications are often made up of multiple services.

E.g. a Node.js server for application logic, a PostgreSQL server for data persistence, potentially an email server, maybe a caching server...

---

Managing this "cluster" of containers can be quite complex.

E.g. duplicating copies of containers as requests increase, managing which copy gets which request, gracefully shutting down containers on new deploys...

---

Larger companies use "orchestrators" to manage this complexity. E.g. Kubernetes, AWS Elastic Container Service

---

For local development Docker Compose lets you define multiple services that should all run together.

---

Let's learn Docker!

https://docs.docker.com/language/nodejs/