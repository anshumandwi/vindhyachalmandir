
var siteurl='index.htm'/*tpa=http://maavindhyavasini.com/*/;var secureurl='';function confirmdelete(){if(confirm("Are you sure you want to delete this?")==true){return true;}else{return false;}}
function xyz(c,a,b,s){var s=(s==null)?true:s;var o='';var m='';var m2=':otliam';for(i=0;i<=b.length;i++){o=b.charAt(i)+o;}
b=o;for(i=0;i<=m2.length;i++){m=m2.charAt(i)+m;}
if(!s){m='';}
return m+a+unescape('%'+'4'+'0')+b+'.'+c;}
function validate(val,type){if(type=='email'){return val.match(/^(?:^[A-Z0-9._%-]+@[A-Z0-9.-]+\.(?:[A-Z]{2}|com|org|net|biz|info|name|aero|biz|info|jobs|museum|name)$)$/i);}else if(type=='url'){return val.match(/^(?:\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])$/i);}else if(type=='integer'){return val.match(/^-?[0-9]+$/i);}}
function validateEmail(str){var at="@"
var dot="."
var lat=str.indexOf(at)
var lstr=str.length
var ldot=str.indexOf(dot)
if(str.indexOf(at)==-1){return false}
if(str.indexOf(at)==-1||str.indexOf(at)==0||str.indexOf(at)==lstr){return false}
if(str.indexOf(dot)==-1||str.indexOf(dot)==0||str.indexOf(dot)==lstr){return false}
if(str.indexOf(at,(lat+1))!=-1){return false}
if(str.substring(lat-1,lat)==dot||str.substring(lat+1,lat+2)==dot){return false}
if(str.indexOf(dot,(lat+2))==-1){return false}
if(str.indexOf(" ")!=-1){return false}
return true}
function showhide(region){if(document.getElementById){if(document.getElementById(region).style.display=='none'){document.getElementById(region).style.display='block';}else{document.getElementById(region).style.display='none';}}else{alert('Sorry, your browser doesn\'t support this');}}
function showregion(region){if(document.getElementById){document.getElementById(region).style.display='block';}else{alert('Sorry, your browser doesn\'t support this');}}
function hideregion(region){if(document.getElementById){document.getElementById(region).style.display='none';}else{alert('Sorry, your browser doesn\'t support this');}}
function setCookie(name,value,expires,path,domain,secure){document.cookie=name+"="+escape(value)+
((expires)?"; expires="+expires.toGMTString():"")+
((path)?"; path="+path:"")+
((domain)?"; domain="+domain:"")+
((secure)?"; secure":"");}
function getCookie(name){var dc=document.cookie;var prefix=name+"=";var begin=dc.indexOf("; "+prefix);if(begin==-1){begin=dc.indexOf(prefix);if(begin!=0)return null;}else{begin+=2;}
var end=document.cookie.indexOf(";",begin);if(end==-1){end=dc.length;}
return unescape(dc.substring(begin+prefix.length,end));}
function deleteCookie(name,path,domain){if(getCookie(name)){document.cookie=name+"="+
((path)?"; path="+path:"")+
((domain)?"; domain="+domain:"")+"; expires=Thu, 01-Jan-70 00:00:01 GMT";}}
function isNull(a){return typeof a=='object'&&!a;}
function nl2br(myString){return myString.replace(/\n/g,'<br />\n');}
$(document).ready(function(){$('input.post_redirect_submit').mouseover(function(){window.status=this.title;return true;});$('input.post_redirect_submit').mouseout(function(){window.status='Done';return true;});});function frajax(action,a,b,c,d,e,f,g,h,i,j){var url=siteurl;var r=/(http|https):\/\/.*/;var m=r.exec(window.location);if(m!=null&&m.length>1){if(m[1]=='https'){url=secureurl;}}
url+='/actions/'+action+'.php?';if(a){url+='arg1='+encodeURIComponent(a);}
if(b){url+='&arg2='+encodeURIComponent(b);}
if(c){url+='&arg3='+encodeURIComponent(c);}
if(d){url+='&arg4='+encodeURIComponent(d);}
if(e){url+='&arg5='+encodeURIComponent(e);}
if(f){url+='&arg6='+encodeURIComponent(f);}
if(g){url+='&arg7='+encodeURIComponent(g);}
if(h){url+='&arg8='+encodeURIComponent(h);}
if(i){url+='&arg9='+encodeURIComponent(i);}
if(j){url+='&arg10='+encodeURIComponent(j);}
document.getElementById('frajax-iframe').src=url;return false;}
function jojo_slideshow(id,delay,speed){var selector='#'+id;var spantitle=$(selector+' span:first').attr('title');$(selector+' span:first').before('<img src="'+$(selector+' span:first').attr('rel')+'" alt="" title="'+spantitle+'" />').remove();if($(selector+' div').size()==0){$(selector).append("<div></div>");}
if(!delay){var delay=5000;}
if(!speed){var speed=1000;}
var current=$(selector+' img.current');var next=$(selector+' img.current + img:hidden').size()?$(selector+' img.current + img:hidden'):$(selector+' img:first');var currenttitle=current.attr('title');if((currenttitle!=undefined)&(currenttitle!='undefined')&(currenttitle!='')){$(selector+' div').html(currenttitle).show('fast');}
$(selector).css('background-image','url("'+next.attr('src')+'")');current.fadeTo(delay,1,function(){$(selector+' div').hide('fast').html('');}).fadeOut(speed,function(){var current=$(selector+' img.current');var next=($(selector+' img.current + img:hidden').size()>0)?$(selector+' img.current + img:hidden'):$(selector+' img:first');current.removeClass('current');next.addClass('current').show();jojo_slideshow(id,delay,speed);});}
function checkArticleComment(emailrequired){if(emailrequired==undefined){var emailrequired=true;}
var i=0;var errors=new Array();if(document.getElementById('name').value==''){errors[i++]='Name is a required field';}
if(emailrequired&&(document.getElementById('email').value=='')){errors[i++]='Email is a required field';}
else if(emailrequired&&!validateEmail(document.getElementById('email').value)){errors[i++]='Email is not a valid email format';}
if(document.getElementById('comment').value==''){errors[i++]='Please enter a comment';}
if(document.getElementById('captchacode')&&(document.getElementById('captchacode').value=='')){errors[i++]='Please enter the CAPTCHA code (required to prevent spam)';}
if(errors.length==0){return(true);}else{alert(errors.join("\n"));return(false);}}