// Функция для переключения лайков
function toggleLike(button) {
  const likeCount = button.querySelector('.like-count');
  let currentLikes = parseInt(likeCount.innerText);
  likeCount.innerText = currentLikes + 1;
}

// Функция для анимации переворота карточек
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('flipped');
  });
});

// Функция для перемещения карточки по экрану (можно добавить дополнительные анимации)
document.querySelectorAll('.flashcard').forEach(card => {
  card.addEventListener('mouseover', () => {
    card.style.transform = "scale(1.05)";
  });
  
  card.addEventListener('mouseout', () => {
    card.style.transform = "scale(1)";
  });
});
