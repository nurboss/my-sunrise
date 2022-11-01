const upBtn = document.getElementById("slide_up_btn");
let allValue = {};
const vh = window.innerHeight;
upBtn.addEventListener('click', () => {
    window.scrollBy(0,  -vh );
})

// window.onload = () => {
//     window.scrollTo(0,0);
//     location.href = "#";
//     window.sessionStorage.clear()

// }

let inputField = document.querySelector("#input_field_xyz");
let link = document.querySelector("#a-link");
let btn = document.querySelector("#xyz-btn");

btn.addEventListener("click", () => {
    if(inputField.value.length < 5){
        return alert("Please fill the Input")
    }{
        allValue.zip = inputField.value;
        link.href="#sec-section";
    }
})


let tick = document.querySelector("#residential");
tick.addEventListener("click", () => {
    allValue.ishouseOwner = 'yes';
})


// let radioBtn = document.getElementsByName("Panels");
// let imgLink = document.querySelector("#img-link");
// let hoverDiv = document.querySelectorAll(".icon-residential");
// let imgHover = document.querySelectorAll("#residential");
// let radioValue = "";


// hoverDiv.forEach(singlediv => {
//     singlediv.addEventListener("click", () => {
//         let i;
//         for (i = 0; i<radioBtn.length; i++){
//             if(radioBtn[i].checked){
//                 radioValue = radioBtn[i].value;
//                 allValue.panels = radioBtn[i].value;
//                 hoverDiv.forEach(element => {
//                     element.classList.remove("glass-bg");               
//                 })
//                 radioBtn[i].parentElement.parentElement.classList.add("glass-bg")
//                 imgHover.forEach(element => {
//                     element.style.removeProperty("filter");               
//                 })
//                 radioBtn[i].parentElement.parentElement.children[0].children[0].children[0].style.filter = "none";
//                 window.scrollBy(0,  vh);
//                 // radioBtn[i].checked = false;
                           
//             }
//         }       
//     })
// })

const slicerBtn = document.querySelector("#slider-btn");
const slideValue = document.getElementById("slider-value")
const inputSlider =  document.getElementById("slide-input")
inputSlider.oninput = () =>{
    let value = inputSlider.value;
    slideValue.textContent = `${value}$`;
}
slicerBtn.addEventListener("click", () => {
    allValue.electricBill = inputSlider.value;
    console.log(inputSlider.value);
})




const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
let emailValue = document.querySelector("#email-input");
let emaliLink = document.querySelector("#e-link");
let emailBtn = document.querySelector("#email-btn");

emailBtn.addEventListener("click", () => {
    if(!emailValue.value.match(pattern)){
        return alert("Please Enter your Email Address!")
    }{
        allValue.email = emailValue.value;
        emaliLink.href="#five-section";
    }
})


let firstNameValue = document.querySelector("#firstName-input");
let lastNameValue = document.querySelector("#lastName-input");
let nameLink = document.querySelector("#n-link");
let nameBtn = document.querySelector("#name-btn");

nameBtn.addEventListener("click", () => {
    if(firstNameValue.value.length < 2 ){
        return alert("Please Enter your First Name!")
    } else if(lastNameValue.value.length < 2){
        return alert("Please Enter your Last Name!")
    }{
        allValue.firstName = firstNameValue.value;
        allValue.lastName = lastNameValue.value;
        nameLink.href="#six-section";
    }
})

let numberValue = document.querySelector("#number-input");
let submitLink = document.querySelector("#submit-link");
let submitBtn = document.querySelector("#submit-btn");
const numPattern = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;

submitBtn.addEventListener("click", () => {
    if(numberValue.value.match(numPattern)){
        allValue.number = numberValue.value;
        window.sessionStorage.setItem("user", JSON.stringify(allValue));
        axios.post("http://localhost:5000/solar/post", allValue)
        submitLink.href="Submit-Page/submit.html";
    } else if(!numberValue.value.match(numPattern)){
        alert("Please Enter Valid Phone Number")
    }
    
})