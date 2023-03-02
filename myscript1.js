window.onload = function () {
    
    let a=0, b=0, c=0, y=0, x ;
    var regExp = /[a-zA-Z]/;
    var appendScrn = document.getElementById("scrn");
    var button1 = document.getElementById("1");
    var button2 = document.getElementById("2");
    var button3 = document.getElementById("3");
    var button4 = document.getElementById("4");
    var button5 = document.getElementById("5");
    var button6 = document.getElementById("6");
    var button7 = document.getElementById("7");
    var button8 = document.getElementById("8");
    var button9 = document.getElementById("9");
    var button0 = document.getElementById("zero");
    var buttondot = document.getElementById("dot");
    var buttonp = document.getElementById("plus");
    var buttons = document.getElementById("subtraction");
    var buttonm = document.getElementById("multiplication");
    var buttond = document.getElementById("division");
    var buttone = document.getElementById("equals");
    var buttonc = document.getElementById("clr");

    function equal(a,b,y) {
        b = store ();
        if (regExp.test(b)){
            alert("Only numbers and Math Symbols are allowed!");
        }
        else {
            console.log(a,b,y);
            var [a, b, y] = compute(a,b,y);
            console.log(a,y,b)
            b = 0;
            console.log(a);
            appendScrn.value = a;
        }
        
        return a
    }

    function compute(a=1,b=2,y=0) {  
        console.log(b);
        if(y!==0){
            b = parseFloat(b);
            if(y=="+"){
                a = a + b;
            }
            else if(y=="-"){
                a = a - b;
            }
            else if(y=="*"){
                a = a * b;
            }
            else if(y=="/"){
                a = a / b;
            }      
        }
        else if(y==0){
            a = eval(b);  
        }
        console.log(a);
        return [a, b, y];
    }
    function store () {
        var b = appendScrn.value;
        return b;
    }

    button1.onclick = function () {
        
        b += "1";
        appendScrn.value += "1";
        console.log(b);
        
    }
    button2.onclick = function () {
        appendScrn.value += "2";
        b += "2";
        console.log(b);
    }
    button3.onclick = function () {
        appendScrn.value += "3";
        b += "3";
        console.log(b);
    }
    button4.onclick = function () {
        appendScrn.value += "4";
        b += "4";
        console.log(b);
    }
    button5.onclick = function () {
        appendScrn.value += "5";
        b += "5";
        console.log(b);
    }
    button6.onclick = function () {
        appendScrn.value += "6";
        b += "6";
        console.log(b);
    }
    button7.onclick = function () {
        appendScrn.value += "7";
        b += "7";
        console.log(b);
    }
    button8.onclick = function () {
        appendScrn.value += "8";
        b += "8";
        console.log(b);
    }
    button9.onclick = function () {
        appendScrn.value += "9";
        b += "9";
        console.log(b);
    }
    button0.onclick = function () {
        appendScrn.value += "0";
        b += "0";
        console.log(b);
    }
    buttondot.onclick = function () {
        appendScrn.value += ".";
        b += ".";
        console.log(b);
    }
    buttonp.onclick = function () {
        b = store ();
        a=parseFloat(b);
        appendScrn.value = "";
        b = 0;
        y = "+";
        console.log(a, y, b);

    }
    buttons.onclick = function () {
        b = store ();
        a=parseFloat(b);
        appendScrn.value = "";
        b = 0;
        y = "-";
        console.log(a, y, b);

    }
    buttonm.onclick = function () {
        b = store ();
        a=parseFloat(b);
        appendScrn.value = "";
        b = 0;
        y = "*";
        console.log(a, y, b);

    }
    buttond.onclick = function () {
        b = store ();
        a=parseFloat(b);
        appendScrn.value = "";
        b = 0;
        y = "/";
        console.log(a, y, b);

    } 
    buttone.onclick = function () {
        equal(a,b,y);
    }
    buttonc.onclick = function () {
        a=0,b=0,c = 0, y=0;
        appendScrn.value = "";
    }
    appendScrn.addEventListener("keypress", function(event){
        if (event.key === "Enter") {
            event.preventDefault();
            equal (a,b,y);
        }
    });
    document.addEventListener("keypress", function(event){
        if (event.key === "Enter") {
            event.preventDefault();
            equal (a,b,y);
        }
        else {
            appendScrn.value += event.key;
        }
        
    })
    
}