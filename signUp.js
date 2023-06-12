console.log("connected")
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCePdbMyYhGEtt-a13IIoEBF-PBBploEwo",
    authDomain: "introvert-heaven.firebaseapp.com",
    projectId: "introvert-heaven",
    storageBucket: "introvert-heaven.appspot.com",
    messagingSenderId: "346772784744",
    appId: "1:346772784744:web:7e445e277d999494b21ddd"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

// Text Fields
let email = document.getElementById("inputEmail");
let password = document.getElementById("inputPassword");

// Sign Up
let signUpBtn = document.getElementById("btn1");

signUpBtn.addEventListener("click", function (e) {
   e.preventDefault();
   createUserWithEmailAndPassword(auth, email.value, password.value).then(() => {
    console.log('Account created Successfully success!');
    alert("Account created Successfully");
    location = "userProfile.html";
}).catch( (err) => {
    console.log(err.message);
    errorMessage.innerText = "Cannot Signup";
})
});