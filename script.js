// Функция для лайков
function likeFact(button) {
  let likeCount = button.querySelector('.like-count');
  likeCount.textContent = parseInt(likeCount.textContent) + 1;
}

// Функция для поиска фактов
function searchFacts() {
  let input = document.getElementById('search').value.toLowerCase();  // Получаем введённый текст
  let cards = document.querySelectorAll('.fact-card');  // Получаем все карточки

  cards.forEach(function(card) {
    let keywords = card.getAttribute('data-keywords');  // Получаем ключевые слова для каждой карточки
    if (keywords.toLowerCase().includes(input)) {
      card.style.display = '';  // Если ключевое слово содержит введённый текст, показываем карточку
    } else {
      card.style.display = 'none';  // Если нет, скрываем карточку
    }
  });
}

// Функция для случайного факта
function showRandomFact() {
  let cards = document.querySelectorAll('.fact-card');  // Получаем все карточки
  let randomCard = cards[Math.floor(Math.random() * cards.length)];  // Выбираем случайную карточку
  alert(randomCard.querySelector('.card-front h2').textContent);  // Показываем название факта
}
