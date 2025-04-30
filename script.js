// Функция для поиска фактов
function searchFacts() {
  let searchQuery = document.getElementById('search').value.toLowerCase();
  let factCards = document.querySelectorAll('.fact-card');

  factCards.forEach(card => {
    let cardText = card.innerText.toLowerCase();
    if (cardText.includes(searchQuery)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

// Функция для отображения случайного факта
function showRandomFact() {
  let factCards = document.querySelectorAll('.fact-card');
  let randomIndex = Math.floor(Math.random() * factCards.length);
  let randomCard = factCards[randomIndex];
  randomCard.scrollIntoView({ behavior: 'smooth' });
}

// Функция для добавления лайков
function likeFact(button) {
  let likeCount = button.querySelector('.like-count');
  let currentLikes = parseInt(likeCount.innerText);
  likeCount.innerText = currentLikes + 1;
}
