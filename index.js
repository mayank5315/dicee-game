var rn1=Math.random();
var rn2=Math.random();
rn1=Math.floor(rn1*6)+1;
if(rn1==1){
    document.getElementsByTagName("img")[0].setAttribute("src","./images/dice1.png");

}
else if(rn1==2){
    document.getElementsByTagName("img")[0].setAttribute("src","./images/dice2.png");
}
else if(rn1==3){
    document.getElementsByTagName("img")[0].setAttribute("src","./images/dice3.png");
}
else if(rn1==4){
    document.getElementsByTagName("img")[0].setAttribute("src","./images/dice4.png");
}
else if(rn1==5){
    document.getElementsByTagName("img")[0].setAttribute("src","./images/dice5.png");
}
else if(rn1==6){
    document.getElementsByTagName("img")[0].setAttribute("src","./images/dice6.png");
}

rn2=Math.floor(rn2*6)+1;
if(rn2==1){
    document.getElementsByTagName("img")[1].setAttribute("src","./images/dice1.png");

}
else if(rn2==2){
    document.getElementsByTagName("img")[1].setAttribute("src","./images/dice2.png");
}
else if(rn2==3){
    document.getElementsByTagName("img")[1].setAttribute("src","./images/dice3.png");
}
else if(rn2==4){
    document.getElementsByTagName("img")[1].setAttribute("src","./images/dice4.png");
}
else if(rn2==5){
    document.getElementsByTagName("img")[1].setAttribute("src","./images/dice5.png");
}
else if(rn2==6){
    document.getElementsByTagName("img")[1].setAttribute("src","./images/dice6.png");
}

if(rn1>rn2){
    document.querySelector("h1").innerHTML="PLAYER 1 WINS";
}
else if(rn2>rn1){
    document.querySelector("h1").innerHTML="PLAYER 2 WINS";
}
else{
    document.querySelector("h1").innerHTML="DRAW";
}