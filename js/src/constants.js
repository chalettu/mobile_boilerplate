/*
	This file has the two or 3 really important things that influence how the mobile app loads resources
*/

var environment="development";

var isiDevice = /ipad|iphone|ipod/i.test(navigator.userAgent.toLowerCase());
var isAndroid = /android/i.test(navigator.userAgent.toLowerCase());

function isProduction()
{

	if (environment=='production')
	{
		return true;
	}
	return false;
}