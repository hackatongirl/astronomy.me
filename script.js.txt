// Ожидаем, пока документ полностью загрузится
document.addEventListener('DOMContentLoaded', function() {
  // ----------- 1. Переключение видимости карточки при клике (анимированное вращение) -----------
  const flashcards = document.querySelectorAll('.flashcard');

  flashcards.forEach(card => {
    card.addEventListener('click', function() {
      const back = card.querySelector('.back');
      if (back.style.display === 'flex') {
        back.style.display = 'none';
      } else {
        back.style.display = 'flex';
      }
      card.classList.toggle('flip'); // Добавление/удаление анимации
    });
  });

  // ----------- 2. Функция поиска карточек -----------
  document.getElementById('search').addEventListener('input', function(event) {
    const query = event.target.value.toLowerCase();
    flashcards.forEach(card => {
      const text = card.textContent.toLowerCase();
      if (text.includes(query)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });

  // ----------- 3. Кнопки для навигации по карточкам (предыдущая/следующая) -----------
  let currentIndex = 0;

  document.getElementById('next-btn').addEventListener('click', function() {
    if (currentIndex < flashcards.length - 1) {
      currentIndex++;
      updateCardVisibility();
    }
  });

  document.getElementById('prev-btn').addEventListener('click', function() {
    if (currentIndex > 0) {
      currentIndex--;
      updateCardVisibility();
    }
  });

  function updateCardVisibility() {
    flashcards.forEach((card, index) => {
      card.style.display = index === currentIndex ? 'block' : 'none';
    });
  }

  updateCardVisibility(); // Инициализация отображения первой карточки

  // ----------- 4. Лайки для каждой карточки -----------
  document.querySelectorAll('.like-btn').forEach((button, index) => {
    button.addEventListener('click', function() {
      const likeCount = button.nextElementSibling;
      likeCount.textContent = parseInt(likeCount.textContent) + 1;
    });
  });

  // ----------- 5. Темная тема -----------
  const themeToggleButton = document.getElementById('theme-toggle');
  themeToggleButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
  });

  // ----------- 6. Динамическое добавление карточек через JavaScript -----------
  const flashcardsData = [
    { question: "Кто был первым президентом США?", answer: "Джордж Вашингтон, первый президент США, с 1789 по 1797 годы." },
    { question: "Когда началась Вторая мировая война?", answer: "Вторая мировая война началась 1 сентября 1939 года." },
    { question: "Кто открыл Америку?", answer: "Кристофер Колумб открыл Америку в 1492 году." },
    { question: "Когда был основан Рим?", answer: "Рим был основан в 753 году до нашей эры." },
    { question: "Когда началась Великолепная французская революция?", answer: "Французская революция началась в 1789 году." }
  ];

  const container = document.getElementById('flashcards-container');
  flashcardsData.forEach(item => {
    const card = document.createElement('div');
    card.classList.add('flashcard');
    card.innerHTML = `
      <div class="front">
        <p>${item.question}</p>
      </div>
      <div class="back">
        <p>${item.answer}</p>
      </div>
    `;
    container.appendChild(card);
  });

});
