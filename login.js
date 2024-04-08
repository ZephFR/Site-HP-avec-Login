function LoginFormOn() {
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('signupForm').style.display = 'none';
    //Lorsqu'on appuie sur le bouton Connexion, le formulaire d'inscription disparait et laisse place au formulaire de connexion
}

function SignUpFormOn() {
    document.getElementById('signupForm').style.display = 'block';
    document.getElementById('loginForm').style.display = 'none';
    //Lorsqu'on appuie sur le bouton Inscription, le formulaire de connexion disparait et laisse place au formulaire d'inscription
}

function LogInValidation() {
    var loginEmail = document.getElementById('loginEmail').value;
    var loginPassword = document.getElementById('loginPassword').value;

    if (loginEmail === '' || loginPassword === '') {
        alert('Veuillez remplir tous les champs');
        return false;
    }
    else {
        alert("Erreur serveur (source tkt c'est vrai), veuillez passez par le bouton : Mode Invité");
    }
    // le formulaire va vérifier que toutes les informations sont valides avant de valider la connexion (mais vu que je n'ai pas fait de réel système de connexion, ça va juste montrer un messsage peut importe l'email et mot de passe)
}

function SignUpValidation() {
    var email = document.getElementById('email').value;
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    if (email === '' || username === '' || password === '' || confirmPassword === '') {
        alert('Veuillez remplir tous les champs');
        return false;
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Veuillez entrer une adresse email valide');
        return false;
    }

    if (password !== confirmPassword) {
        alert('Les mots de passe ne correspondent pas');
        return false;
    }

    alert("Formulaire d'inscription soumis avec succès !");
    window.location.href = "cards.html";
    return true;
    // Pareil ici, le formulaire vérifie que c'est bien une email complête, que les mots de passe correspondent, et que tout est remplie, et ensuite enverra un message pour dire que l'inscription a fonctionné (en vérité c'est faux, y'a toujours pas de compte possible)
}

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
});

const formulaire = document.getElementById("inscription-form");
const email = document.getElementById("email");
const password = document.getElementById("password");

formulaire.addEventListener("submit", async (event) => {
  event.preventDefault();

  const response = await fetch("http://127.0.0.1:3000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email.value,
      password: password.value,

    }),
  });

  console.log(email)

  const result = await response.json();

  const token = result.token;

  localStorage.setItem("token", token);

  windows.location.href = 'index.html';
});