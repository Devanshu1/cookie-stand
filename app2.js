'use strict';

function submitAnswer() { 
    
  var l = getElementById("loc"); 
    document.getElementById("tt").innerHTML = l.value+ "****************************************************";
    var newShop = new Shop(l.value, "0", "0", "0");
    // alert("hello world");
return false;
}



// var form= document.getElementById('new_question');
// document.getElementById('submitBtn').addEventListener("click", submitAnswer);