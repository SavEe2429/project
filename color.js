var color = Math.floor(Math.random()*10+1)
var num,number,red,pink,blue,green,yellow,purple,gray,black,orange,white;
var correct = 0;
var wrong = 0;

// num = Number(document.getElementById('input').value);

// red = Number(document.getElementById('1').innerText);
// pink = Number(document.getElementById('2').innerText);
// blue = Number(document.getElementById('3').innerText);
// green = Number(document.getElementById('4').innerText);
// yellow = Number(document.getElementById('5').innerText);
// purple = Number(document.getElementById('6').innerText);
// gray = Number(document.getElementById('7').innerText);
// black = Number(document.getElementById('8').innerText);
// orange = Number(document.getElementById('9').innerText);
// white = Number(document.getElementById('10').innerText);


console.log(num)
console.log(color)


// console.log(correct)
// console.log(wrong)
console.log(correct+wrong)

for (let i = 1; i<=5 ; i++) {
function red() {
    red = Number(document.getElementById('1').innerText);
    if(red == color ) {
        correct++;
        document.getElementById('answer').innerText = "ถั่วต้มม :"+" "+correct;
        color = Math.floor(Math.random()*10+1);
        document.getElementById('num').innerText = correct+wrong;

        console.log(correct+wrong)

    }else {
        wrong++;
        document.getElementById('wrong').innerText = "ลองใหม่น้า :"+" "+wrong;
        color = Math.floor(Math.random()*10+1)
    }
}
}

for (let i = 1 ; i<=5 ; i++) {
    function pink() {
    pink = Number(document.getElementById('2').innerText);
    if (pink == color){
        correct++;
        document.getElementById('answer').innerText = "ถั่วต้มม :"+" "+correct;
        color = Math.floor(Math.random()*10+1)
    }else {
        wrong++;
        document.getElementById('wrong').innerText = "ลองใหม่น้า :"+" "+wrong;
        color = Math.floor(Math.random()*10+1)
    }console.log(color);
}
}


for (let i = 1 ; i<=5 ; i++) {
    function blue() {
    blue = Number(document.getElementById('3').innerText);
    if (blue == color){
        correct++;
        document.getElementById('answer').innerText = "ถั่วต้มม :"+" "+correct;
        color = Math.floor(Math.random()*10+1)
    }else {
        wrong++;
        document.getElementById('wrong').innerText = "ลองใหม่น้า :"+" "+wrong;
        color = Math.floor(Math.random()*10+1)
    }console.log(color);
}
}


for (let i = 1 ; i<=5 ; i++) {
    function green() {
    green = Number(document.getElementById('4').innerText);
    if (green == color){
    correct++;
    document.getElementById('answer').innerText = "ถั่วต้มม :"+" "+correct;
    color = Math.floor(Math.random()*10+1)
    }else {
        wrong++;
        document.getElementById('wrong').innerText = "ลองใหม่น้า :"+" "+wrong;
        color = Math.floor(Math.random()*10+1)
    }console.log(color);
}
}


for (let i = 1 ; i<=5 ; i++) {
    function yellow() {
    yellow = Number(document.getElementById('5').innerText);
    if (yellow == color){
        correct++;
        document.getElementById('answer').innerText = "ถั่วต้มม :"+" "+correct;
        color = Math.floor(Math.random()*10+1)
    }else {
        wrong++;
        document.getElementById('wrong').innerText = "ลองใหม่น้า :"+" "+wrong;
        color = Math.floor(Math.random()*10+1)
    }console.log(color);
}
}

for (let i = 1 ; i<=5 ; i++) {
    function purple() {
    purple = Number(document.getElementById('6').innerText);
    if (purple == color){
        correct++;
        document.getElementById('answer').innerText = "ถั่วต้มม :"+" "+correct;
        color = Math.floor(Math.random()*10+1)
    }else {
        wrong++;
        document.getElementById('wrong').innerText = "ลองใหม่น้า :"+" "+wrong;
        color = Math.floor(Math.random()*10+1)
    }console.log(color);
}
}

for (let i = 1 ; i<=5 ; i++) {
    function gray() {
    gray = Number(document.getElementById('7').innerText);
    if (gray == color){
        correct++;
        document.getElementById('answer').innerText = "ถั่วต้มม :"+" "+correct;
        color = Math.floor(Math.random()*10+1)
    }else {
        wrong++;
        document.getElementById('wrong').innerText = "ลองใหม่น้า :"+" "+wrong;
        color = Math.floor(Math.random()*10+1)
    }console.log(color);
}
}

for (let i = 1; i<=5 ; i++) {
    function black() {
    black = Number(document.getElementById('8').innerText);
    if (black == color){
        correct++;
        document.getElementById('answer').innerText = "ถั่วต้มม :"+" "+correct;
        color = Math.floor(Math.random()*10+1)
    }else {
        wrong++;
        document.getElementById('wrong').innerText = "ลองใหม่น้า :"+" "+wrong;
        color = Math.floor(Math.random()*10+1)
    }console.log(color);
}
}

for (let i = 1; i<=5 ; i++) {
    function orange() {
    orange = Number(document.getElementById('9').innerText);
    if (orange == color){
        correct++;
        document.getElementById('answer').innerText = "ถั่วต้มม :"+" "+correct;
        color = Math.floor(Math.random()*10+1)
    }else {
        wrong++;
        document.getElementById('wrong').innerText = "ลองใหม่น้า :"+" "+wrong;
        color = Math.floor(Math.random()*10+1)
    }console.log(color);
}
}


for (let i = 1 ; i<=5 ; i++) {
    function white() {
    white = Number(document.getElementById('10').innerText);
    if (white == color){
        correct++;
        document.getElementById('answer').innerText = "ถั่วต้มม :"+" "+correct;
        color = Math.floor(Math.random()*10+1)
    }
    else {
        wrong++;
        document.getElementById('wrong').innerText = "ลองใหม่น้า :"+" "+wrong;
        color = Math.floor(Math.random()*10+1)
    }
    console.log(color);
}
}



