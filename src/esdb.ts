
type scientists = {
    name: string,
    age: number,
    henchmen: number,
    desc: string
};

const evilScientists: scientists [] = [
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

//console.log(evilScientists);

const inputName = document.querySelector("#form-name") as HTMLInputElement;
const inputAge = document.querySelector("#form-age") as HTMLInputElement;
const inputHenchmen = document.querySelector("#form-hemnchmen") as HTMLInputElement;
const inputDesc = document.querySelector("#form-desc") as HTMLInputElement;
const submitElement = document.querySelector("#submit") as HTMLButtonElement;

const jElement = document.querySelector(".j") as HTMLElement; //section j info
const fElement = document.querySelector(".f") as HTMLElement; //section f card
const eElement = document.querySelector(".e") as HTMLElement; //section e form
const esList = document.querySelector(".es-list") as HTMLElement;

//_______printcard function________show Card with Scientists name_______

    function printCard(): void {

	    let length: number = evilScientists.length;
        for (let i = 0; i < length; i++) {
            let divElement = document.createElement("div") as HTMLElement;
            divElement.innerHTML = `${evilScientists[i].name}`;
            esList.append(divElement);      

//_________________show info from array____________

const butElement = divElement as HTMLDivElement;

    butElement.addEventListener("click", function (event) {
        event.preventDefault();

        jElement.innerHTML = "";
        jElement.innerHTML = `My name is ${evilScientists[i].name}, 
        I am ${evilScientists[i].age} years old
        and I am ${evilScientists[i].desc}.`;
        
console.log(jElement);

    });
    }
    };

    esList.innerHTML = "";
    printCard();

//____________ Add Scientist Name from Submit to Card__________


submitElement.addEventListener("click", function (event){
    event.preventDefault();
   
    const divElement = document.createElement("div") as HTMLElement;
    divElement.innerHTML = "";
    divElement.append(inputName.value);
    fElement.append(divElement); 
    
//_________Add scientist____________

// let arr: scientists = {
//     name: inputName.value,
//     age: parseFloat(inputAge.value),
//     henchmen: parseFloat(inputHenchmen.value),
//     desc: inputDesc.value,
// };

// evilScientists.push(arr);

// esList.innerHTML = "";
// printCard();

    // inputAge.value = "";
    // inputHenchmen.value = "";
    // inputDesc.value = "";
    
    //inputName.value = "";
    
    //console.log(divElement);     

    
//_______________ show Scientists info from form ______________
    
    const butElement = divElement as HTMLDivElement;
    butElement.addEventListener("click", function (event) {
        event.preventDefault();
        
        jElement.innerHTML = "";
        jElement.innerHTML = `My name is ${inputName.value}, 
        I am ${inputAge.value} years old
        and I am ${inputDesc.value}.`;
        
        console.log(jElement);
    }
    );
});
