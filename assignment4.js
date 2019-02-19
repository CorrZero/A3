function validation()
{
	var messageline = "";
	var firstname = document.getElementById("nameF").value;
	var lastname = document.getElementById("nameL").value;
	if (firstname == "")
	{
		messageline += "You must enter your first name. " + "\n";
	}
	if (lastname == "")
	{
		messageline += "You must enter your last name";
	}
	alert(messageline);
}
