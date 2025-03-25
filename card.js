//3. 

const drawBtn = document.getElementById('draw-btn');
const cardsContainer = document.getElementById('cards-container');
let deckId;

drawBtn.disabled = true;

fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
  .then(res => res.json())
  .then(data => {
    deckId = data.deck_id;
    drawBtn.disabled = false; //Enable the button
  })
  .catch(err => {
    console.error('Failed to create the deck:', err);
    drawBtn.textContent = "failed to load deck";
  })

  drawBtn.addEventListener('click', () => {
    fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then(res => res.json())
        .then(data => {
            if(data.success) {
                const card = data.cards[0];

                //Display the cardImg 
                const cardImg = document.createElement('img');
                cardImg.src = card.image;
                cardsContainer.appendChild(cardImg);

                if (data.remaining === 0) {
                    drawBtn.disabled = true;
                }
            } else {
                console.error("API Error:", data.error);
            }
        })
        .catch(err => console.error("Network Error:", err));
           
  })