
var userOp = ["+","-","/","*"];

function newTargil(){
    document.getElementById("num1").innerHTML = getRandomNumber();
    document.getElementById("num2").innerHTML = getRandomNumber();
    
}

function result(){

    var n1 = document.getElementById("num1").innerHTML;
    var n2 = document.getElementById("num2").innerHTML;
    n1 = Number(n1);
    n2 = Number(n2);
    var resultUser = document.getElementById("result").value;
    if (n1 + n2 == resultUser){
        document.getElementById("messageForUser").innerHTML = "כל הכבוד";
        newTargil();
      
    }
    else{
        document.getElementById("messageForUser").innerHTML = "לא כל הכבוד";
    }
}

function getRandomNumber(){
    return Math.floor(Math.random() *10 + 1);
}



function goBack() {
    window.history.back();
  }

  




    
