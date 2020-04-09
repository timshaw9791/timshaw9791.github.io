
var a=10,fn,var=function(x){
    var b=5;
    fn(x+b);
};

fn=function(y){
var c=5;
    console.log(y+c);
}
bar(10);



var a=10,b=20
function fn(x){
    var a=100,c=300;
    function bar(x){
        var a=1000,d=4000
    }
    bar(100);
    bar(200);
}



var x=10
function fn(){
    var b=20;
    console.log(x+b);
}


var x=10;
function fn(){
    console.log(x);
}

function show(f){
    var x=20;
    (function(){
        f
    })
}





var value=11;
var initvalue=22;

function  addition(){
    var value=initvalue;

    return function add(x){
        value=value+x;
    };

}

var func=addition();

func(33);
func(44);








var x=10;

function fn(){
    console.log(x);
}

function show(f){
    var x=20;
    (function(){
        f();
    })();
}
show(fn);




var a=10

function fn(){
    var b=20;
    function bar(){
        console.log(a+b);
    }
    return bar;
    
}

var x=fn(),b=200;
x();




