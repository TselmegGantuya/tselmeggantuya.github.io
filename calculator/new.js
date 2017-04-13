var a = "";
var v1 = "";
var v2 = "";
var nice = "";
function print (show)
{

	document.getElementById("box").innerHTML = show;
}
function c()
{
a = "";
v1 = "";
v2 = "";
nice="";
print(a);
}
function show (clicked_id) 
{
	a = a + clicked_id;
	print(a);
	if(nice == "")
	{
		v1 = v1 + clicked_id;
	}
	else
	{
		v2 = v2 + clicked_id;
	}
	
}
function is()
{

		switch (nice)
	{	
		case "+":
		v1 = Number(v1) + Number(v2);
		a = v1;
		break;
			
		case "-":
		v1 = Number(v1) - Number(v2);
		a = v1;
		break;
			
		case "/":
		v1 = Number(v1) / Number(v2);
		a = v1;
		break;

		case "*":
		v1 = Number(v1) * Number(v2);
		a = v1;
		break;
	}
 	a = v1;
	print(a);
	nice="";
}
function but (ding)
{
	

	console.log(v2);
	
	switch (nice)
	{	
		case "+":
		v1 = Number(v1) + Number(v2);
		a = v1;
		break;
			
		case "-":
		v1 = Number(v1) - Number(v2);
		a = v1;
		break;
			
		case "/":
		v1 = Number(v1) / Number(v2);
		a = v1;
		break;

		case "*":
		v1 = Number(v1) * Number(v2);
		a = v1;
		break;
	}
	nice = ding;
	console.log(v1);
	a = a + ding;
	v2 = "";
	print(a);
}