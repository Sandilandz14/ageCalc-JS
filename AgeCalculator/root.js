var birthYear = parseInt(prompt("Enter year of birth: ")); 
var currentYear = parseInt(prompt("Enter current year: ")); 
function calcAge(birthYear, currentYear){ 
if (currentYear>birthYear){ 
return (currentYear-birthYear) 
} else if (currentYear==birthYear){ 
return 0 
} else{ 
alert("Alert! Error!"); 
} 
}; 
currentAge = calcAge(birthYear, currentYear); 
document.getElementById("agecalc").innerHTML = "Your current age is "+currentAge+" years."

var noName = "Zizipo";
document.getElementById("name").innerHTML = noName