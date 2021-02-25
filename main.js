// HTML & CSS
// 1. Maak een formulier in de HTML met daarin een <input> voor een gebruikersnaam en een voor het wachtwoord
// 2. Maak een <span> of <p> element voor beide invoervelden, waar de waarschuwing in kan.

// SCRIPT
// 1. Sla de referentie naar het gebruikersnaam-veld op
// 2. Sla de referentie naar het gebruikersnaam-waarschuwing element op
// 3. Zet een event listener op het gebruikersnaam-veld
// 4. Maak een functie die de event listener kan aanroepen als de gebruiker input geeft
// 5. Laat die functie checken of de huidige waarde van de input een '@' bevat
// 6. Als dit zo is, geef de waarschuwing weer
// 7. Als dit niet zo is, zorg dan dat de waarschuwing verdwijnt
// 8. Herhaal deze stappen voor het wachtwoord

// Sla de referenties op naar de inputvelden (HTML).
const usernameInput = document.getElementById("input-username");
const passwordInput = document.getElementById("input-password");
console.log("usernameInput:", usernameInput); // usernameInput: <input type="text" name="username" id="input-username">
console.log("passwordInput:", passwordInput); // passwordInput: <input type="password" name="password" id="input-password">

// Sla de referenties op naar de warning-messages (HTML)
const usernameWarning = document.getElementById("username-warning");
const passwordWarning = document.getElementById("password-warning");
console.log("usernameWarning:", usernameWarning); // usernameWarning: <p class="form-warning" id="username-warning"></p>
console.log("passwordWarning:", passwordWarning); // passwordWarning: <p class="form-warning" id="password-warning"></p>

// Voeg eventListeners toe op de inputvelden.
usernameInput.addEventListener("keyup", checkUsername);
passwordInput.addEventListener("keyup", checkPassWord);

// Maak een functie die de username input checkt en door de eventListener wordt aangeroepen.
function checkUsername(e) {
    // Wanneer de waarde een @ bevat willen we de melding WEL tonen.
    if (e.target.value.includes("@")) {
        usernameWarning.textContent = "Gebruikersnaam mag geen @ bevatten";
    } else {
        // In alle andere gevallen tonen we de melding NIET.
        usernameWarning.textContent = "";
    }
}

// Maak een functie die de password input checkt en door de eventListener wordt aangeroepen.
function checkPassWord (e) {
    // Als het invoerveld leeg is, of wanneer het wachtwoord lang genoeg is willen we de melding NIET tonen.
    if (e.target.value === "" || e.target.value.length > 6) {
        passwordWarning.textContent = "";
    } else {
        // In alle andere gevallen (e.target.value !== "" && e.target.value.length <= 6) tonen we de melding WEL.
        passwordWarning.textContent = "Wachtwoord is te kort, gebruik minimaal 6 tekens";
    }
}