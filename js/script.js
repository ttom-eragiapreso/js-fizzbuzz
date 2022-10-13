// **Consegna:**
// Scrivi un programma che stampi in console i numeri da 1 a 100,
// ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
// **Prima di partire a scrivere codice poniamoci qualche domanda:**
// Come faccio a sapere se un numero è divisibile per un altro?
// Abbiamo visto qualcosa di particolare che possiamo usare?
// **Consigli del giorno:**
// 1. Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// 2. Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo “a mano”
// **BONUS 1:**
// Crea un container nel DOM , aggiungendo (attraverso la funzione `append()`) un elemento html con il numero o la stringa corretta da mostrare.
// **BONUS 2:**
// Applica stili differenti agli elementi aggiunti al DOM nel *BONUS 1*, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.





// Prendo dal DOM 

const container = document.querySelector(".container");


// Logic per FizzBuzz

for(let i = 1; i <= 100; i++){

  //Creo un div che ha la classe box che condividono tutti gli elementi.
  const element = document.createElement("div");
  element.classList.add("box");

  // Controllo se è divisibile per 5 e 3, se è vero aggiungo la classe e scrivo dentro all'HTML dell'elemento, altrimenti controllo per 5 soltanto e poi per 3 soltanto. Se nessuna condizione è soddisfatta scrivo dentro l'elemento il numero del counter.
  if(!(i % 3 || i % 5)){
    element.classList.add("fizzbuzz");
    element.innerHTML = "FizzBuzz"
  }else if (!(i % 5)){
    element.classList.add("buzz")
    element.innerHTML = "Buzz"
  }else if (!(i % 3)){
    element.classList.add("fizz")
    element.innerHTML = "Fizz"
  }else {
    element.innerHTML = i
  }

  //Aggiungo all'interno del container l'elemento che abbiamo creato.
  container.append(element)
}