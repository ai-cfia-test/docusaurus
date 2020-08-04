---
id: instructions
title: Insturctions
sidebar_label: Instructions
---

This project requires [Python3] to run and operate.

- Clone the repo using the command: 
    ```sh
    $ git clone https://github.com/ai-cfia/leafs.git
    ```
    
- Download the trained model from here:    
     - ***https://drive.google.com/file/d/1bfpsvoO5xwFkhV65JMRci8ywg3mETvh4/view?usp=sharing***


- Download the dataset from here:
    - ***https://www.kaggle.com/abdallahalidev/plantvillage-dataset***

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
    
    
Once the dependencies and the libraries are installed, you can use the software.
To use it, simply ope the Jupyter Notebook, and sequentially run and execute each cell.
In the last cell, you will be prompted to choose a batch number and a sample so you can choose one of the validation photos and see the models output and results.




[Python3]: <https://www.python.org/downloads/release/python-370/>