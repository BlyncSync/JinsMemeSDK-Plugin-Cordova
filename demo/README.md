# Jins MEME Cordova Plugin Demo
*BlyncSync Technologies*

Sample application to demonstrate the usage of [JinsMemeSDK-Plugin-Cordova](https://github.com/jins-meme/JinsMemeSDK-Plugin-Cordova).  Currently connects to the first MEME it scans and prints its information to console.

Made with ❤ using [Node.js](https://nodejs.org/), [Apache Cordova](https://cordova.apache.org/) and the [Jins Meme SDK Cordova Plugin](https://github.com/jins-meme/JinsMemeSDK-Plugin-Cordova)

### Dependencies

1. [Node.js](https://nodejs.org/)
2. [Apache Cordova](https://cordova.apache.org/)

    `npm install -g cordova`

3. [JinsMemeSDK-Plugin-Cordova](https://github.com/jins-meme/JinsMemeSDK-Plugin-Cordova)

## Setup

1. Clone this repository
2. Add Android or iOS platforms with `cordova platform add android ios`
3. Add the latest `JinsMemeSDK-Plugin-Cordova` plugin by using `cordova plugin add https://github.com/jins-meme/JinsMemeSDK-Plugin-Cordova`

Make sure to change `appClientId` and `clientSecret` in `www/js/index.js` to match your Jins app ID and client secret.

## Usage

``cordova emulate android`` or ``cordova run android`` (... or ios)

Make sure to configure `www\js\index.js` with your `appClientId` and `clientSecret` from your own Jins app.

Results of scanning and connection printed to log.

For Android development, open a Chrome developer's tab and inspect the "Jins MEME Cordova Plugin Demo" webview element under `⋮ > More Tools > Remote Devices` (must have [enabled developer mode](http://blog.syncios.com/enable-developer-optionsusb-debugging-mode-on-devices-with-android-4-2-jelly-bean/), enabled [remote USB debugging](https://developers.google.com/web/tools/chrome-devtools/remote-debugging/) on the testing device, and enabled Bluetooth on the device.)

Turn your Meme on view the console.

## Troubleshooting

If you receive a platform-specific error, *eg.*

```bash
>cordova emulate android
cp: copyFileSync: could not write to dest file (code=ENOENT):.\platforms\android\res\xml\config.xml

Parsing .\platforms\android\res\xml\config.xml failed
Error: ENOENT: no such file or directory, open '.\platforms\android\res\xml\config.xml'
```

You can resolve it by either deleting `.\platforms\android` and re-adding the platform (`cordova platform add android`) or updating it (`cordova platform update android --save`)

`Failure [INSTALL_FAILED_PERMISSION_MODEL_DOWNGRADE]`

Can be solved by manually uninstalling the previous JinsMemeES Demo app from your phone (this error is caused by the APK on the phone having a higher version number than the version being pushed.)

## Contributing

The old workflow for plugin development was to update the plugin, push changes to `JinsMemeSDK-Plugin-Cordova`, and refresh the plugin code within this repository's working directory using the scripts in `utils\plugin-refresh-github.bat`.  The better way is to test plugin code changes (in `JinsMemeSDK-Plugin-Cordova`) offline/locally by using the script in `utils\plugin-refresh-local.bat` before pushing to github
