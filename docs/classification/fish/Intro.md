---
id: Intro
title: Fish Classification
sidebar_label: Introduction
---


In this project, the aim of is develop a demo of scientific  and intelligent tools to aid the CFIA agents with their job in detecting and correctly identifying species of fish being sold.

### Introduction
In this project we made use of deep learning and neural networks to identify and classify  images of interest.


#### Data 
For this project we scraped the web for pictures of 16 fish species. We made use of Bing  search engine APIs for downloading the images.
As one can expect, the images had to be pruned and a lot of the images had to be eliminated due to irrelevance or poor quality. 
The resulting dataset contains pictures of of 16 fish species with approximately 50~60 images per class on average. 
The currently supported species are:
 - Haddock
 - Hake
 - Halibut
 - Mackerel
 - Monkfish
 - Ocean Perch
 - Salmon
 - Sea Bass
 - Snapper
 - Swordfish
 - Tilapia
 - Trout
 - Tuna
 - Turbot
 - Flathead 
 - Tarwhin


### Models
In this project we made use of Convolutional Neural Networks(CNNs) and transfer learning.
A common way to approach this problem would be download large models trained previously on huge datasets, and fine-tune the model on our custom dataset for the best results.

Several models were tried and benchmarked such as:
* [DenseNet]
* [AlexnNet]
 [SqueezeNet]
* [VGG]
* [Resnet]
* [Inception]

However the model that best performed and was chosen was DenseNet with an accuracy of **75%**. 

### Training code

For loading and training our model we made use of [PyTorch] and [TorchVision] libraries.
They house a variety of previously tested and used architectures which can be loaded with or without pre-trained weights and can be used on custom datasets for research/deployment.

### Deployment Code

We made use of the [Flask] library to deploy or model and host it on a server. An easy and intuitive drag and drop front-end was designed for the user.


### Dateset and analysis
For each fish species, the data was randomly shuffled and a train and validation split was performed.
The dataset consists of very noisy and unclear pictures along with very well captured images.
The used dataset and was verified by experts in the aquatic domain ad therefore there are some pictures in the training set which belong to the wrong species of the fish.



    


















[DenseNet]: <https://arxiv.org/abs/1608.06993>

[AlexnNet]: <https://papers.nips.cc/paper/4824-imagenet-classification-with-deep-convolutional-neural-networks.pdf>

[SqueezeNet]:<https://arxiv.org/abs/1602.07360>

[VGG]: <https://neurohive.io/en/popular-networks/vgg16/>

[Resnet]: <https://arxiv.org/abs/1512.03385>

[Inception]: <https://arxiv.org/pdf/1409.4842.pdf>

[PyTorch]: <https://pytorch.org/>

[TorchVision]: <https://pytorch.org/docs/stable/torchvision/index.html>
[Flask]: <https://flask.palletsprojects.com/en/1.1.x/>








































