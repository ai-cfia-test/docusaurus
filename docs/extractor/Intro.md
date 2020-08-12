---
id: Intro
title: Introduction
sidebar_label: Introduction
---
# Extractor
Extractor is an iOS application that leverages OCR (Optical Character Recognition) to extract product information like Name, Manufacturer, Barcode, Ingredients and Nutrition Label from its image.

## What is OCR(Optical Character Recognition)
Optical Character Recognition (OCR) is the conversion of images of typed, handwritten or printed text into machine-encoded text, whether from a scanned document, a photo of a document, a photo from a scene (billboards in a landscape photo) or from a text superimposed on an image (subtitles on a television broadcast).

<div style={{textAlign:'center'}}>
    <img src="/img/image1.jpg"/>
</div>

Fig 1.How does an OCR work?


OCR can be broken down into four sub-processes, each of which can be optimised if necessary:
  - Pre-processing
  - Text detection
  - Text recognition
  - Text recognition

OCR has numerous applications in the real world and is being used to automate document text extraction , thereby enabling the users to have digital databases to store their documents. Autonomous cars rely extensively on OCR to read signposts and traffic signs. Other applications include vehicle number plate recognition, converting scanned documents into editable word documents, etc.

<div style={{textAlign:'center'}}>
    <img src="/img/image_2.gif"/>
</div>

Fig 2.  An example of OCR on an image


## How does the Extractor work?

When Extractor is launched it enables the user to scan a barcode of a product, if the product exists in the database the application shows the food product with details like ingredients, allergens and nutrition facts.


<div style={{textAlign:'center'}}>
    <img src="/img/image_3.gif"/>
</div>

Fig 3. Extractor App Functionality

If the product is not found, the user can add the product by taking image of the product label, ingredients and the nutrition label. The application automatically extracts text from these images and stores them in the database.
The app has an text OCR accuracy of 92% overall.

The app also allows the user to curate a list of flagged ingredients, which if found in the ingredients of a product will Alert the user.

<div style={{textAlign:'center'}}>
    <img src="/img/image_4.jpg" width="200" />
</div>

 Fig 4. An example of Flagged Ingredient Alert

## References
https://medium.com/@jaafarbenabderrazak.info/ocr-with-tesseract-opencv-and-python-d2c4ec097866