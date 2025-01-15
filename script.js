// List of Questions
const questions = [
  "Will you go on this journey with me? 🥰",
  "Do you believe we are perfect together? 💞",
  "Do you think I'm the luckiest person for having you? 😍",
  "Can we create a lifetime of memories together? ❤️",
  "Will you be mine forever? 💍",
];

// List of Cat Images
const catImages = [
  "https://cataas.com/cat/says/I%20Love%20You",
  "https://cataas.com/cat/says/Say%20Yes%20Please",
  "https://cataas.com/cat/says/Don't%20Break%20My%20Heart",
  "https://cataas.com/cat/says/You're%20My%20Everything",
  "https://cataas.com/cat/says/You're%20So%20Purr-fect",
];

let currentQuestion = 0;

// Elements
const questionBox = document.getElementById("question-box");
const questionText = document.getElementById("question");
const catBox = document.getElementById("cat-box");
const catImage = document.getElementById("cat-image");

// Handle Next Question
function nextQuestion(isYes) {
  if (isYes) {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      questionText.textContent = questions[currentQuestion];
    } else {
      showFinalMessage();
    }
  } else {
    showCatImage();
  }
}

// Show Cat Image on "No"
function showCatImage() {
  const randomCat = catImages[Math.floor(Math.random() * catImages.length)];
  catImage.src = randomCat;
  questionBox.style.display = "none";
  catBox.style.display = "block";
}

// Back to Question
function backToQuestion() {
  catBox.style.display = "none";
  questionBox.style.display = "block";
}

// Show Final Message
function showFinalMessage() {
  questionBox.innerHTML = `
    <h1>💖 Yes! You made me the happiest person alive! 💖</h1>
    <p>I can't wait to spend the rest of my life with you. 🥰</p>
  `;
}
