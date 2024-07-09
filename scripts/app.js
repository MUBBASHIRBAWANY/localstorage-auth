let check = localStorage.getItem("isLoginAllow")
console.log(check)
const loginAllow = ()=>{
if(check != null){
    console.log(true)
    data = JSON.parse(localStorage.getItem("userData"));
    document.getElementById("btn3").setAttribute("src", `${data.userProfile}`);
    document.getElementById("dUserName").innerText = `${data.user}`
}
else{
    window.location.href = './login.html' 
}
}
loginAllow()

const dislay = () =>{
    document.getElementById("logout").style.display ="block"
}

document.getElementById("dis").addEventListener("mouseenter", dislay)

const ndislay = () =>{
  document.getElementById("logout").style.display ="none"
}

const valdi = () =>{
    setTimeout(ndislay, 2000)
}

document.getElementById("dis").addEventListener("mouseout", valdi)

const logout = () => {
    localStorage.clear()
    window.location.href = './login.html' 

}

document.getElementById("logout").addEventListener("click", logout)

