
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

//_______________ Test
// const esElement = document.querySelector(".es") as HTMLElement;
// esElement.append("Boo"); // test


//________________ Create div 

const inputName = document.querySelector("#form-name") as HTMLInputElement;
const inputAge = document.querySelector("#form-age") as HTMLInputElement;
const inputHenchmen = document.querySelector("#form-hemnchmen") as HTMLInputElement;
const inputDesc = document.querySelector("#form-desc") as HTMLInputElement;
const submitElement = document.querySelector("#submit") as HTMLButtonElement;


const jElement = document.querySelector(".j") as HTMLElement; //section j för desc
const fElement = document.querySelector(".f") as HTMLElement; //section f för div
const eElement = document.querySelector(".e") as HTMLElement; //section e för div

// const divElement = document.createElement("div") as HTMLElement;

// divElement.innerHTML = "new div";
// fElement.append(divElement);
const esList = document.querySelector(".es-list") as HTMLElement;


//_______printcard function______________Show Card with Scientists name__________

function printCard(): void {
	// esList.innerHTML = '';
	let length: number = evilScientists.length;
	
    for (let i = 0; i < length; i++) {
            let divElement = document.createElement("div") as HTMLElement;
            // let hElement = document.createElement("h") as HTMLElement;
            // divElement.className = "card";
            // hElement.className = "es-name";
            // hElement.innerHTML = `${evilScientists[i].name}`;
            divElement.innerHTML = `${evilScientists[i].name}`;
            esList.append(divElement);
            // divElement.append(hElement);

    //_________________show desc from array____________

    const butElement = divElement as HTMLDivElement;

    butElement.addEventListener("click", function (event) {
        event.preventDefault();
        jElement.innerHTML = "";
        //jElement.append(butElement.innerHTML);

        jElement.innerHTML = `My name is ${evilScientists[i].name}, 
        I am ${evilScientists[i].age} years old
        and I am ${evilScientists[i].desc}.`;
        
        console.log(jElement);
    }
    );

    //_____________________

    }
    };

    esList.innerHTML = "";
    printCard();




//_______________ Add Scientist Name from Submit to Card__________


// const inputName = document.querySelector("#form-name") as HTMLInputElement;
// const inputAge = document.querySelector("#form-age") as HTMLInputElement;
// const inputHenchmen = document.querySelector("#form-hemnchmen") as HTMLInputElement;
// const inputDesc =document.querySelector("#form-desc") as HTMLInputElement;
// const submitElement = document.querySelector("#submit") as HTMLButtonElement;

// const jElement = document.querySelector(".j") as HTMLElement; //section j för desc

submitElement.addEventListener("click", function (event){
    event.preventDefault();
   
    const divElement = document.createElement("div") as HTMLElement;
    divElement.innerHTML = "";
    divElement.append(inputName.value);
    fElement.append(divElement); 
    

//_________


//_________Add new array____________



// let arr: scientists = {
//     name: inputName.value,
//     age: parseFloat(inputAge.value),
//     henchmen: parseFloat(inputHenchmen.value),
//     desc: inputDesc.value,
// };

// evilScientists.push(arr);

// fElement.innerHTML = "";
// printCard();

    // inputAge.value = "";
    // inputHenchmen.value = "";
    // inputDesc.value = "";

//__________
    
    inputName.value = "";
    
    //console.log(divElement);     

    
//_______________  Show Scientists Desc from submit ______________

    // const jElement = document.querySelector(".j") as HTMLElement; //section j för desc
    
    const butElement = divElement as HTMLDivElement;
    
    //for (let i = 0; i < length; i++) {
    butElement.addEventListener("click", function (event) {
        event.preventDefault();
        
        jElement.innerHTML = "";
        //jElement.append(butElement.innerHTML);

        //jElement.innerHTML = `${inputDesc.value}`;

        jElement.innerHTML = `My name is ${inputName.value}, 
        I am ${inputAge.value} years old
        and I am ${inputDesc.value}.`;
        
        console.log(jElement);
    }
    );
    
});


// _______Add scientist____
// const form = document.querySelector('#subForm') as HTMLInputElement;
// form.addEventListener('submit', (event) => {
//     event.preventDefault();
//     const formData = new FormData(form); // konstruktör FormData()skapar ett nytt FormDataobjekt (ett tomt objekt)                                            
//     const inputName = formData.get('name'); //metod formData.get returnerar det första värdet som är associerat med en given nyckel inifrån ett FormDataobjekt.
//     const inputAge = formData.get('age'); 
//     const inputHenchmen = formData.get('henchmen');
//     const inputDesc = formData.get('desc');

//     function addElement(inputName,inputAge, inputHenchmen, inputDesc) { 
//        evilScientists.push({
//             name: inputName,
//             age: inputAge,
//             henchmen: inputHenchmen,
//             desc: inputDesc,
//         });
//     //     function resetForm(){  
//     //         document.getElementById('subForm').reset();
//     //     }; 
//     //     resetForm();
//     };
//     addElement(inputName, inputAge, inputHenchmen, inputDesc);
//     eElement.innerHTML = "";
//     printCard();
// });








