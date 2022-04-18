$("p").css({
  display: "none",
});
$(".show-btn").click(function () {
  $("p").css({ display: "block" });
});
$(".hide-btn").click(function () {
  $("p").css({ display: "none" });
});

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCquLexwe-IXSHSwJjAN0kOb0zf4frH0Jc",
  authDomain: "piotproject.firebaseapp.com",
  projectId: "piotproject",
  storageBucket: "piotproject.appspot.com",
  messagingSenderId: "1020598968940",
  appId: "1:1020598968940:web:3e341a8fd5bd69af822e49",
  measurementId: "G-ET6CG2129Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

$(document).ready(function ($) {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      console.log(user);
    } else {
      console.log("not login");
    }
  });
});
