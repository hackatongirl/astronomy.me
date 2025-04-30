// Функция для лайков
function likeFact(button) {
  let likeCount = button.querySelector('.like-count');
  likeCount.textContent = parseInt(likeCount.textContent) + 1;
}

// Функция для поиска фактов
function searchFacts() {
  let input = document.getElementById('search').value.toLowerCase();
  let cards = document.querySelectorAll('.fact-card');
  cards.forEach(function(card) {
    let keywords = card.getAttribute('data-keywords');
    if (keywords.toLowerCase().includes(input)) {
      card.style.display = '';
    } else {
      card.style.display = 'none';
    }
  });
}

// Функция для случайного факта
function showRandomFact() {
  let cards = document.querySelectorAll('.fact-card');
  let randomCard = cards[Math.floor(Math.random() * cards.length)];
  alert(randomCard.querySelector('.card-front h2').textContent);
}
