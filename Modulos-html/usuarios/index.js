const loginsec=document.querySelector('.login-section')
const loginlink=document.querySelector('.login-link')
const registerlink=document.querySelector('.register-link')

const submit = document.querySelector('#submitIngresar');

registerlink.addEventListener('click',()=>{
    loginsec.classList.add('active')
})
loginlink.addEventListener('click',()=>{
    loginsec.classList.remove('active')
})

submit.addEventListener("click", ingresar);

function ingresar(e){
    e.preventDefault();

    window.location = "../../navbar.html";
}
