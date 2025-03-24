//PART1

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




//PART 2

fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
    .then(response => response.json())
    .then(data => {
        const card = data.cards[0];
        console.log(`${card.value} of ${card.suit}`);
    })
    .catch(err => console.error("Error:", err))


    let deckId;

    
