let datafromls = JSON.parse(localStorage.getItem("user"))


document.querySelector("#log_in").addEventListener("click",result)
    function result (){ 
        console.log("res")
        let emails = document.querySelector("#email").value;
        let passwords = document.querySelector("#password").value;
          datafromls.map(function(elem){
            if(emails==elem.email && passwords == elem.password){
             alert("Login successful!")
            }else if(passwords !== elem.password){
                alert("Wrong credentials")
            }else{
                alert("User doesn't exist, Sign Up")
            }
          })
    }