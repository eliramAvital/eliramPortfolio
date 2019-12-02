var myPrudcts = [];
function kopa(){
/*
productUser1 = זה המשתנה שבתוכו הערך שהיוזר מקליד באינפוט
insideList = זה המשתנה שנכנס בכל שורה של רשימה לא מסודרת בקוד שלי שלוחצים על הוסף פריט 
list = זה האי די שנתתי לאלמנט יו אל בקוד
myArray = השם של המערך הכללי 
*/

    var productUser1 = document.getElementById("productUser").value;
        
     

    if (productUser1 == ""){
        document.getElementById("messageForUser").innerHTML = "לא הוקש פריט";
        document.getElementById("messageForUser").style.color = "red";

    }
    else{
        var insideList = document.createElement("li");
        document.getElementById("list").appendChild(insideList);
        insideList.innerHTML += productUser1;
        document.getElementById("messageForUser").innerHTML = "פריט נוסף בהצלחה";
        document.getElementById("messageForUser").style.color = "green";
        myPrudcts.push(productUser1);
        self.counter();

        }
}

function counter(){
document.getElementById("countOfProducts").innerHTML = " סך כל הפריטים בסל הוא " + myPrudcts.length;
document.getElementById("countOfProducts").style.color = "blue";

}

function goBack() {
    window.history.back();
  }


