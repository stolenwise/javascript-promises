//PART 1 Number Facts

const favoriteNumber = 88; // my favorite number

fetch(`http://numbersapi.com/${favoriteNumber}?json`)
    .then(response => response.json())
    .then(data => {
        const factElement = document.createElement('p');
        factElement.textContent = data.text;
        document.body.appendChild(factElement);
    })
    .catch(err => console.error('Error:', err));

const numbers = [1, 2, 3, 4]; // Example numbers

fetch(`http://numbersapi.com/${numbers.join(',')}?json`)
  .then(response => response.json())
  .then(data => {
    for (const num in data) {
      const factElement = document.createElement('p');
      factElement.textContent = data[num];
      document.body.appendChild(factElement);
    }
  })
  .catch(err => console.error('Error:', err));

const favoriteNumberAgain = 27;

const promises = [];

// Make 4 fetch requests
for (let i = 0; i < 4; i++) {
    promises.push(
        fetch(`http://numbersapi.com/${favoriteNumber}?json`)
            .then(response => response.json())
    );
}

// Wait for promises to resolve

Promise.all(promises)
    .then(facts => {
        facts.forEach(fact => {
            const factElement = document.createElement('p');
            factElement.textContent = fact.text;
            document.body.appendChild(factElement);
        });
    })
    .catch(err => console.error('Error:', err));




//PART 2 Deck of Cards

///1. Make a request to the [Deck of Cards API](http://deckofcardsapi.com/) to request a 
// single card from a newly shuffled deck. Once you have the card, ***console.log*** the value a
// nd the suit (e.g. “5 of spades”, “queen of diamonds”).

// 2. Make a request to the deck of cards API to request a single card from a newly shuffled deck. 
// Once you have the card, make a request to the same API to get one more card from the **same** deck.
    
// Once you have both cards, ***console.log*** the values and suits of both cards.

// 3. Build an HTML page that lets you draw cards from a deck. When the page loads, go to the Deck of Cards API to create a new deck, and show a button on the page that will let you draw a card. Every time you click the button, display a new card, until there are no cards left in the deck.

// Here’s how this might look (with styling added):
// ///

// 1. Request a single card
fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
    .then(response => response.json())
    .then(data => {
        const card = data.cards[0];
        console.log(`${card.value} of ${card.suit}`);
    })
    .catch(err => console.error("Error:", err))


    let deckId;

    //2.
// Step 1: Create and shuffle a deck
fetch("https://deckofcardsapi.com/api/deck/new/shuffle/")
  .then(response => response.json())
  .then(data => {
    deckId = data.deck_id;

    // Step 2: Draw first card 
    return fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`);
  })
  .then(res => res.json())
  .then(data1 => { // Renamed to data1 for clarity
    const card1 = data1.cards[0];
    console.log(`Card 1: ${card1.value} of ${card1.suit}`); 

    // Step 3: Draw second card
    return fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`);
  })
  .then(res => res.json())
  .then(data2 => { // Renamed to data2
    const card2 = data2.cards[0];
    console.log(`Card 2: ${card2.value} of ${card2.suit}`); // Fixed variable name
  })
  .catch(err => console.error("Error:", err));
   



  
    