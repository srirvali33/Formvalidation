//Function which inserts <span> notification element immediately after each form field
function addSpanTag(element){
    var inputelemts=document.querySelectorAll('input');
    var inputLength = inputelemts.length;
        for(var i = 0;i < inputLength; i++) {  
            var spanTag = document.createElement("span");
            inputelemts[i].parentNode.appendChild(spanTag).style.cssText = "visibility: hidden; display: none";            
        }
    }
    //Declaring variables with infoMessages When the field is currently being edited
    var userNameInfo="The username field must contain only alphanumeric characters",
    passwordInfo="The password field should be at least six characters long.",
    emailInfo="A valid email consists of an email prefix and an email domain. The prefix appears to the left of the @ symbol and domain appears to the right of the @ symbol"
    
    //Adding focus event for input fields When the field is currently being edited
    document.querySelectorAll('input').forEach(item => {
        item.addEventListener('focus', event => {
            //Calling addInfo function for dispalying infoMessages when input is edited
            addInfo(item);
        })
    });
    
    //Adding focusout event for input fields When the input field is focussed out
    document.querySelectorAll('input').forEach(item => {
        item.addEventListener('blur', event => {
            //calling VaildateInfo function for validating the input values entered
            VaildateInfo(item);
        })
      })
    
    // AddInfo function for displaying respective infoMessages When the field is currently being edited
    function addInfo(element){
    var currentElement=element.getAttribute("id"),
        infoElement=element.parentNode.querySelector('span')
        switch (currentElement)   
            {  
            case "username":
                    infoElement.classList.remove("ok");
                    infoElement.classList.remove("error");
                    infoElement.classList.add("info");
                    infoElement.style.cssText = "visibility: visible";    
                    infoElement.textContent=userNameInfo;
                    break;  
            case "pwd":
                    infoElement.classList.remove("ok");
                    infoElement.classList.remove("error");
                    infoElement.classList.add("info");
                    infoElement.style.cssText = "visibility: visible";    
                    infoElement.textContent=passwordInfo;      
                    break;  
            case "email":
                    infoElement.classList.remove("ok");
                    infoElement.classList.remove("error");
                    infoElement.classList.add("info");
                    infoElement.style.cssText = "visibility: visible";    
                    infoElement.textContent=emailInfo;       
                    break;   
            } 
    }
    
    //VaildateInfo function to validate input values and update infoMessages of notification element based on the output returned
    function VaildateInfo(element){
        var currentElement=element.getAttribute("id"),
            infoElement=element.parentNode.querySelector('span'),
            inputValue=element.value;
            switch (currentElement)   
            {  
            case "username":
                   //calling validateUserName function to validate username value
                   var isValid= validateUserName(inputValue);
                   if(inputValue==""){
                    infoElement.classList.remove("info");
                    infoElement.style.cssText = "visibility: hidden; display: none"; 
                   }
                   else{
                    if(isValid){
                        infoElement.classList.remove("error");
                        infoElement.classList.remove("info");
                        infoElement.classList.add("ok");
                        infoElement.style.cssText = "visibility: visible;color:green";
                        infoElement.textContent="Ok"; 
                    }
                    else{
                        infoElement.classList.remove("ok");
                        infoElement.classList.remove("info");
                        infoElement.classList.add("error");
                        infoElement.style.cssText = "visibility: visible;color:red";
                        infoElement.textContent="Error"; 
                    }
                 }
                    break;  
            case "pwd":
                //calling validatePassword function to validate password value
                var isValid=validatePassword(inputValue);
                if(inputValue==""){
                    infoElement.classList.remove("info");
                    infoElement.style.cssText = "visibility: hidden; display: none";  
                   }
                else{
                    if(isValid){
                        infoElement.classList.remove("error");
                        infoElement.classList.remove("info");
                        infoElement.classList.add("ok");
                        infoElement.style.cssText = "visibility: visible;color:green";
                        infoElement.textContent="Ok"; 
                    }
                    else{
                        infoElement.classList.remove("ok");
                        infoElement.classList.remove("info");
                        infoElement.classList.add("error");
                        infoElement.style.cssText = "visibility: visible;color:red";
                        infoElement.textContent="Error"; 
                    }
                }
                break;  
            case "email":
                //calling validateEmail function to validate email value
                var isValid=validateEmail(inputValue);
                if(inputValue==""){
                    infoElement.classList.remove("info");
                    infoElement.style.cssText = "visibility: hidden; display: none";  
                   }
                else{
                    if(isValid){
                        infoElement.classList.remove("error");
                        infoElement.classList.remove("info");
                        infoElement.classList.add("ok");
                        infoElement.style.cssText = "visibility: visible;color:green";
                        infoElement.textContent="Ok"; 
                    }
                    else{
                        infoElement.classList.remove("ok");
                        infoElement.classList.remove("info");
                        infoElement.classList.add("error");
                        infoElement.style.cssText = "visibility: visible;color:red";
                        infoElement.textContent="Error"; 
                    }
                }  
                    break;   
            } 
    
    }
    
    //validateUserName function to validate if username entered contains only alphanumeric characters 
    function validateUserName(element){
        var regExpression=/^[a-zA-Z0-9]*$/;
        if(regExpression.test(element)) 
        {
            return true;
        }
        else{
            return false;
        }
    }
    
    //validatePassword function to validate length of password entered in input field
    function validatePassword(element){
        if(element.length>=6){
            return true;
        }
        else{
            return false;
        }
    }
     
    // validateEmail function to validate email value entered in input field
    function validateEmail(element){
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
       return emailPattern.test(element); 
    }
    
    //calling addSpanTag function to inserts <span> notification element on page load
    window.onload = function () {
    addSpanTag();
    }
    