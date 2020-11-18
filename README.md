# Description
Goal of this repository is to provide other view on Hybrid app development other than BackBase.
It is build open source technologies, that are considered industry standard for over 8 years.

For now this repository contains only static application, that do not fetch any data from API. 
It is here just to showcase how easy is to create new screens and how well it implements with all native animations.

It should also show, that Hybrid development does not have to be difficult and can be as streamlined as possible.



# First Setup

## Runtime
In order to run this project, you will need `Node` of version 10 at least, with `npm` version 6.

## CLI
You will need to install *Ionic CLI* by running `npm i -g @ionic/cli`. This tool will be used to run your project as well as to generate some schematics.

## Install dependencies
To install dependencies run `npm i`

# Development

## Browser
To run this project you should use ionic native command `ionic serve`. You could use also `npm start` but there are some differences on how the apps behaves.

## Mobile platforms

To sync angular application files to each native project (IOS, Android) you need to run `ionic capacitor sync`. This will build angular application and 
copy its files to each platform directory. It will also copy any *Capacitor* native plugins to those platforms. (Now project is not using any of those)

### IOS
In order to open IOS project in Xcode run following `ionic capacitor open ios`. 

### Android
In order to open IOS project in Xcode run following `ionic capacitor open android`.

**Disclaimer**
Capacitor projects do not support live reloading in native shells yet, so you after each change you 
need to run `ionic cap sync`, in order to copy those files to native platforms and rebuild the Activity in its IDEs.
But remember, as long as you do not need some native functionality, you can test your app in a browser with simulation of mobile viewport, because
in the end it is just JS.

#Resources
*Inoic cli*: https://ionicframework.com/docs/cli

*Ionic*: https://ionicframework.com/docs/

*Capacitor*: https://capacitorjs.com/docs
