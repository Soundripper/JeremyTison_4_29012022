function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelector(".close");
// Form Elements
const myForm = document.getElementsByName("reserve")[0];

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  formSubmitted = false;
}

//close modal event
closeBtn.addEventListener('click', closeModal);

//close modal form, reset and msgThanks
function closeModal(){
  modalbg.style.display = "none";
  myForm.classList.remove("hide");
  if(formSubmitted){
    document.getElementsByClassName("msgThanks")[0].remove();
    myForm.reset();
  }
}

//Bool form Submitted -- pour gérer le reset du form et du message
let formSubmitted = false;

// FONCTION DE VALIDATION DU FORM
myForm.addEventListener('submit', function(e){
  e.preventDefault();
  validate();
});

function validate(){
  arrayGen();
  isFirstNameValid(),isLastNameValid(),isMailValid(),isBirthdateValid(),isQuantityValid(),isLocationValid(),isConditionsValid();
  if (firstNameValid && lastNameValid && mailValid && birthdateValid && quantityValid && locationValid && conditionsValid){
    messageSubmit();
  }
}

// Modal message on submit
function messageSubmit(){
  const modalB = document.getElementsByClassName("modal-body")[0];
  const msgDiv = document.createElement("div");
  msgDiv.classList.add("msgThanks");
  msgDiv.innerHTML = '<p>Merci pour votre inscription !</p>';
  modalB.append(msgDiv);
  myForm.classList.add("hide");
  console.log("Submit");
  formSubmitted = true;
}
