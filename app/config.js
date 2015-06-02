var url = window.location.href;

if (url.indexOf("localhost") != -1) {
	var serviceURL = "http://localhost/soleinsider/public/apps/handbags/";
} else{
	var serviceURL = "http://soleinsider.com/public/apps/handbags/";
}

var appConfig = {};
appConfig.base_url = serviceURL;
appConfig.name = "Ladies Handbags"
appConfig.version = "1";
appConfig.admin_url = 'app/'
appConfig.serviceURL = serviceURL;