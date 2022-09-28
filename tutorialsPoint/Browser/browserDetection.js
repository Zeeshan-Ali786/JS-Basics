// Browser Detection
let userAgent = navigator.userAgent;
let opera = (userAgent.indexOf('Opera') != -1)
let ie = (userAgent.indexOf('MSIE') != -1)
let gecko = (userAgent.indexOf('Gecko') != -1)
let netscape = (userAgent.indexOf('Mozilla') != -1)
let version = navigator.appVersion;

if(opera){
    document.write("Opera Based Browser")
}else if(gecko){
    document.write("Mozilla Based Browser")
}else if(ie){
    document.write("IE Based Browser")
}else if(netscape){
    document.write("Netscape Based Browser")
}else {
    document.write("Opera Based Browser")
}
document.write("<br />Browser version Info : ",version)