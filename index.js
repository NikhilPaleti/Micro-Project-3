var btn = new Array();

btn[1] =  document.getElementById("1");
btn[2] =  document.getElementById("2");
btn[3] =  document.getElementById("3");
btn[4] =  document.getElementById("4");
btn[5] =  document.getElementById("5");
btn[6] =  document.getElementById("6");
btn[7] =  document.getElementById("7");
btn[8] =  document.getElementById("8");
btn[9] =  document.getElementById("9");
btn[0] =  document.getElementById("0");
btn[10] =  document.getElementById(".");
btn[11] =  document.getElementById("/");
btn[12] =  document.getElementById("*");
btn[13] =  document.getElementById("+");
btn[14] =  document.getElementById("-");
btn[15] =  document.getElementById("DEL");
btn[16] =  document.getElementById("RESET");
btn[17] =  document.getElementById("EQUAL");
display = document.getElementById("display");

var equation = "";
document.getElementById("display").innerHTML = 0;

for (let i=0; i<15; i++){
    btn[i].addEventListener('click', function() {
        // console.log(btn[i].id, "was clicked");
        // equation.push(btn[i].id);
        equation+=btn[i].id;
        document.getElementById("display").innerHTML = equation;
        console.log(equation);
    });
}
btn[15].addEventListener('click', function() {
    // console.log(btn[15].id, "was clicked");
    // equation.pop();
    equation=equation.slice(0,-1);
    if (equation === ""){
        document.getElementById("display").innerHTML = 0;
    }
    else{
        document.getElementById("display").innerHTML = equation;
    }
    console.log(equation);
});
btn[16].addEventListener('click', function() {
    equation = "";
    document.getElementById("display").innerHTML = 0;
});
btn[17].addEventListener('click', function() {
    // console.log(btn[17].id, "was clicked");
    // var str=""
    // for (let i=0; i<equation.length; i++){
    //     str+=equation[i];
    // }
    
    let result = eval(equation);
    console.log(result);
    document.getElementById("display").innerHTML = result;
    equation = "";

});
