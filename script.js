let text="     hello world   "
let text1=text.trim();
console.log(text.length +" "+ text1.length);
document.getElementById("p1").innerHTML=(text.length +" "+ text1.length);


let text2="     hello world   "
let text3=text2.trimStart();
console.log(text2.length +" "+ text3.length);
document.getElementById("p2").innerHTML=(text2.length +" "+ text3.length);


let text4="     hello world        "
let text5=text.trimEnd();
console.log(text4.length +" "+ text5.length);
document.getElementById("p3").innerHTML=(text4.length +" "+ text5.length);


let text6="2";
let text7=text6.pad(4,"0");
console.log(text7);

  