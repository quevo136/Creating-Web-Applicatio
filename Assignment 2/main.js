"use strict";
/*get variables from form and check rules*/
function validate() {
  var errMsg = ""; /* stores the error message */
  var result = true; /* assumes no errors */

  var other = document.getElementById("other").checked;
  //get varibles from form and check rules here
  // if something is wrong set result = false, and concatenate error message

  var dob = document.getElementById("dob").value.split("/");
  var date = new Date(dob[2], parseInt(dob[1]) - 1, dob[0]);
  var today = new Date();
  var age = today.getFullYear() - date.getFullYear();

  if (age >= 80) { // Outside age ranges.
    errMsg = errMsg + "You must be 80 or younger to apply for this job\n";
    result = false;
  }

  if (age <= 15) { // Outside age ranges.
    errMsg = errMsg + "You must be 15 or older to apply for this job\n";
    result = false;
  }

 var postcode = document.getElementById("postcode").value;
 var state = document.getElementById("state").options[document.getElementById("state").selectedIndex].text;

 var regex;
 //VIC = 3 OR 8, NSW = 1 OR 2 ,QLD = 4 OR 9 ,NT = 0 ,WA = 6 ,SA=5 ,TAS=7 ,ACT= 0.
 switch (state) {
    case "Please Select":
        return false;
    case "VIC":
        regex = new RegExp(/(3|8)\d+/);
        break;
     case "NSW":
        regex = new RegExp(/(1|2)\d+/);
        break;
     case "QLD":
        regex = new RegExp(/(4|9)\d+/);
        break;
     case "NT":
        regex = new RegExp(/0\d+/);
        break;
     case "WA":
        regex = new RegExp(/6\d+/);
        break;
     case "SA":
        regex = new RegExp(/5\d+/);
        break;
     case "TAS":
        regex = new RegExp(/7\d+/);
        break;
     case "ACT":
        regex = new RegExp(/0\d+/);
        break;
 }
 if(!postcode.match(regex)){
   errMsg = errMsg + "State and postcode do not match\n";
   result = false;
 }

  if (other && document.getElementById("otherText").value.trim().length===0) {
    errMsg = errMsg + "You have selected other skills, you must enter one other skill in the text box\n";
    result = false;
  }

  if (errMsg != "") { //only display message box if there is something to show
    alert(errMsg);
  }
  return result; //if false the information will not be sent to the server
}

function init() {

  var regForm = document.getElementById("regform"); // get ref to the HTML element

  regForm.onsubmit = validate; //register the event listener 
}

window.onload = init;