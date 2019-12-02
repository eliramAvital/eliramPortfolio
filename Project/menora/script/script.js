
$("#changePic button").click(function(){
    if  ( $("#pic").attr("src") == ("images/turnOff.jpg")){
          $("#pic").attr("src","images/turnOn.jpg");
          $("#messageForUser").html("נורה דלוקה");
          $("body").css("background","yellow");
          $("#messageForUser").css("color","green").slideUp(2000).slideDown(2000);
          $("#messageForUser").fadeOut(1000);


        

    }
    else{
        $("#pic").attr("src","images/turnOff.jpg");
        $("#messageForUser").css("color","red").slideUp(2000).slideDown(2000);
          $("#messageForUser").html("נורה כבויה");
          $("#messageForUser").fadeOut(1000);
          $("body").css("background","white");


    }

    });

    function goBack() {
      window.history.back();
    }