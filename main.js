//^----------------------------------------------------For Login Page-------------------------------------------------- 

var userEmail = document.getElementById("userEmail");
var userPass = document.getElementById("userPass");
var container = document.querySelector(".container");
var loginForm = document.getElementById("loginForm")
var loginMessage=document.getElementById("loginMessage")
// for password validation message
var passMessage= document.getElementById("passMessage");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");


function showFunc(){
    passMessage.style.cssText="display:block !important;"
}

function hideFunc(){
    passMessage.style.cssText="display:none !important;"
}

function passValidation(){

    // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(userPass.value.match(lowerCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
}

  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(userPass.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(userPass.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }

  // Validate length
  if(userPass.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }


}





//^----------------------------------------------------For Registration Page-------------------------------------------------- 

var regName = document.getElementById("regName");
var regEmail =document.getElementById("regEmail");
var regPass = document.getElementById("regPass");
var regBirthDate = document.getElementById("regBirthDate");
var regSubmitBtn =document.getElementById("regSubmitBtn");
var userObj;

//Get form element
var regform=document.getElementById("regForm");
var regSuccess=document.querySelector(".regSuccess");



    if(localStorage.getItem("data")!=null ){
       var usersArr=JSON.parse(localStorage.getItem("data"));
    }
    else {var usersArr=[]; }

function storeFunc(){
     userObj ={ 
        uName : regName.value,
        uMail : regEmail.value,
        uPass : regPass.value,
        uBirth : regBirthDate.value};
    usersArr.push(userObj);
    localStorage.setItem("data",JSON.stringify(usersArr))
    console.log(usersArr);
}



function myURL() {
    window.location.replace("index.html")
 }

 function redirect () {
    setTimeout(myURL, 5000);
    regSuccess.innerHTML = "<b>Successfully Registered <br> The page will redirect after delay of 5 seconds";
 }

function submitForm(event){
    if ( regName.value=="" || regEmail.value=="" || regPass.value=="" ){
        regSuccess.innerHTML="Please fill the form."
        regSuccess.style.cssText="display:block; color:red; font-size:20px;"
    }
    else {
        storeFunc()
        // regSuccess.innerHTML="Successfully Registered"
        regSuccess.style.cssText="display:block; color:green; font-size:20px;"
        redirect ()
    }
   //Preventing page refresh
     event.preventDefault();
}

//Calling a function during form submission.
if(regform != null){
    regform.addEventListener('submit', submitForm);
}







//!--------------------------------------Sign in Authentication----------------------------------
function homePageURL() {
    window.location.replace("homepage.html")
 }

 function redirectHomePage () {
    setTimeout(homePageURL, 3000);
    loginMessage.style.cssText="color:green; font-size: 20px; margin-top: 20px"
    loginMessage.innerHTML = "<b>Authenticated <br> The page will redirect after delay of 3 seconds";
 }

function authenticateLogin(){
    var isMailExist=false;
    var isPassExist=false;
    for(var i=0; i<usersArr.length; i++){
        if(usersArr[i].uMail == userEmail.value ){
            isMailExist=true;
           console.log("mail exists");
           console.log(isMailExist)
        } 
        if(usersArr[i].uPass == userPass.value){
            isPassExist=true;
            console.log("pass exist");
            console.log(isPassExist)
        }
    }
    if(isMailExist && isPassExist){
        redirectHomePage()
        console.log("Halllo");
    }else if(isMailExist==true && isPassExist==false){
        loginMessage.style.cssText="color:red; font-size: 20px; margin-top: 20px"
        loginMessage.innerHTML = "<b> Password doesn`t match Email ";
    }
    else{
        loginMessage.style.cssText="color:red; font-size: 20px; margin-top: 20px"
        loginMessage.innerHTML = "<b>Not Registered !  You May Sign Up";
    }

        
    

}
