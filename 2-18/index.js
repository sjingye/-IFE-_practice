//DOM
var inp = document.getElementById("inp");
var btns = document.querySelectorAll(".btn");
var lin = btns[0];
var rin = btns[1];
var lout = btns[2];
var rout = btns[3];
var wrap = document.querySelector(".wrap");
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
};

//为各个按钮加上点击事件
addEvent(lin,"click",function () {
    var val = inp.value.trim();
    if( !(/^(?:[1-9]\d|100)$/g).test(val) ){
        alert("请输入10-100之间的正整数");
    }
    else{
        arr.unshift( val );
    }
    draw();
    inp.value="";
});
addEvent(rin,"click",function () {
    var val = inp.value.trim();
    if( !(/^(?:[1-9]\d|100)$/g).test(val) ){
        alert("请输入10-100之间的正整数");
    }
    else{
        arr.push( getValue() );
    }
    draw();
    inp.value="";
});

addEvent(lout,"click",function () {
    alert(arr.shift());
    draw();
});

addEvent(rout,"click",function () {
    alert(arr.pop());
    draw();
});

//为每个加上的元素添加点击事件
addEvent(wrap,"click",function (e) {
    if(e.target.nodeName === "LI"){
        var index = arr.indexOf(e.target.innerHTML);
        arr.splice(index,1);
        draw();
    }
});
//根据数组修改wrap的html
function draw() {
    wrap.innerHTML= arr.map(function (item) {
        return "<li>"+item+"</li>";
    }).join("");
};

