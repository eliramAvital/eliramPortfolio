
function help(){

oneHundredHalf();
twoHundred();
oneHundred();
myTimer();
}

function oneHundred(){
    document.getElementById("body").style.fontSize = "100%";
}
function oneHundredHalf(){
    document.getElementById("body").style.fontSize = "150%";
}
function twoHundred(){
    document.getElementById("body").style.fontSize = "200%";
}


var myVar = setInterval(function() {
    myTimer();
  }, 1000);
  
  function myTimer() {
    var d = new Date();
    document.getElementById("clock").innerHTML = "Time: " + d.toLocaleTimeString();
  }

  $("#btnSend").click(function(){
    var vaild = true;
    var fullName = $.trim($("#fullName").val());
    var email = $.trim($("#email").val());
    var phone = $.trim($("#phone").val());
    var messageUser = $.trim($("#messageUser").val());

    var reg = /^[a-zA-Zא-ת ]+$/;
    var regMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var regPhone = /^\+?(972|0)(\-)?0?(([23489]{1}\d{7})|[5]{1}\d{8})$/;

    if (fullName.length < 2 || fullName.length > 40 || !reg.test(fullName)){
      $("#fullName").addClass("error");
      $("#fullName").val("");
      $("#fullName").attr("placeholder","Enter your name");
      var vaild = false;
    }
    
    if (email.length < 5 || email.length > 40 || !regMail.test(email)){
      $("#email").addClass("error");
      $("#email").val("");
      $("#email").attr("placeholder","Enter your mail");
      var vaild = false;
    }
    if (phone.length < 9 || phone.length > 10 || !regPhone.test(phone)){
      $("#phone").addClass("error");
      $("#phone").val("");
      $("#phone").attr("placeholder","Enter your phone");
      var vaild = false;
    }
    if(messageUser.length < 5 ){
      $("#messageUser").addClass("error");
      $("#messageUser").val("");
      $("#messageUser").attr("placeholder","Enter your message");
      var vaild = false;
    }
    if (vaild == true){
      $("#contactUser").html("הפרטים הוזנו בהצלחה");
      $("#contactUser").css("background","#ADFF2F	");
    }else{
      $("#contactUser").html("טעות באחד השדות בדוק את הפרטים");
      $("#contactUser").css("background","red");
    }


  });