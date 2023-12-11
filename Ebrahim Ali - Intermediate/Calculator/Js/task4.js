let num = document.querySelectorAll(".digit");
let operation = document.querySelector(".operation");

for (let i = 0; i < num.length; i++) {
    if (0 < i < 9) {
        num[i].onclick = function () {
            operation.textContent += this.textContent;
        }
    }
}

let ope = document.querySelectorAll(".ope");


for (let i = 0; i < ope.length; i++) {
    if (0 < i < 9) {
        ope[i].onclick = function () {
            operation.textContent += this.value;
        }
    }
}

let clear = document.querySelector(".clear");

clear.onclick = function() {
    operation.textContent = "";
    res.textContent = "";
}

let result = document.querySelector(".equal");
let res = document.querySelector(".res");

result.onclick = function() {
    let re = eval(operation.textContent)
    res.textContent = re;
    operation.textContent = "";
}


