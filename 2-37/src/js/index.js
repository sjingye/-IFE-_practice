"use strict";
import EventUtil from "./event.js";
//dom
let mask = document.querySelector(".mask");
let login = document.querySelector("header li");
let closeBtn = document.querySelector(".close-btn");
let loginBox = document.querySelector(".login-box");
class Emersion {
    constructor(container){
        this.container = container;
    }
    hide(){
        this.container.style.display = "none";
        mask.style.display = "none";
    }
    show(){
        this.container.style.display = "block";
        mask.style.display = "block";
    }
    init(){
        let self = this;
        EventUtil.addEvent(mask,"click",function () {
            self.hide();
        });
        EventUtil.addEvent(closeBtn,"click",function () {
            self.hide();
        });
        EventUtil.addEvent(login,"click",function () {
            self.show();
        });
    }
};
var a = new Emersion(loginBox);
a.init();
