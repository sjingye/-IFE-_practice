//DOM
var inp = document.getElementById("inp");
var btns = document.getElementsByTagName("button");
var lin = btns[0];
var rin = btns[1];
var lout = btns[2];
var rout = btns[3];
var wrap = document.getElementsByClassName("wrap")[0];
var arr = [];
//通用的一些方法
function addEvent(element,event,listener) {
    if(element.addEventListener){
        element.addEventListener(event,listener);
    }
    else if(element.attachEvent){
        element.attachEvent("on"+event,listener);
    }
    else{
        element["on"+event] = listener;
    }
}
addEvent(lin,"click",function () {
    if( !(/^\d+$/).test(inp.value.trim()) ){
        alert("请输入正整数");
    }
    else{
        console.log(1);
    }
});
/*btns[0].addEventListener("click",function () {

    arr.unshift(inp.value);

    // draw();
});*/
function draw() {
    wrap.innerHTML="";
    var str = "";
    arr.forEach(function (value,index) {
        str += "<li>"+value+"</li>";
    });
    wrap.innerHTML=str;
};

