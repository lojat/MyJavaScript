//variables

let age = 25;
const name="lokesh";
var isActive= true;

console.log("VARIABLES= \n\t"+"LET= age: "+age+"\n\tCONST= name: "+name+"\n\tVar isActive: "+isActive);

console.log("*******************************************************************************************************************************");
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//primitive data type

let str = "Hello world!";//string
let n=10;//number
let x= false;//boolean
let y;//undefine
let z= null;//null

console.log("PRIMITIVE DATA TYPES= \n\tString= string: "+str+"\n\tNumber= n: "+n+"\n\tBoolean= y: "+x+"\n\tUndefined= z: "+y+"\n\tNull= "+z )

//Non-primitive data ytpe

let obj ={
    id:101,
    name:"lokesh",
    age:24
};

let arr =[12,23,234,24,3];

console.log("Non Primitive data types=\n\tobject= obj: {id: "+obj.id+" name: "+obj.name+" age: "+obj.age+"}"+"\n\tArray= arr: "+arr);

console.log("*******************************************************************************************************************************");
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Loops

console.log("For Loop= ");//for loop
for(let i=0;i<arr.length;i++){
    console.log("\tarr["+i+"]: "+arr[i]);
}

let i=0;
console.log("while Loop=")
while(i<5){//while loop
    i++;
    console.log("\ti: "+i)
}

console.log("Do while loop=")//do while loop
do{
    console.log("\ti: "+i);
    i++;
}while(i<11);

console.log("*******************************************************************************************************************************");
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Conditional Statements:
 let a =3,b=9;
console.log("Conditional Statements=\n\t if/else: ")
if(a<b)
    console.log("\t\t"+a+" is less then "+b);
else
    console.log("\t\t"+a+" is not less then "+b);

//if /else if /else
console.log("if/else if/.../else:")
if(a>b)
    console.log("\t\t"+a+" is greater then "+b);
else if(a==b)
    console.log(+"\t\t"+a+" is equals to "+b);
else
    console.log("\t\t"+a+" is less then "+b);

//switch 
console.log("switch case: ");
switch(3){
    case 1: console.log("\t\t"+1);break;
    case 2: console.log("\t\t"+2);break;
    case 3: console.log("\t\t"+3)
    case 4: console.log("\t\t"+4);break;
    case 5: console.log("\t\t"+5)
    default: console.log("\t\tdefault")
};

console.log("*******************************************************************************************************************************");
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//function

let c=45,d=98;
console.log("function decration=")
//function diclaration
function sum(a,b){
    return a+b;
}

console.log("\t\t"+c+ " + "+d+": "+sum(c,d))

//function expression
const multiply = function(a,b){
    return a*b;
}
console.log("\t\t"+c+" multiply "+d+" :"+multiply(c,d))

//Arrow Function
console.log("Arrow Function: ");
const mod = (c,d)=>{
    return c%d;
}

console.log("\t\t"+c+" % "+d+": "+mod(c,d));
console.log("*******************************************************************************************************************************");
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//error handling

console.log("Error Handling=\n\t try-catch-finally");

try{
    let z= 100/0;
    if(!isFinite(z)){
       throw new Error("Divide by Zero Error:")
    } 
}catch(error){
    console.log("\t\t\t"+error.message);
}finally{
    console.log("\t\t\t Finally block")
}

console.log("*******************************************************************************************************************************");
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
