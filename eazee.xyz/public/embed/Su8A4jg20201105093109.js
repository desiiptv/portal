var url = window.location.href;
var eazee_site_status = 1;
var eazee_site_identity = 'Su8A4jg20201105093109';
document.getElementById('voisbotDiv').innerHTML="<iframe scrolling='no' width='1px' height='1px' frameborder='0' src='' name='eazeechat' id='eazeechat' allowfullscreen='true' webkitallowfullscreen='true' mozallowfullscreen='true' title='Eazee' allow='camera;microphone' style='display:block;'></iframe>";
document.getElementById('voisbotDiv').style="font-family: 'Roboto', sans-serif; min-height:50px; position: fixed; bottom: 0; right: 12px; z-index: 99999; border: 0;border-radius: 5px 5px 0 0; ";

function myBrowser() {
		if(navigator.userAgent.indexOf('OPR') != -1 ){
		   return 'opera';
		} else if(navigator.userAgent.indexOf("Chrome") != -1 ){
		   return 'chrome';
		} else if(navigator.userAgent.indexOf("Safari") != -1){
			return 'safari';
		} else if(navigator.userAgent.indexOf("Firefox") != -1 ) {
			 return 'firefox';
		} else if((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )){
		  return 'ie'; 
		} else if(navigator.userAgent.indexOf("Edge") != -1 ) {
			 return 'edge';
		} else {
		   return 'unknow'
		}
    }
function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
var browser_name = myBrowser();
var user_browser_id = eazee_site_identity+"_"+browser_name;
if(!getCookie(user_browser_id)){
	eazee_user_id = new Date().getTime();
	eazee_rand_num = Math.floor(Math.random() * 10000) + 1;
	eazee_user_id = eazee_user_id + eazee_rand_num;
	
setCookie(user_browser_id,eazee_user_id,60);
}

function eazeeChat(){let win = window.frames.eazeechat;win.postMessage("chat-toggle","*");}
window.onload = function() {
	chat_user_id = getCookie(user_browser_id);
	
	let iframeurl = 'https://eazee.xyz/Su8A4jg20201105093109/default?eazee_identity='+chat_user_id+'&page_url='+url;
	document.getElementById("eazeechat").src = iframeurl;
	window.addEventListener("message", function(event) {
		if (typeof(event.data.height) == "undefined"){ return; }
				
	  if (event.origin != 'https://davidwalsh.name' ) {
			if(event.data.height == null || event.data.width == null){
				if(eazee_site_status == 1){
					eazyy_height = '200px';
					eazy_width = '140px';
				}
			} else {
				eazyy_height = event.data.height;
				eazy_width = event.data.width;
			}
			document.getElementById("eazeechat").height= eazyy_height;
			document.getElementById("eazeechat").width= eazy_width;
			return ;
	  }	  
	});
	
};