"use strict";
/*get variables from form and check rules*/
function validate() {
  var errMsg = ""; /* stores the error message */
  var result = true; /* assumes no errors */

 
  //get varibles from form and check rules here
  // if something is wrong set result = false, and concatenate error message



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