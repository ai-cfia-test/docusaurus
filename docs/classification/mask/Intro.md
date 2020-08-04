---
id: Intro
title: Face Mask
sidebar_label: Introduction
---

In this project, the aim of is develop a *demo* of scientific  and intelligent tools that can be used in the public health sector.

### Introduction
In this project we made use of deep learning and SVMss to identify and classify  images of people wearing mask. 
A Deep Learning driven method is used to identify whether the person is wearing mask or not. And a lightweight SVM is used for facial recognition.



#### Data 
For the Maask wearing identification part of this project, there are a total of 3835 images belonging to two classes:
***with_mask: 1916 images***
***without_mask: 1919 images***

For the facial recognition part, you will need at least 10~15 images per person of interest in your dataset.


### Models
In this project, the [Keras] library was used along with [OpenCV] to train the neural Network and the Support Vector Machine. The [MobileNet] neural network was used for the Mask identification and it achieved an accuracy of ***93%*** on the task at hand.

### Demo Code
The demo for this project can be done on live Video. The instruction on how to run the code will be under the instructions markedown file.

### Dateset and analysis
For each fish species, the data was randomly shuffled and a train and validation split was performed.
The dataset consists of very noisy and unclear pictures along with very well captured images.
The used dataset and was verified by experts in the aquatic domain ad therefore there are some pictures in the training set which belong to the wrong species of the fish.



    


















[Keras]: <https://keras.io/>

[OpenCV]: <https://opencv.org/f>

[MobileNet]:<https://arxiv.org/abs/1704.04861>

[VGG]: <https://neurohive.io/en/popular-networks/vgg16/>

[Resnet]: <https://arxiv.org/abs/1512.03385>

[Inception]: <https://arxiv.org/pdf/1409.4842.pdf>

[PyTorch]: <https://pytorch.org/>

[TorchVision]: <https://pytorch.org/docs/stable/torchvision/index.html>
[Flask]: <https://flask.palletsprojects.com/en/1.1.x/>








































