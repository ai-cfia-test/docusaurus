---
id: doc3
title: Unsupervised Learning
---

# African Swine Fever (ASF) Unsupervised Machine Learning 
The main purpose of this project is to detect suspicious shipments based on past import data. As such, this project aims at utlizing unsupervised machine learning techniques on the African Swine Fever (ASF) dataset for meaningful insight extraction and data analysis. 
## Data Description
The following includes the set of features utilized in our analysis: 
 
Feature Number | Feature Name | Feature Type
------------ | ------------- | -------------
1 | Country of Origin | Nominal  
2 | Hs-Code | Nominal  
3 | Port of Entry | Nominal  
4 | Broker ID | Nominal  
5 | Business Number | Nominal  
6 | Vendor  | Nominal  
7 | CFIA Decision Type | Nominal  
8 | CBSA Decision Type | Nominal  
9 | Commodity Description | Text
10 | Commodity Line Total Price | Numerical
11 | Commodity Line Unit Price  | Numerical
As can be seen from the table above, the import dataset is, for the most part, composed of nominal data. Nominal categorical data are intrinsically unordered. Additionally, and contrary to continuous variables, nominal variables lack any meaningful sense of distance between the different nominal categories. As such, the nature of the prevailing nominal variables in our dataset, in addition to the lack of continuous variables dictate a rather intensive process of feature preprocessing.  
## Feature Selection and Preprocessing 
### Nominal Variables 
The approach in [Numerical Coding of Nominal Data](https://www.researchgate.net/publication/278403191_Numerical_Coding_of_Nominal_Data) was utilized to extract a meaningful representation of the categorical features in the import dataset. The authors propose a mapping of the nominal data into the complex plane. The mapping takes into account the frequency of categories both by their own merit and relative to that of other categories. Accordingly, and due to the partial ordering inherent to the complex plane, this presentation serves to preserve the lack of order characteristic of nominal data. As such, this approach was used in numerically encoding features 1 through 8 which are of a nominal nature. 
  
To further enrich the earlier representation, we proposed the introduction of a conditional mapping. This mapping is used to extract information from the dataset conditioning the data based on two factors. 
* Time Period (Monthly, Quarterly, Semi-Annually and Annually). 
* Groups in other categorical features. 
First, the mapping into the complex plane is conditioned over time to extract the changes in a monthly, quarterly, semi-annually and annually manner therefore extracting the representation of each group relative to the different time periods in the data. Second, in order to extract category specific differences (e.g., how the country of origin or a given HS code is distributed with respect to individual brokers), we condition over categories in the features of the dataset itself. 
The main rational of the earlier approach is that the distribution of categroies should be inherently different when conditioned on a specific group or time period which would thus enable us to extract more information from our data. Having applied this conditional mapping the seperation in the data is significantly improved. 
### Volume 
The volume of the different shipments is reported in different units. As such, we have only isolated the most two frequent units of volume (The number of pieces and weight in KGM). The missing number of pieces for shipments reporting any other units was calculated by dividing the total price by the price per unit. Then an iterative imputer was utilize to find the missing entries for the volume in KGM. The iterative imputer was trained using features () and the numerical encoding of nominal features without the conditional mapping. 
### Commodity Description 
Word embeddings are utilized in preprocessing the commodity description. For reprodusability randomized hashing should be disabled using the following command 
```
PYTHONHASHSEED=random
```
## Pipeline 
Principal Component Analysis (PCA) was used for dimensionality reduction. With the goal of flagging suspicious shiptments, that was followed by the application of two seperate approaches 
* Approach 1: Unsupervised Machine Learning (K-Means) 
Several runs K-Means were applied at a different number of clusters. This was done with the goal of capturing data falling under two categories: 
     * An (approved) decision type which is grouped together with the (non-approved) instances in the same cluster. 
     * Small size clusters of (approved) decision type instances. 
 
The results over a sample dataset are demonstrated in the following figure of the most signicant 3 principal components 
 
 ![Test Image 1](/img/clustering.png)
 
 
* Approach 2: Noisy Labels 
The nominal encoding of features relating to the CFIA and CBSA decision as well as anything conditioned on them is removed. CFIA Decision is treated as a noisy label and a classifier is trained to detect noise in this label (based on the work in [CleanLab](https://github.com/cgnorthcutt/cleanlab)). 
These two approaches were found to intersect for instances having the same broker in their majority.