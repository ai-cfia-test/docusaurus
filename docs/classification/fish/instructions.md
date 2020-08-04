---
id: instructions
title: Instructions
sidebar_label: Instructions
---

This project requires [Python3] to run and operate.

- Clone the repo using the command: 
    ```sh

    $ git clone https://github.com/ai-cfia/AmirFish.git
    ```
    
The file ***picsUrl*** contains the link to where the pruned dataset is hosted.
Download and unzip the data folders.

>***It is highly advised to use a virtual environment and install the packages rather than the global environment***

- To use a virtual environment on macOS and Linux type the command:
    ```sh
    $  python3 -m venv env
    ```
    
- Followed by:
    ```sh
    $  source env/bin/activate
    ```

The ***requirements.txt*** file contains all the package dependencies required to run the program.

- Type the command:
    ```sh
    $  pip install -r requirements.txt
    ```
Once the dependencies and the libraries are installed, you can locally host a server and run the app.

- Simply type the command:
    ```sh
    $  FLASK_ENV=development FLASK_APP=app.py flask run
    ```

The trained model and weights are provided so you do not have to do any training or computationally demanding operations.

- Simply open a web browser and type in:
    ```
    http://localhost:5000/
    ```

You should be able to use the app now.



[Python3]: <https://www.python.org/downloads/release/python-370/>