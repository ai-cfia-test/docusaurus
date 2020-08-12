---
id: doc1
title: Prerequisite
sidebar_label: Prerequisite
---

In this section we explain the required software/packages for running the app

## Python Version

To run this app <code> python 3.x</code>, is required.  
## Package Installation
:::important

Make sure <code>pip</code> package manager is installed to run through this section

:::

Many packages are used in creating this app. To easily download all relevant packages. Please run <code>pip install -r requirements.txt</code> in the <code> dashboard</code> folder
# Running the app

To run the app, you can decide to run one of the following two commands


### Using <code> gunicorn</code>
In deploying the app into cloud or running or on WSGI gunicorn command is recommended. For example,
<code>gunicorn --workers=16 --threads=4 --worker-class=gthread app:app.server -b 0.0.0.0:8000 --timeout 250 </code>
will run the app on 16 workers with 4 threads on localhost:8000.

### Using Python run command
To run this withouth WSGI support and running on development server, simply run <code>python app.py</code> in the <code>dashboard_v2</code> directory

