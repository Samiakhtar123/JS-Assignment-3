//Ques 1
let M=5;

let Grades;

switch (true) {
    case (M<=10):
    Grades= "E";    
    break;

    case (M>11 && M<=20):
    Grades= "D";    
    break;

    case (M>21 && M <=30):
    Grades= "C";    
    break;

    case (M>31 && M<=40):
    Grades= "B";    
    break;

    case (M>41 && M<=50):
    Grades= "A";    
    break;

    default:    
        break;
}

console.log("Your grades is",(Grades));

//Ques 2

let Input="E";

let given;

switch (true) {
    case ((Input=="P")||(Input=="p")):
    given ="PrepBytes"
    break;

    case((Input=="Z")||(Input=="z")):
    given ="Zenith";
    break;

    case((Input=="E")||(Input=="e")):
    given ="Expert Coder";
    break;

    case((Input=="D")||(Input=="d")):
    given ="Data Structure";
    break;

    default:
    given="Invalid"   
}

console.log(given);

//Ques 3

let a=10;
let b=20
let c=5;

if(a>b && a>c){
    console.log("a is greatest");
}
else if(b>c && b>a){
     console.log("b is greatest");     
}
else if(c>a && c>b){
    console.log("c is greatest");    
}
else{
    console.log("two or three no are same");
}

//Ques 4

let x=5;
let y=9;
let z=8;

if(x>y && x<z){
    console.log("x is 2nd highest");
    
}
else if(y>x && y<z){
    console.log("y is 2nd highst");
    
}
else if(z>x && z<y){
    console.log("z is 2nd highest");
    
}
else {
    console.log("two or more are same");
    
}

//Ques 5

let angle1=40;
let angle2=60;
let angle3=80;

if((angle1+angle2+angle3)!==180){
    console.log("the triangle are not valid");
    
}
else if(angle1 > 90 || angle2 > 90 || angle3 >90){
    console.log("this is obtuse angle traingle");
    
}
else if(angle1 < 90 && angle2 < 90 && angle3 < 90){
    console.log("this is acute angle traingle");
}
else {
    console.log("this is valid traingle");
    
}