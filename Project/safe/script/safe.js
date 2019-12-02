console.log("into");

var myArray = ["1","4","7"];
var firstNumber = 0;
var seccondNumber = 0;
var therdNumber = 0;

      function plus(){
        firstNumber++;
        document.getElementById("userSelection").value = firstNumber;
        

        }
    function minus(){
        firstNumber--;
        document.getElementById("userSelection").value = firstNumber;

    }
        
    function plus1(){
       seccondNumber++;
        document.getElementById("userSelection1").value = seccondNumber ;
    }
    
    function minus1(){
        seccondNumber--;
         document.getElementById("userSelection1").value = seccondNumber;

    }

    function plus2(){
        therdNumber++;
        var valuePlus2 = document.getElementById("userSelection2").value = therdNumber;

    }
        
    function minus2(){
        therdNumber--;
         document.getElementById("userSelection2").value = therdNumber;

    }

    function checkResult(){

        if(firstNumber == myArray[0] && seccondNumber == myArray[1] && therdNumber == myArray[2] ){
            document.getElementById("messageForUser").innerHTML = "ברוך הבא לתוך המערכת";
            document.getElementById("messageForUser").style.color = "green";

        }

           else{
            document.getElementById("messageForUser").innerHTML = "תשובה לא נכונה";
            document.getElementById("messageForUser").style.color = "red";
        }

    }

    function goBack() {
        window.history.back();
      }