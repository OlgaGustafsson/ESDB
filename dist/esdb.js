"use strict";
const evilScientists = [
    {
        name: "Harry",
        age: 111,
        henchmen: 10,
        desc: "evil scientist",
    },
    {
        name: "Kevin",
        age: 25,
        henchmen: 1,
        desc: "very evil",
    },
    {
        name: "Nisse",
        age: 95,
        henchmen: 10,
        desc: "very kind",
    },
];
const inputName = document.querySelector("#form-name");
const inputAge = document.querySelector("#form-age");
const inputHenchmen = document.querySelector("#form-hemnchmen");
const inputDesc = document.querySelector("#form-desc");
const submitElement = document.querySelector("#submit");
const jElement = document.querySelector(".j");
const fElement = document.querySelector(".f");
const eElement = document.querySelector(".e");
const esList = document.querySelector(".es-list");
function printCard() {
    let length = evilScientists.length;
    for (let i = 0; i < length; i++) {
        let divElement = document.createElement("div");
        divElement.innerHTML = `${evilScientists[i].name}`;
        esList.append(divElement);
        const butElement = divElement;
        butElement.addEventListener("click", function (event) {
            event.preventDefault();
            jElement.innerHTML = "";
            jElement.innerHTML = `My name is ${evilScientists[i].name}, 
        I am ${evilScientists[i].age} years old
        and I am ${evilScientists[i].desc}.`;
            console.log(jElement);
        });
    }
}
;
esList.innerHTML = "";
printCard();
submitElement.addEventListener("click", function (event) {
    event.preventDefault();
    const divElement = document.createElement("div");
    divElement.innerHTML = "";
    divElement.append(inputName.value);
    fElement.append(divElement);
    inputName.value = "";
    const butElement = divElement;
    butElement.addEventListener("click", function (event) {
        event.preventDefault();
        jElement.innerHTML = "";
        jElement.innerHTML = `My name is ${inputName.value}, 
        I am ${inputAge.value} years old
        and I am ${inputDesc.value}.`;
        console.log(jElement);
    });
});
