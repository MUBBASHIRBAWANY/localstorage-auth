let formFeild = document.querySelectorAll("form input");
console.log(formFeild)
const [loginEmail, loginPassword] = formFeild;


const data = JSON.parse(localStorage.getItem("userData"));

let loader = document.getElementById('loader');
const login = () => {
    event.preventDefault();

        const { signUpEmail, signupPassword } = data;

        if ((signUpEmail === loginEmail.value) &&
            signupPassword === loginPassword.value) {
            
            localStorage.setItem("isLoginAllow" , true)
                window.location.href = 'dashboard.html'
            
        }
        else {
            
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Invalid Credentils",
                footer: '<a href="#">Why do I have this issue?</a>'
              });
        }
    

    


    // console.log(signUpEmail, signupPassword);
    // console.log(loginEmail.value, loginPassword.value);
}

document.querySelector("#login").addEventListener("click", login)

