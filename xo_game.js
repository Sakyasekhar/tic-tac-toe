let p=1;
let a,b,c,d,e,f,g,h,i
let j1=0,j2=0,j3=0,j4=0,j5=0,j6=0,j7=0,j8=0,j9=0

let xo1 = document.querySelector('#cell1');
let xo2 = document.getElementById('cell2');
let xo3 = document.getElementById('cell3');
let xo4 = document.getElementById('cell4');
let xo5 = document.getElementById('cell5');
let xo6 = document.getElementById('cell6');
let xo7 = document.getElementById('cell7');
let xo8 = document.getElementById('cell8');
let xo9 = document.getElementById('cell9');


function XO1(){
    let content=document.getElementById("cell1")
    while (j1<1){
    if(p%2!=0){
        content.textContent="X"; 
        a =1
        p++
        content.disabled = true;content.style.cursor='not-allowed';
    }
    else{
        content.textContent="O" 
        a=0
        p++
        content.disabled = true;xo1.style.cursor='not-allowed';
    }
    j1++}
}
function XO2(){
    let content=document.getElementById("cell2")
    while (j2<1){
    if(p%2!=0){
        content.textContent="X" 
        b =1
        p++
    }
    else{
        content.textContent="O" 
        b=0
        p++
    }
    j2++}
}
function XO3(){
    let content=document.getElementById("cell3")
    while (j3<1){
    if(p%2!=0){
        content.textContent="X" 
        c =1
        p++
    }
    else{
        content.textContent="O" 
        c=0
        p++
    }
    j3++}
}
function XO4(){
    let content=document.getElementById("cell4")
    while (j4<1){
    if(p%2!=0){
        content.textContent="X"
        d =1 
        p++
    }
    else{
        content.textContent="O" 
        d=0
        p++
    }
    j4++}
}
function XO5(){
    let content=document.getElementById("cell5")
    while (j5<1){
    if(p%2!=0){
        content.textContent="X" 
        e =1
        p++
    }
    else{
        content.textContent="O" 
        e=0
        p++
    }
    j5++}
}
function XO6(){
    let content=document.getElementById("cell6")
    while (j6<1){
    if(p%2!=0){
        content.textContent="X" 
        f =1
        p++
    }
    else{
        content.textContent="O" 
        f=0
        p++
    }
    j6++}
}
function XO7(){
    let content=document.getElementById("cell7")
    while (j7<1){
    if(p%2!=0){
        content.textContent="X" 
        g =1
        p++
    }
    else{
        content.textContent="O" 
        g=0
        p++
    }
    j7++}
}
function XO8(){
    let content=document.getElementById("cell8")
    while (j8<1){
    if(p%2!=0){
        content.textContent="X" 
        h =1
        p++
    }
    else{
        content.textContent="O" 
        h=0
        p++ 
    }
    j8++}
}
function XO9(){
    let content=document.getElementById("cell9")
    while (j9<1){
    if(p%2!=0){
        content.textContent="X" 
        i =1
        p++
    }
    else{
        content.textContent="O"
        i=0
        p++
    }
    j9++}
}
function winner(){
    let winnerdisplay=document.getElementById("display")
     if((a==1&&b==1&&c==1)|| (d==1&&e==1&&f==1) || (g==1&&h==1&&i==1) || (a==1&&e==1&&i==1) || (a==1&&d==1&&g==1) || (c==1&&f==1&&i==1)  || (b==1&&e==1&&h==1)  || (c==1&&e==1&&g==1)){ 
         winnerdisplay.textContent="Winner: Player1"
     }
     else if ((a==0&&b==0&&c==0)|| (d==0&&e==0&&f==0) || (g==0&&h==0&&i==0) || (a==0&&e==0&&i==0) || (a==0&&d==0&&g==0) || (c==0&&f==0&&i==0)  || (b==0&&e==0&&h==0)  || (c==0&&e==0&&g==0)) {
        winnerdisplay.textContent="Winner: Player2"
     }
     else if((a==0 ||a==1) && (b==0 ||b==1) && (c==0 ||c==1) && (d==0 ||d==1) && (e==0 ||e==1) && (f==0 ||f==1) && (g==0 ||g==1) && (h==0 ||h==1) && (i==0 ||i==1)){
        winnerdisplay.textContent="It's a draw"
     }
     
}






