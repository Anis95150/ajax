

function one (){
    console.log('one loaded');
}

function hello (){
"hello";
}

function dummyReturn (p){
return p;
}

function foo(){
return "bar";
}

function helloWho(nom){
    return ""+nom;
}

function isNumber(n){
    return !isNan(n);
}

function contraire(b){
    if(typeof b != boolean)
    {
        return "erreur of type";
    }
    else
    {
        return !b;
    }
}

function isEmpty(p)
{
    if(
      (typeof p == "Number")
        ||((typeof p == "String")&&(p.length == 0))
        ||((typeof p == "Object")&&(p == null))
    )
    {
        return true;
    }
    else
    {
        return false;
    }
}

// console.log(foo()); // failed
console.log(hello()); // undefined
// console.log(dummyReturn());
// var x = dummyReturn(), log(x);
// console.log(x);
console.log(foo()); // bar
var x = foo();
console.log(foo(x)); // bar
console.log(helloWho("doods")); // hello doods
// console.log(isNumber()); // crashed
// console.log(isNumber(3));

