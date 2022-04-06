/*
The train ticket cost: 
1. Ask how many kilometers does the customer want to cover
2. Ask customer age
3. Define total trip cost
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
*/

let kmTravel= prompt("Quanti chilometri hai intenzione di percorrere?")
let age= prompt("Quanti anni hai?") 
const pricePerKm= 0.21;

const kmPrice= kmTravel*pricePerKm
const output= 
`
    <h1>Il prezzo del biglietto</h1>
            <p>in base hai dati che hai fornito:
                <ul>
                    <li>
                        Km che intendi percorrere: ${kmTravel}
                    </li>
                    <li>
                        Anni:${age}
                    </li>
                </ul>
                Il prezzo degli biglietto è di:${kmPrice}
            </p>
`;

console.log(output);

document.getElementById("cg-price").innerHTML=output