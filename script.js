//1) Realizati o pagina care afiseaza tururile unei agentii turistice
// //Aratati dupa default tururi in 3 directii diferite:
// a)Islanda
// b)Japonia
// c)Finlanda
//Folositi obiectele pentru a stoca fiecare tur. Implementati o stilistica miniala,adecvata. Propuneti urmatoarele butoane :
// a)Buton pentru a aduga un tur nou
// b)sortare dupa pretul de odihna 
// c)sortare dupa ordine alfabetica a tururilor

const vacanta = 
{
    country1 :
    {
        name : "Islanda",
        price : 700
    },
    country2 :
    {
        name : "Japonia",
        price : 500
    },
    country3 :
    {
        name : "Finlanda",
        price : 600
    }
}
function showCountries()
{
    const countryListElement = document.getElementById("country__list");
    countryListElement.textContent = "";
    for (const key in vacanta) 
    {
        const country = vacanta[key];
        const listItem = document.createElement('li');
        listItem.innerHTML = `${country.name} - ${country.price} EUR` ;
        countryListElement.appendChild(listItem); 
    }
}

document.addEventListener('DOMContentLoaded',()=>
{
    const CountryContainer = document.querySelector('#country__container');
    const priceContainer = document.querySelector('#price__container');
    const nameContainer = document.querySelector('#name__container');
    showCountries();
    
    const addButton1 = document.createElement("button");
    addButton1.textContent = "Add new countries to visit";

    const addButton2 = document.createElement("button");
    addButton2.textContent = "Sort after price";

    const addButton3 = document.createElement("button");
    addButton3.textContent = "Sort after the alphabet";

    addButton1.addEventListener('click',()=>
    {
        const newCountry =
        {
            name : prompt("Introdu o tara noua"),
            price : +prompt("Introdu pretul de calatorie")
        }
        const newKey = `country${Object.keys(vacanta).length+1}`;
        vacanta[newKey] = newCountry;
        showCountries();
    })


    addButton2.addEventListener('click',()=>
    {
        sortAfterPrice();
    })

    addButton3.addEventListener('click',()=>
    {
        sortAfterName();
    })

    CountryContainer.appendChild(addButton1);
    priceContainer.appendChild(addButton2);
    nameContainer.appendChild(addButton3);

})

function sortAfterPrice()
{
    const priceContainer = document.querySelector('#price__list');
    priceContainer.textContent = "";
    const priceArray = [];
    for (const key in vacanta) {
        priceArray.push(vacanta[key].price);
    }
   priceArray.sort((a,b)=>(a-b)); 

   priceArray.forEach(price => {
    const listItem = document.createElement('li');
    listItem.textContent = price + " EUR";
    priceContainer.appendChild(listItem);
   })

}

function sortAfterName()
{
    const nameContainer = document.querySelector('#name__list');
    nameContainer.textContent = "";
    const nameArray = [];
    for (const key in vacanta) {
        nameArray.push(vacanta[key].name);
    }
    nameArray.sort(); 

    nameArray.forEach(name => {
    const listItem = document.createElement('li');
    listItem.textContent = name;
    nameContainer.appendChild(listItem);
   })

}


//     addButton2.addEventListener('click',()=>
//     {
    
        
//             const priceListItem = document.getElementById("price__list");
//             priceListItem.textContent = "";
//             const priceArray = [];
//             for (const key in vacanta) {
 
//                   priceArray.push(vacanta[key].price);  
//             }
//             for (const co in vacanta) {
//                 const vacantionArray = vacanta[co];
//                 const priceItem = document.createElement('li');

//                 for (let i = 0; i < priceArray.length-1; i++) {
//                     for (let j = 0; j < priceArray.length-i-1; j++) {
//                         if(priceArray[j]>priceArray[j+1])
//                         {
//                             let temp = priceArray[j];
//                             priceArray[j] = priceArray[j+1];
//                             priceArray[j+1] = temp;
//                         }
                        
//                     }   
//                 }//end bubble sort

//                 priceItem.innerHTML = `${vacantionArray.name} - ${vacantionArray.price} EUR` ;
//                 priceListItem.appendChild(priceItem); 
//             }
// let item;
//             for (let i = 0; i < priceArray.length; i++) {
//                 for (const key in vacanta) {
//                     if(vacanta[key].price == priceArray[i])
//                     {
//                         item = key;
//                     }

//                 }
//                 const country = vacanta[item];
//                 const listItem = document.createElement('li');
//                 listItem.innerHTML = `${country.name} - ${country.price} EUR` ;
//                 priceListItem.appendChild(listItem); 
                
//             }





        
//     })
//     container.appendChild(addButton2);


// })

