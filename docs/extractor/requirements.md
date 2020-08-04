---
id: requirements
title: Requirements
sidebar_label: Requirements
---


# REQUIREMENTS

The Extractor has three main dependencies.
  - [Xcode IDE ](https://developer.apple.com/xcode/) : version 11.6 or higher
  - [Swift](https://developer.apple.com/swift/) : version 4.2 or higher
  - [Google Firebase Account](https://firebase.google.com/)

# INSTALLATION

- Download the code for the Extractor
- Create a Firebase Account and add the app to it. The name of the app should be the same for both Xcode and Firebase.
- Download your Info.plist for the Firebase App.
- Open terminal and navigate into the project folder
- Run the following command:
    ```sh
    $ pod install
    ```
- Double click on Extractor.xcworkspace and it will open in Xcode.
- Delete the Info.plist and add your downloaded Info.plist file.
- Build and run the application on the simulator.
