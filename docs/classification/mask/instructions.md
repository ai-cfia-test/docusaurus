---
id: instructions
title: Insturctions
sidebar_label: Instructions
---

This project requires [Python3] to run and operate.

- Clone the repo using the command: 
    ```sh

    $ git clone https://github.com/ai-cfia/face_mask.git
    ```

Under ***datase2*** folder, create sub-folder for every person of interest. Put at least 10~15 pictures of each person in their respective folder. The folders should be named after every person in the database. 

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

- Next you need to run:
    
    ```sh
    $  python3 extract_embeddings.py --dataset dataset2 --embeddings output/embeddings.pickle --detector face_detection_model --embedding-model openface_nn4.small2.v1.t7
    ```

- Followed by:

    ```sh
    $  python3 train_model.py --embeddings output/embeddings.pickle --recognizer output/recognizer.pickle --le output/le.pickle
    ```
    
    Now your embedding are created and trained and youre ready to start a live video demo of the project.
    
- Simply type in the command:

    ```sh
    $  python3 detect_mask_video.py
    ```
    And your camera should be activated and a video feed with labels should be started.

[Python3]: <https://www.python.org/downloads/release/python-370/>