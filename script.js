//your JS code here. If required.
const year=parseInt(prompt("Enter any year"));

if(year%100==0){
	if(year%400==0){
		alert(366);
	}
	else{
		alert(365);
	}
}
if(year%4==0){
	alert(366);
}
alert(365);