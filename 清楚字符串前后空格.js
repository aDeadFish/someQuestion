if(!String.prototype.trim){
    String.prototype.trim=function(){
        return this.replace(/^\s+/,"").replace(/\s+$/,"");
    }
}
var str=" \t\n test string ".trim();
alert(str=="test string");



function trim(str) {
    if (str && typeof str === "string") {
        return str.replace(/(^\s*)|(\s*)$/g,""); //È¥³ýÇ°ºó¿Õ°×·û
    }
}