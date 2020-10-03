# Project-Task
 
Simple design register flow and employee list api call
 <hr />
 In this tutorial, we'll make a Simple design register flow and employee list api call.
  <hr />
 <div align="center">
    <img src="src/screenShot/Screenshot_1601721324.png" alt="Screenshot" height="400px width="300px"</img>
    <img src="src/screenShot/Screenshot_1601721343.png" alt="Screenshot" height="400px width="300px"</img>                                     
    <img src="src/screenShot/Screenshot_1601721355.png" alt="Screenshot" height="400px width="300px"</img>
    <img src="src/screenShot/Screenshot_1601721425.png" alt="Screenshot" height="400px width="300px"</img>
</div>
     
<hr />
Architecture

The driving goal of the architecture of the boilerplate is separation of concerns. Namely:
* Presentational components are separated from containers and screen.
* State is managed using global Redux stores.
* Common components and common file(etc colors, icons).
<hr />
Running the project
<hr />
Assuming you have all the requirements installed, you can setup and run the project by running:

* yarn install to install the dependencies
* run the following steps for your platform

Android

 * only the first time you run the project
 * yarn start to start the metro bundler, in a dedicated terminal
 * yarn android to run the Android application (remember to start a simulator or connect an Android phone)
 
IOS

cd ios
pod install to install pod dependencies
cd .. to come back to the root folder
yarn start to start the metro bundler, in a dedicated terminal
yarn ios to run the iOS application (remember to start a simulator or connect an iPhone phone)
