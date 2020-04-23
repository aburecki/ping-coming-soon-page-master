const button = document.querySelector(".btn");
const input = document.querySelector("input");
const error = document.querySelector(".error");
const inputWrapper = document.querySelector(".input-wrapper");

button.addEventListener("click", () => {


    function validEmail(email) {
        const reg = /[a-z]+\@+[a-z]+\.+[a-z]{2,}/i;
        return reg.test(email);
    }


    if (validEmail(input.value)) {
        console.log("zawiera poprawny input");
        location.reload();
    } else if (input.value.length == 0) {
        error.style.display = "block";
        inputWrapper.style.borderColor = "hsl(354, 100%, 66%)";
        error.innerHTML = "Whoops! It looks like you forgot to add your email";
        // console.log('zawiera 0 znaków');
    } else {
        error.innerHTML = "Please provide a valid email address";
        error.style.display = "block";
        inputWrapper.style.borderColor = "hsl(354, 100%, 66%)";
        // console.log("nie zawiera poprawnego inputa");
    }

})