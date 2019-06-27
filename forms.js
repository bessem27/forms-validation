  

    //var name = document.forms["RegForm"]["Name"];               
   // var password = document.forms["RegForm"]["Password"];  
   // var address = document.forms["RegForm"]["Address"];  
  // function validation()                                   
//{ 
    //if (name.value == "")                                  
   // { 
      //  window.alert("Please enter your name."); 
       // name.focus(); 
        //eturn false; 
    //} 
   
    //if (address.value == "")                               
    //{ 
      //  window.alert("Please enter your address."); 
        //name.focus(); 
        //return false; 
    //} 
       
    //if (email.value == "")                   
        //window.alert("Please enter a valid e-mail address."); 
        //email.focus(); 
        //return false; 
    //} 
   
   // if (email.value.indexOf("@", 0) < 0)                 
   // { 
    //    window.alert("Please enter a valid e-mail address."); 
    //    email.focus(); //
   //     return false; 
    //} 
   
    //if (email.value.indexOf(".", 0) < 0)                 
    //{ 
      //  window.alert("Please enter a valid e-mail address."); 
      //  email.focus(); 
        //return false; 
    //} 
   

    var regex= { 
    email:/^[a-zA-Z-]+@[a-zA-Z-]+\.[a-zA-Z]{2,6}/,
    Password:/^[a-zA-Z0-9_]{8,15}/
    } 



validation=()=>{

    if (document.getElementById('name').value === ""){
        alert("please enter your namme")  
    }
    else if (document.forms.myform.elements.email.value==="") {
        alert("please enter your E-mail")
    }
    else if (regex.email.test(document.forms.myform.elements.email.value)===false){
        alert("E-mail invalid")
    }
    else if (document.forms.myform.elements.password.value==="") {
        alert("Password empty")
    } 
    else if (regex.Password.test(document.forms.myform.elements.password.value)===false){
        alert("Password invalid")
    }
    else if (document.forms.myform.elements.comment.value==="") {
        alert("comments empty")
    }else{
        alert('done')
    }
}
