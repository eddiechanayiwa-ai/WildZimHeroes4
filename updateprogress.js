// Firebase config
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "your-app.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-app.appspot.com",
  messagingSenderId: "xxxxx",
  appId: "xxxxx"
};

// Initialize
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// On form submit
function saveUserToFirebase(name, email, animal) {
  db.collection("users").add({
    name,
    email,
    animal,
    joinedAt: new Date()
  })
  .then(() => alert("✅ Signup successful!"))
  .catch(error => console.error("Error saving user:", error));
}
document.getElementById("signupForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const animal = document.getElementById("animal").value;

  saveUserToFirebase(name, email, animal);
});
