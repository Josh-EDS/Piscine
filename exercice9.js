
let meaningOfLife = "";
let result = "";

if (input_var == "42") {
    meaningOfLife = "This is the meaning of life";
} else if (typeof input_var == "number") {
    if (!Number.isInteger(input_var)) {
        result = "float"
	} else {
        result = "Integer" 
    }
} else {
		result = typeof input_var
}

document.getElementById("out").innerHTML = 
"The variable value is '"+input_var+"'"+"<br>Its type is "+result+"<br>"+meaningOfLife