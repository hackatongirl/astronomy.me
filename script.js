// Функция поиска фактов по ключевым словам
function searchFacts() {
  const searchTerm = document.getElementById('search').value.toLowerCase();
  const cards = document.querySelectorAll('.fact-card');

  cards.forEach(card => {
    const keywords = card.getAttribute('data-keywords').toLowerCase();
    if (keywords.includes(searchTerm)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

// Функция для отображения случайного факта
function showRandomFact() {
  const facts = document.querySelectorAll('.fact-card');
  const randomIndex = Math.floor(Math.random() * facts.length);
  
  facts.forEach((fact, index) => {
    if (index === randomIndex) {
      fact.style.display = 'block';
    } else {
      fact.style.display = 'none';
    }
  });
}

// Функция для увеличения лайка
function likeFact(button) {
  const likeCount = button.querySelector('.like-count');
  let currentLikes = parseInt(likeCount.textContent);
  likeCount.textContent = currentLikes + 1;
}
