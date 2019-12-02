console.log("into");

var tzionimArray = [];

function add() {

    var tzionFromUser = document.getElementById("tzionUser").value;


    if (tzionFromUser == "") {
        document.getElementById("messageForUser").innerHTML = "לא הוקש ציון";
        document.getElementById("messageForUser").style.color = "red";
    }
    else {
        tzionimArray.push(tzionFromUser);
        var newTzion = document.createElement("li");
        document.getElementById("list").appendChild(newTzion);
        document.getElementById("list").innerHTML += tzionFromUser;
        document.getElementById("messageForUser").innerHTML = "ציון הוקש בהצלחה";
        document.getElementById("messageForUser").style.color = "green";
        console.log(tzionimArray);
        self.counter();
    }
}
function counter() {
    document.getElementById("couner").innerHTML = "  כמות הציונים היא " + tzionimArray.length;
    couner.style.color = "blue";
}

function average() {
    var total = 0;
    for (var i = 0; i < tzionimArray.length; i++) {
        var tzion = tzionimArray[i];
        tzion = Number(tzion);

        total += tzion;


    }
    var average = total / tzionimArray.length;
    document.getElementById("averageUser").innerHTML = "הממוצע הוא " + average;
}

function max() {
    var max = 0;
    for (var i = 0; i < tzionimArray.length; i++) {
        if (max < tzionimArray[i]) {
            max = tzionimArray[i];
        }
    }
    document.getElementById("max").innerHTML = "המספר הגבוה ביותר הוא " + max;

}

function min(){

    var min = 101;
    for (var i = 0; i < tzionimArray.length; i++){
        if (min > tzionimArray[i]){
            min = tzionimArray[i];
        }
    }
    document.getElementById("min").innerHTML = " המספר הנמוך ביותר הוא " + min;
}
function goBack() {
    window.history.back();
  }

