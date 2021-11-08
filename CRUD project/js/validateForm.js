function validate()
{


    let vName, vNumber, vAddress, vEmail, vDepartment, flag = true;
    vName = document.getElementById("fName").value;
    vNumber = document.getElementById("fNumber").value;
    vEmail = document.getElementById("fEmail").value;
    vAddress = document.getElementById("fAddress").value;

	var ele = document.getElementsByName('fDepartment');
	 for(i = 0; i < ele.length; i++) {
                if(ele[i].checked){
					console.log(ele[i].value);
                    document.getElementById("tDepartment").innerHTML = ele[i].value;
                    vDepartment = ele[i].value;
				}
				
                        
    }
    //vDepartment = $("input[type='radio'][name='fDepartment']:checked").val();
    console.log(vName);
    console.log(vNumber);
    console.log(vAddress);
    console.log(vEmail);
    console.log(vDepartment);

	let count = 0;

	for(i = 0; i < ele.length; i++) 
	{
                if(ele[i].checked)
				{
					
					continue;
                    
				}
				else{

					count++;

				}
				
                        
    }

	console.log(count);

	if( vName =="")
	{

		flag = false;
		window.alert("Please insert your Name!");

	}
	else if( vNumber == "")
	{

		flag = false;
		window.alert("Please insert your Phone Number!");
	}
	else if( vAddress == "" )
	{
		flag = false;
		window.alert("Please insert your Address!");
	}
	else if( vEmail == "")
	{
		flag = false;
		window.alert("Please insert your Email!");
	}
	else if(ele.length == count)
	{
		flag = false;
		window.alert("Please insert your Department!");
	}
	else if( !(vName.match(/^[A-Za-z]+$/)))
	{

		flag = false;
		window.alert("Name should only be letters!");

	}
	else if(!(vEmail.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)))
	{

		flag = false;
		window.alert("Invalid Email!");

	}
	else if(!(vNumber.match(/^\d{11}$/)))
	{

		flag = false;
		window.alert("Invalid Phone!");

	}

	if( flag == true )
	{
		insert();
	}
	

}