console.log('this is travell project');
const name=document.getElementById('name');
const email=document.getElementById('email');
const phone=document.getElementById('phone');

let validEmail = false;
let validPhone = false;
let validUser = false;


name.addEventListener('blur',()=>{
   // console.log("name is blured");
    //validate name here
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
    let str = name.value;
    //console.log(regex,str);
    if(regex.test(str)){
        console.log('your name is valid');
        name.classList.remove('is-invalid');
        validUser=true;
    }
    else{
        console.log('your name is not valid');
        name.classList.add('is-invalid');
    }
})
email.addEventListener('blur',()=>{
    console.log("email is blured");
    //validate email here
    let regex = /^([0-9a-z]+)@([a-z]+)\.([a-z]){2,7}$/;
    let str = email.value;
    //console.log(regex,str);
    if(regex.test(str)){
        console.log('your email is valid');
        email.classList.remove('is-invalid');
        validEmail=true;
    }
    else{
        console.log('your email is not valid');
        email.classList.add('is-invalid');
    }
})
phone.addEventListener('blur',()=>{
    console.log("phone is blured");
    //validate phone here
    let regex = /^([0-9]){10}$/;
    let str = phone.value;
    //console.log(regex,str);
    if(regex.test(str)){
        console.log('your phone is valid');
        phone.classList.remove('is-invalid');
        validPhone=true;
    }
    else{
        console.log('your phone is not valid');
        phone.classList.add('is-invalid');
    }
})

let submit =document.getElementById('submit');
submit.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log('submited');
    //submit your form
    if(validEmail && validPhone && validUser){
        console.log('valid');
        let success = document.getElementById('success');
        success.classList.add('show');
        failure.classList.remove('show');
    }
    else{
        console.log(' not valid');
        let failure = document.getElementById('failure');
        failure.classList.add('show');
        success.classList.remove('show');
    }
})