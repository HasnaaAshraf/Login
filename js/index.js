 
 var userNameInput = document.getElementById('userName');
//  console.log(usernameInput);
 var userEmailInput = document.getElementById('userEmail');
//  console.log(userEmailInput);
 var userPasswordInput = document.getElementById('userPassword');
// console.log(userPasswordInput);

var massegeSuccess = document.querySelector('.massegeSuccess');

var massegeAlready = document.querySelector('.massegeAlready');

var massege= document.querySelector('.massege');

 var userContainer = []
//  console.log(userContainer);

if(localStorage.getItem("user")==null)
{
   userContainer=[]
}
else{
    userContainer = JSON.parse(localStorage.getItem("user"))
    
}


 function addSignUp(){
    // console.log(emailexist());
  
    if(
        userEmail.classList.contains('is-valid')&&
        userPassword.classList.contains('is-valid')&&
        userName.classList.contains('is-valid')&&
        emailexist() == false 
    ){

        console.log("sucess");
        
            var user = {
                userEmail : userEmailInput.value,
                userPassword : userPasswordInput.value,
                userName : userNameInput.value,
            }
            
             userContainer.push(user);

             localStorage.setItem("user" , JSON.stringify(userContainer))

             console.log(userContainer);
    
             massegeSuccess.classList.remove('d-none');
    
             window.location.href='index.html';
             
        
        // var user = {
           
        //     userEmail : userEmailInput.value,
        //     userPassword : userPasswordInput.value,
        //     userName : userNameInput.value,
        // }
        
        //   userContainer.push(user);

        //  console.log(userContainer);
         
        //  localStorage.setItem("user" , JSON.stringify(userContainer))

        //  massegeSuccess.classList.remove('d-none');
        // //  massegeAlready.classList.add('d-none');

        //  emailexist();

        //  document.body.addEventListener('click' , function(ele){
        //     ele.preventDefault()
        //     // addLogin();
        // })
       
    }

    // else {
    //   massegeSuccess.classList.add('d-none');
    // }

    // var user = {
    //     username : "",
    //     useremail : useremailInput.value,
    //     userpassword : userpasswordInput.value,
    // }

    
    //  userContainer.push(user);

    //  localStorage.setItem("user" , JSON.stringify(userContainer))

    // console.log(userContainer);

}

    
 document.querySelector('.mainForm').addEventListener('click' , function(ele){
    ele.preventDefault()
    addForLogin();
})


// document.body.addEventListener('click' ,function(ele){
//     ele.preventDefault()
// })


function emailexist(){
    for(var i=0; i< userContainer.length ; i++){

        if(userContainer[i].userEmail == userEmailInput.value){
            massegeAlready.classList.remove('d-none');
            // massegeSuccess.classList.add('d-none');
            return true
            // localStorage.setItem("username" , )
            // usercontainer[i].userName
        }
        else{
            // massegeSuccess.classList.remove('d-none');
            massegeAlready.classList.add('d-none');
            return false
        }

    }
}

function addForLogin(){

    
        var y = JSON.parse(localStorage.getItem('user'));
        for (var i = 0; i < y.length; i++) {
            // console.log(x[i].UserEmail);
            if ( y[i].userEmail == userEmailInput.value &&
                y[i].userPassword == userPasswordInput.value ) {
                
                    localStorage.setItem('userName' , y[i].userName);

                    setTimeout(() => {
                    window.location.assign("home.html") ;
                }, 300);

                massege.classList.add('d-none');

                //  localStorage.setItem('userName' , y[i].userName);

                // success.classList.add('d-none');
            }
            // else {
            //     // invalid.classList.remove('d-none');
            //     massege.classList.remove('d-none');
            //      console.log("false");
            //     userPasswordInput.value = null;
            // }
        }
   




//     console.log(addForLogin());

//     var y = JSON.parse(localStorage.getItem("user"))
//     console.log(y);

//     for(var i=0 ; i < y.length ; i++){

//         // console.log(y[i].userName);


//         if(y[i].userEmail == userEmailInput.value &&
//            y[i].userPassword == userPasswordInput.value){
           
//             console.log(y[i].userEmail);
//             console.log(userEmailInput.value);

//             massege.classList.add('d-none');

//             localStorage.setItem("userName" , y[i].userName);

//             window.location.href='home.html';
            
//             return true
            
//         }
//         else{
//             massege.classList.remove('d-none');
//             console.log("false");
//             return false
//         }

//     }
 }




// // function display (){

// //     cartona = "";
// //     for (var i =0 ;  i < userContainer.length ; i++) {
      
// //         cartona += ` <h1>Welcome +${userContainer.userNameInput.value}</h1>
// //             `
        
// //     }
// //     document.getElementById("massege").innerHTML = cartona ;
// // }




function validationAll (ele){
    var regex = {

        userEmail : /^[a-z]{5,}\@{1}(yahoo|gmail){1}\.{1}(com){1}$/ig,

        userPassword: /^(\w){5,}$/,

        userName : /^[a-z][A-Z]{2,}$/ig,

    }

    if (regex[ele.id].test(ele.value)){
    
        ele.classList.remove('is-invalid');
        ele.classList.add('is-valid');
        ele.nextElementSibling.classList.add('d-none');
        console.log("matched");
       
    }

    else{
    
        ele.classList.add('is-invalid');
        ele.classList.remove('is-valid');
        ele.nextElementSibling.classList.remove('d-none');
        console.log("not matched");
       
    }

}

