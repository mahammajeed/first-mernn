function ABC(){
    var b = document.getElementById("firstname").value;

    
    var a = document.getElementById("mobilenumber").value;
    if(a==""){
      document.getElementById("messages").innerHTML="**Please fill mobile number";
      return false;
    }
    if(isNaN(a)){
      document.getElementById("messages").innerHTML="**Only Numbers are valid!";
      return false;
    
    }
    if(a.length<11){
      document.getElementById("messages").innerHTML="**Mobile number must be of 12 digit";
      return false;
    
    }
    if(a.length>11){
      document.getElementById("messages").innerHTML="**Mobile number must be of 12 digit";
      return false;
    
    }
    }

    
  function validate() {
    var firstname = document.getElementById("firstname");
    var alpha = /^[a-zA-Z\s-, ]+$/;  
    if (firstname.value == "") {
        alert('Please enter Name');
       
        return false;
    }
    else if (!firstname.value.match(alpha)) {
      document.getElementById("firstname").innerHTML="**invalid name format";      
        return false;
   }
   else 
   {
    return true;
   }
}
    var reg =/^[0-9]{5}-[0-9]{7}-[0-9]{1}$/;
    function cnic_validation(cnic){
      var OK = reg.exec(cnic.value);
      if(!OK){
        document.getElementById("messagetwo").innerHTML="**invalid cnic format";
    
      }
      else{
        
        return true;
      }
    
    }
    
