const firebaseConfig = {
    apiKey: "AIzaSyDxLHIZc0LmJqvqqFDdLRdCLaWwUKOdCiI",
    authDomain: "pratham-9d745.firebaseapp.com",
    databaseURL: "https://pratham-9d745-default-rtdb.firebaseio.com",
    projectId: "pratham-9d745",
    storageBucket: "pratham-9d745.appspot.com",
    messagingSenderId: "757540262262",
    appId: "1:757540262262:web:c7e9ca15e5f08558ba2a57",
    measurementId: "G-8J6BX7WZN6"
  };

  function addUser()
  {
      user_name = document.getElementById("user_name").value;
      firebaseConfig.databaseURL().ref("/").child(user_name).update({
          purpose : "adding user"
      });
}