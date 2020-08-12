---
id: Intro
title: Leaf Classification
sidebar_label: Introduction
---


The aim of this project is to demo the power of Deep Learning in classifying healthy and unhealthy leaves. This project is in the domain of computer vision and is very similar to the fish classification problem.

### Introduction
In this project we made use of deep learning and neural networks to identify and classify  images of interest.


#### Data 
The data for this project is from a Kaggle dataset. 
The goal is to be able classify between the healthy leaves(sample linked below)
* [Healthy Leaf](https://storage.googleapis.com/kagglesdsdata/datasets%2F277323%2F658267%2Fsegmented%2FStrawberry___healthy%2F00532378-bfb2-4d3b-8b19-903ecc085624___RS_HL%202021_final_masked.jpg?GoogleAccessId=databundle-worker-v2@kaggle-161607.iam.gserviceaccount.com&Expires=1595697182&Signature=cod5hCStnmpQarsvSa7uduM2zZzlH%2F9IiPSB0iemiE0%2FvmykPkSFGqA8Fqd48F5YvSErSNTjFisazGW7dWSKRiQdSpVVyBPVUooAKePPStF8yN6qapL4BwlrYK39IYSCoQuprXjKC1PCfTteZCkE6KQw%2FSVervuRpZ3zkN4BMomgWGjI6yEiJg4bjga5oXygiXCIRDaT02dR8KUx%2BR6Z8de4MoH10lGVrH38kkTx0XgdcRLeWZCMknhQX%2FFGcDf7U9FEJG5b3nX0oP81XyHaIUf92EHhjBvcmqeH9eWYSrjDaZv6wqc7iR5CU9uJWMbn%2BfrLxJvKQiHyp7BhVNjH4g%3D%3D)

and uhealthy leaves(sample linked below)

* [Unhealthy Leaf](https://storage.googleapis.com/kagglesdsdata/datasets%2F277323%2F658267%2Fsegmented%2FStrawberry___Leaf_scorch%2F01d11a79-f858-4e58-9b14-c3f0619af1f7___RS_L.Scorch%200090_final_masked.jpg?GoogleAccessId=databundle-worker-v2@kaggle-161607.iam.gserviceaccount.com&Expires=1595697200&Signature=byEBYa6q8Ystpy8M4uI0VzZIKZIvVuYz6C3FvA%2Bg1y0pafTpPawjp9OurTzu5oZlHgV9ya%2F6UrflIIlefZkQuAMo%2BZ30vhzlmjPecMg1gyZcl4u33%2FnbznsKns9UlLuhjr605P6yNqwnVDocZVQNHDHSO734e2H3H1JhB4U3q6Kt%2Fu5UzvsEFoSwqHH74x81dnXNI1iQzJxKHC1y6W0FosJe%2B5QQ6%2BKV%2BpGdCaKf4M2h42ISnLmDqIsBWhPaqDMF13SCkfLXkFzuvWYcc5UrxFdk3vyOGy0A64OxX3sI9FBOErEHHHUBKFNlLmGfPyKNKUBiKZoybLIfL%2FhIHG33Sg%3D%3D)

For the training set, there is a total of  1253 images.

And for the validation set there is a total of 312 images.
### Methodology

For the methodology, transfer learning was used. A pre-trained large model trained on a huge dataset was used to be fine-tuned on our dataset.

The [Inception Net] model was downloaded, trained with the Imagenet weights.
And the model was trained on our leaf data with Adam optimizer.
A validation accuracy of ***99%*** was achieved for the task on hand.


### Training code

For loading and training our model we made use of the [Keras] library.
They house a variety of previously tested and used architectures which can be loaded with or without pre-trained weights and can be used on custom datasets for research/deployment.

The trained model is saved and uploaded to the cloud. So you can download and use it for the purpose of demo.

[Inception Net]: <https://arxiv.org/pdf/1409.4842.pdf>

[Keras]: <https://keras.io/>

[PyTorch]: <https://pytorch.org/>

[TorchVision]: <https://pytorch.org/docs/stable/torchvision/index.html>
[Flask]: <https://flask.palletsprojects.com/en/1.1.x/>








































