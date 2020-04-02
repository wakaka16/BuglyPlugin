var exec = require('cordova/exec');

exports.initSDK = function(success, error, arg0) {
    exec(success, error, "BuglyPlugin", "initSDK", [arg0]);
};

exports.enableJSMonitor = function() {
    exec(null, null, "BuglyPlugin", "enableJSMonitor", []);
};

exports.setTagID = function(arg0) {
    exec(null, null, "BuglyPlugin", "setTagID", [arg0]);
};

exports.setUserID = function(arg0) {
    exec(null, null, "BuglyPlugin", "setUserID", [arg0]);
};

exports.putUserData = function(arg0) {
    exec(null, null, "BuglyPlugin", "putUserData", [arg0]);
};

exports.testJavaCrash = function() {
    exec(null, null, "BuglyPlugin", "testJavaCrash", []);
};

exports.testNativeCrash = function() {
    exec(null, null, "BuglyPlugin", "testNativeCrash", []);
};

exports.testANRCrash = function() {
    exec(null, null, "BuglyPlugin", "testANRCrash", []);
};

exports.testOCCrash = function() {
    exec(null, null, "BuglyPlugin", "testOCCrash", []);
};

