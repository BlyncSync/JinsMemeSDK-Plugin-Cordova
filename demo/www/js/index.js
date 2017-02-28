var appClientId = '979308608865053';
var clientSecret = 'gp7ztghbrt3fdr41vowzlwnallshj5im';

var app = {
  // Application Constructor
  initialize: function() {
    document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
  },

  // deviceready Event Handler
  //
  // Bind any cordova events here. Common events are:
  // 'pause', 'resume', etc.
  onDeviceReady: function() {
    this.receivedEvent('deviceready');

    cordova.plugins.JinsMemePlugin.setAppClientID(
      appClientId,
      clientSecret,
      function(appauth) {
        console.log('setAppClientID: '+appauth);

        cordova.plugins.JinsMemePlugin.getSDKVersion(
          function(sdk) {
            console.log('getSDKVersion: '+sdk);

            cordova.plugins.JinsMemePlugin.startScan(
              function(foundmeme) {  
                console.log('startScan: '+JSON.stringify(foundmeme));

                cordova.plugins.JinsMemePlugin.connect(
                  String(foundmeme),
                  function(connect) {
                    console.log('connect: '+JSON.stringify(connect));

                    // TODO: Stop scanning.

                    cordova.plugins.JinsMemePlugin.isConnected(
                      function(connected) {
                        console.log('isConnected: '+connected);

                        // Display debug information

                        cordova.plugins.JinsMemePlugin.getConnectedDeviceType(
                          function(result) {
                            console.log('getConnectedDeviceType: '+result);
                          }, function(error) {  
                            console.log('getConnectedDeviceType: '+JSON.stringify(error));
                          }
                        ); // /getConnectedDeviceType
                        cordova.plugins.JinsMemePlugin.getConnectedDeviceSubType(
                          function(result) {
                            console.log('getConnectedDeviceSubType: '+result);
                          }, function(error) {  
                            console.log('getConnectedDeviceSubType: '+JSON.stringify(error));
                          }
                        ); // /getConnectedDeviceSubType
                        cordova.plugins.JinsMemePlugin.getFWVersion(
                          function(result) {
                            console.log('getFWVersion: '+result);
                          }, function(error) {  
                            console.log('getFWVersion: '+JSON.stringify(error));
                          }
                        ); // /getFWVersion
                        cordova.plugins.JinsMemePlugin.getHWVersion(
                          function(result) {
                            console.log('getHWVersion: '+result);
                          }, function(error) {  
                            console.log('getHWVersion: '+JSON.stringify(error));
                          }
                        ); // /getHWVersion

                        // Program flow continues here...
                        // TODO

                        console.log('canhazdata?')

                        cordova.plugins.JinsMemePlugin.startDataReport(
                          function(data) {
                            console.log('startDataReport: '+data);
                            console.log(data);
                          }, function(error) {  
                            console.log('startDataReport: '+JSON.stringify(error));
                          }
                        );

                      }, function(error) { // isConnected
                        console.log('isConnected: '+JSON.stringify(error));
                      } // /isConnected
                    ); // isConnected
                  }, function(disconnect) {
                    console.log('(dis)connect: '+JSON.stringify(disconnect));
                  }, function(error) {
                    console.log('connect: '+JSON.stringify(error));
                  }
                );
              }, function(error) {  
                console.log('startScan: '+JSON.stringify(error));
              }
            );
          }, function(error) {  
            console.log('getSDKVersion: '+JSON.stringify(error));
          }
        );
      }, function(error) {  
        console.log('setAppClientID: '+JSON.stringify(error));
      }
    );

  },

  // Update DOM on a Received Event
  receivedEvent: function(id) {
    var parentElement = document.getElementById(id);
    var listeningElement = parentElement.querySelector('.listening');
    var receivedElement = parentElement.querySelector('.received');

    listeningElement.setAttribute('style', 'display:none;');
    receivedElement.setAttribute('style', 'display:block;');

    console.log('index.js:receivedEvent ' + id);
  }
};

app.initialize();
