// Данные для карточек с фактами
const facts = [
  {
    title: "Почему пирамиды строились в Египте?",
    description: "Египетские пирамиды — это не просто культовые сооружения, они олицетворяют концепцию вечности...",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Pyramids_of_Giza.jpg",
    keywords: "пирамида, египет"
  },
  {
    title: "Рим был 'вечным городом', но почему императоры не подписывали контракт на аренду?",
    description: "Рим был знаменит тем, что «вечный» — это не просто эпитет...",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Roman_Forum_-_general_view.jpg",
    keywords: "рим, император"
  },
  {
    title: "Викинги: Что мы знаем о их культуре?",
    description: "Викинги были не только жестокими завоевателями, но и выдающимися мореплавателями...",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Viking_ship_Oseberg_2.jpg",
    keywords: "викинги, север"
  },
  {
    title: "Челябинский метеорит: что случилось в 2013 году?",
    description: "В 2013 году над Челябинском произошел метеоритный дождь, который разрушил тысячи окон...",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Chelyabinsk_Meteor_2013.jpg",
    keywords: "челябинск, метеорит"
  },
  {
    title: "Почему Венеция так необычна?",
    description: "Венеция известна своими каналами, на которых жители передвигаются в гондолах...",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/91/Grand_Canal_Venice.jpg",
    keywords: "венеция, каналы"
  },
  // Добавьте еще 25 карточек по аналогии
];

// Функция для отображения всех фактов
function displayFacts(factsList) {
  const container = document.getElementById('facts-container');
  container.innerHTML = ""; // очищаем контейнер перед добавлением

  factsList.forEach(fact => {
    const factCard = document.createElement('div');
    factCard.classList.add('fact-card');
    factCard.setAttribute('data-keywords', fact.keywords);

    factCard.innerHTML = `
      <div class="card-inner">
        <div class="card-front">
          <h2>${fact.title}</h2>
          <p>${fact.description}</p>
        </div>
        <div class="card-back">
          <img src="${fact.image}" alt="${fact.title}" />
        </div>
      </div>
      <button class="like-btn" onclick="likeFact(this)">👍 <span class="like-count">0</span></button>
    `;

    container.appendChild(factCard);
  });
}

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
  let randomFact = facts[Math.floor(Math.random() * facts.length)];
  alert(randomFact.title);
}

// Загружаем все факты при старте страницы
displayFacts(facts);
