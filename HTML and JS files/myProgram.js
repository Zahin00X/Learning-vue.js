

function insert()
{
	
   var $_name = document.getElementById("fName").value;
   var $_phone = document.getElementById("fNumber").value;
   var $_address = document.getElementById("fAddress").value;
   var $_email = document.getElementById("fEmail").value;
 //  var $_department = document.getElementsByName("fDepartment").value;
   document.getElementById("tName").innerHTML= $_name; 
   document.getElementById("tNumber").innerHTML= $_phone;
   document.getElementById("tAddress").innerHTML= $_address;
   document.getElementById("tEmail").innerHTML= $_email;

   
   var ele = document.getElementsByName('fDepartment');
	 for(i = 0; i < ele.length; i++) {
                if(ele[i].checked){
					console.log(ele[i].value);
                    document.getElementById("tDepartment").innerHTML = ele[i].value;
                    var $_department = ele[i].value;
				}
				
                        
    }
  
     
    myObject.message= "Name: " + $_name  + "Phone: " + $_phone  + "Address: " + $_address  + "Email: " + $_email  + "Department: " + $_department ;

}

