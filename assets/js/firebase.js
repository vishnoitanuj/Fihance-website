// Initialize Firebase
var config = {
    apiKey: "AIzaSyAZVwXqP5HYiFMk8Illr07Br0UBPzcojbI",
    authDomain: "finhance-5239a.firebaseapp.com",
    databaseURL: "https://finhance-5239a-default-rtdb.firebaseio.com",
    projectId: "finhance-5239a",
    storageBucket: "finhance-5239a.appspot.com",
    messagingSenderId: "522715880915",
    appId: "1:522715880915:web:1e09ae1dd033b9489ee326"
  };
  firebase.initializeApp(config);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    //Get value
    var name = getInputVal('name');
    var email = getInputVal('email');
    var phone = getInputVal('subject');
    var message = getInputVal('message');
  
    // Save message
    saveMessage(name, company, email, phone, message);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);
  
    // Clear form
    document.getElementById('contactForm').reset();
  }
  
  // Function to get form value
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, company, email, phone, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      company: company,
      email: email,
      phone: phone,
      message: message
    });
  }
  