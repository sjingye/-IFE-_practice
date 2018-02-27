"use strict";

const buttons = document.querySelectorAll(".button-wrap button");
const root = document.querySelector(".contain");
const doms = document.querySelectorAll(".wrap div");
let nodelist = [];
let timer = null;

//前序遍历
function preOrder(node) {
    if (node != null) {
        nodelist.push(node);
        preOrder(node.firstElementChild);
        preOrder(node.lastElementChild);
    }
}

//使用递归方式实现中序遍历
function inOrder(node) {
    if (node != null) {
        inOrder(node.firstElementChild);
        nodelist.push(node);
        inOrder(node.lastElementChild);
    }
}

//后序遍历
function postOrder(node) {
    if (node != null) {
        postOrder(node.firstElementChild);
        postOrder(node.lastElementChild);
        nodelist.push(node);
    }
}

Array.from(buttons).forEach((item, index) => {
    item.addEventListener("click", () => {
        nodelist = [];
        clearInterval(timer);
        switch (index) {
            case 0:
                preOrder(root);
                break;
            case 1:
                inOrder(root);
                break;
            default:
                postOrder(root);
        }
        changeColor()
    })
})

function reset() {
    Array.from(doms).forEach(item => {
        item.style.backgroundColor = "transparent";
    })
}

function changeColor() {
    let i = -1;
    timer = setInterval(() => {
        if (i < doms.length - 1) {
            reset();
            i++;
            nodelist[i].style.backgroundColor = "#ff5140";
        } else {
            clearInterval(timer);
            reset();
        }
    }, 500)
}