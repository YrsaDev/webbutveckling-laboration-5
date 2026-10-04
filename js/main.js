"use strict";
/*
 * Laboration 5 - Studentkortsgenerator
 * Namn: Jeanette Räisänen
 */

// Hämta element från DOM
const form = document.querySelector("#studentform");
const clearButton = document.querySelector("#clear");

const fullnameInput = document.querySelector("#fullname");
const emailInput = document.querySelector("#email");
const phoneInput = document.querySelector("#phone");
const fontSelect = document.querySelector("#font");

const previewFullname = document.querySelector("#previewfullname");
const previewEmail = document.querySelector("#previewemail");
const previewPhone = document.querySelector("#previewphone");
const studentCard = document.querySelector(".card");

const errorList = document.querySelector("#errorlist");
const historySection = document.querySelector("#history");
const deleteHistoryButton = document.querySelector("#delete");


// Array som används för felmeddelanden
let errors = [];

// Array som innehåller sparade studentkort
let history = [];

/**
 * Validerar formulärets inmatning.
 * @returns {boolean}
 */
function validateForm() {
    errors = []; // Rensa tidigare felmeddelanden
    // Kontrollera formulärets obligatoriska fält
if (fullnameInput.value.trim() === "") {
    errors.push("Fullständigt namn är obligatoriskt.");
}    
if (emailInput.value.trim() === "") {
    errors.push("E-postadress är obligatoriskt.");
}
if (phoneInput.value.trim() === "") {
    errors.push("Telefonnummer är obligatoriskt.");
}
    // Visa eventuella felmeddelanden
displayErrors(errors);
    // Returnera resultatet (true eller false) av valideringen
return errors.length === 0;
}


/**
 * Visar felmeddelanden på sidan.
 */
function displayErrors(errors) {
    // Rensa tidigare felmeddelanden
errorList.innerHTML = "";
    // Skriv ut aktuella felmeddelanden till DOM
    errors.forEach(error => {
        const li = document.createElement("li");
        li.textContent = error;
        errorList.appendChild(li);
    });
}


/**
 * Skapar ett studentkort och visar det på sidan.
 */
function createStudentCard() {
    // Hämta information från formuläret
const fullname = fullnameInput.value.trim();
const email = emailInput.value.trim();
const phone = phoneInput.value.trim();
const font = fontSelect.value;
    // Uppdatera studentkortet
previewFullname.textContent = fullname;
previewEmail.textContent = email;
previewPhone.textContent = phone;
studentCard.style.fontFamily = font;
    // Lägg till studentkortet i historiken
const student = {
    fullname: fullname,
    email: email,
    phone: phone,
    font: font
};
history.push(student);
    // Spara och uppdatera historiken
}


/**
 * Sparar historiken i localStorage.
 */
function saveHistory() {
    // Spara history i localStorage
}


/**
 * Läser in tidigare historik från localStorage.
 */
function loadHistory() {
    // Hämta eventuell sparad historik

    // Uppdatera history
}


/**
 * Visar historiken på sidan.
 */
function renderHistory() {
    // Rensa tidigare visad historik

    // Skriv ut innehållet i history till DOM
}


/**
 * Rensar formulär, aktuellt studentkort och felmeddelanden.
 */
function clearForm() {
    // Återställ formulär och studentkort

    // Rensa eventuella felmeddelanden
}


/**
 * Raderar hela historiken.
 */
function deleteHistory() {
    // Radera sparad historik

    // Uppdatera history och visningen på sidan
}


// Eventlyssnare

// När formuläret skickas:
// - validera inmatningen
// - skapa studentkort om valideringen lyckas


// När användaren klickar på "Rensa"


// När användaren klickar på "Radera historik"


// När sidan laddas:
// - läs in och visa eventuell tidigare historik