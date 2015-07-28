var exec = require('cordova/exec');
var platform = require('cordova/platform');

var Encored = {

	moveToSettings: function (successFunc, errorFunc) {
		cordova.exec(successFunc, errorFunc, 'Encored', 'moveToSettings', []);
	}
};
module.exports = Encored;