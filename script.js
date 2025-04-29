/* Общие стили */
body {
  font-family: 'Arial', sans-serif;
  background-color: #f7f7f7;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(to top left, #ffe4e1, #ffd700);
}

h1 {
  color: #6a4e1f;
  font-size: 2.5rem;
  margin-bottom: 2rem;
}

/* Контейнер для карточек */
#flashcards-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
}

/* Стиль карточки */
.flashcard {
  position: relative;
  perspective: 1000px;
}

.card {
  width: 100%;
  height: 300px;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  transform-style: preserve-3d;
  transition: transform 0.6s;
  cursor: pointer;
}

.card:hover {
  transform: rotateY(180deg);
}

/* Лицевая сторона */
.front {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #ffeb3b;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  font-size: 1.2rem;
  padding: 10px;
  box-sizing: border-box;
}

/* Задняя сторона */
.back {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #4caf50;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  padding: 20px;
  border-radius: 15px;
  backface-visibility: hidden;
  flex-direction: column;
  box-sizing: border-box;
}

.like-button {
  margin-top: 20px;
  background-color: #ffffff;
  color: #4caf50;
  padding: 5px 15px;
  border-radius: 25px;
  cursor: pointer;
  font-weight: bold;
}

.like-button:hover {
  background-color: #f1f1f1;
}

.like-count {
  font-size: 1.5rem;
}

/* Анимация переворота карточки */
@keyframes flip {
  from {
    transform: rotateY(0);
  }
  to {
    transform: rotateY(180deg);
  }
}
