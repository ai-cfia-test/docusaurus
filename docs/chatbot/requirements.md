---
id: requirements
title: Requirements
sidebar_label: Requirements
---

# REQUIREMENTS

The Chatbot requires:
- atleast 4GB RAM 
- [Python 3.7](https://www.python.org/downloads/release/python-370/)
- [Pre-trained BERT](https://github.com/google-research/bert) : Any of the models can be downloaded but [BERT-base, Cased](https://storage.googleapis.com/bert_models/2018_10_18/cased_L-12_H-768_A-12.zip) is recommended

# INSTALLATION

- Download the code for the Chatbot from the repository
- Unzip the downloaded BERT model and place it in the main directory of the chatbot. [Note : Make sure the name of the BERT model folder and the value of model_dir in run_bert_service.sh are SAME ]
- Navigate to the chatbot directory and run the following command in the terminal:
    ```sh
    $ pip install -r requirements.txt
    $ pip install rasa-x==0.20.1 --extra-index-url https://pypi.rasa.com/simple
    ```
- After these commands finish running, run the following command in the terminal:
    ```sh
    $ ./run_bert_service.sh
    ```
- After the BERT has started and is ready to serve requests , open another terminal window and run:
    ```sh
    $ rasa run actions
    ```
- After the action server has started and is listening on port 5000, open another terminal window to start rasa x as:
    ```sh
    $ rasa x
    ```
- Once Rasa X has started, you can see the Rasa X UI running on the localhost, you can talk to your bot in that window or [ngrok](https://ngrok.com/) the Rasa X and share it with other testers to improve it.