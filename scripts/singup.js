let formFeild = document.querySelectorAll("form input");

const [userName, userEmail, userPassword,confirmPassword, userPic] = formFeild;

console.log(formFeild)

let imgUrl;
const ValidateEmail = (mail) =>{
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail .value))
  {
    return (true)
  }
    
    return (false)
}
}
const CheckPassword = (userPassword) => {
{ 
var decimal=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
if(userPassword.value.match(decimal)) 
{ 
return true;
}
else
{ 

return false;
}
} 
}

// let userArrayData = [];

const signup = () => {
    const checkMail = ValidateEmail(userEmail)
    const CheckPassword1 = CheckPassword(userPassword) 
    if(checkMail == true){
        if(CheckPassword1 == true){
            console.log(imgUrl)
    
        if (userName.value !== "" && userEmail.value !== '' && userPassword.value !== '') {
            if(confirmPassword.value === userPassword.value ){
    
                let obj = {
                    signUpEmail: userEmail.value,
                    signupPassword: userPassword.value,
                    user: userName.value,
                    userProfile: imgUrl,
                }
                localStorage.setItem("userData", JSON.stringify(obj));
                window.location.href = './login.html'    
            }
            else{
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "password & confirm password not equal",
                    footer: '<a href="#">Why do I have this issue?</a>'
                  });
            }
        }
        else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Please enter data",
                footer: '<a href="#">Why do I have this issue?</a>'
              });
        }    

        }
        else{
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Input Password contain 8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character",
                footer: '<a href="#">Why do I have this issue?</a>'
              });
        }
        
    }
    else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "email invalid",
            footer: '<a href="#">Why do I have this issue?</a>'
          });
    }
    
}

console.log(window.location.href)


// const window = {
//     {
//         location:{
//             href: "dffsjdhkdfh"
//         }
//     }

// }




const uploadImage = () => {
    let img = userPic.files[0];
    console.log(userPic, img);
    let fileRead = new FileReader();
   console.log(fileRead)
    fileRead.onload = () => {
        imgUrl = fileRead.result;
        console.log(fileRead.result);
    }
    fileRead.readAsDataURL(img)
}