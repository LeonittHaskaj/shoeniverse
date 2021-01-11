function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    var y = document.forms["myForm"]["lname"].value;
    var z = document.forms["myForm"]["message"].value;
    if (x == "" || y == "" || z == "") {
    alert("Please fill all imputs");
    return false;
    }
}

function ValidateEmail(mail) 
{
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(myform.email.value))
        {
    return (true)
}
    alert("You have entered an invalid email address!")
    return (false)
}
