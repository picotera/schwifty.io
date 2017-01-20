# HelloText-Chrome

This Google Cast demo application shows how to send messages from an Chrome desktop browser to a receiver using a custom namespace.

## Dependencies
* Chrome browser.

## Setup Instructions
* Just check out the code from GitHub, host chromehellotext.html on your own server and open that page in your Chrome browser
* If you don't want to use the sample App ID, you need to do the following steps
* Get a Chromecast device and get it set up for development: https://developers.google.com/cast/docs/developers#Get_started
* Register an application on the Developers Console (http://cast.google.com/publish). Select the Custom Receiver option and specify the URL to where you are hosting the receiver.html file (You can use Google Drive to host your files: https://support.google.com/drive/answer/2881970?hl=en). You will get an App ID when you finish registering your application.
* Setup the project dependencies
* Insert your App ID in the chromehellotext.html file of the project (look for applicationID in that file)
* Upload the chromehellotext.html file to your hosting server and load the URL for that file in your Chrome browser.

## References and How to report bugs
* Cast APIs: http://developers.google.com/cast
* Design Checklist (http://developers.google.com/cast/docs/design_checklist)
* If you find any issues, please open a bug here on GitHub

## How to make contributions?
Please read and follow the steps in the CONTRIBUTING.md

## License
See LICENSE

## Terms
Your use of this sample is subject to, and by using or downloading the sample files you agree to comply with, the [Google APIs Terms of Service](https://developers.google.com/terms/) and the [Google Cast SDK Additional Developer Terms of Service](https://developers.google.com/cast/docs/terms/).

## Google+
Google Cast Developers Community on Google+ [http://goo.gl/TPLDxj](http://goo.gl/TPLDxj)
