var arrayUserNames = [];

function userName(){

    var userName = document.getElementById("user").value;
    arrayUserNames.push(userName);
    if(userName == ""){
        document.getElementById("messageForUser").innerHTML = "לא הוקשו נתונים";
    }
    else{
        document.getElementById("messageForUser").innerHTML = "משתמש נוסף בהצלחה";

    }
}

function checkUser(){

    for(var i = 0; i < arrayUserNames.length; i++){
        var checkUser1 = document.getElementById("checkUser").value;
    }
        if(arrayUserNames.includes(checkUser1)){
            document.getElementById("messageForUser").innerHTML = "משתמש קיים כבר";
        }
        else if(arrayUserNames ==""){
            document.getElementById("messageForUser").innerHTML = "פעולה לא חוקית";
        }
        else{
            document.getElementById("messageForUser").innerHTML = " משתמש לא קיים במערכת";
        }
    }


