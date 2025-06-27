console.clear();

const cards = [
  {
    id: "1",
    isBookmarked: false,
    question: "How often can I use <header>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "2",
    isBookmarked: false,
    question: "How often can I use <aside>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "3",
    isBookmarked: true,
    question: "On which types can I use destructuring assignment?",
    answer: "On Objects and Arrays",
    tags: ["js", "next", "advanced"],
  },
];

const lowerCaseAnswers = cards.map((card) => {
  const answerOfCard = card.answer.toLowerCase();
  console.log(answerOfCard);
  return answerOfCard;
}); // ['as often as you like.', ...]

const questionsAndAnswersTogether = cards.map((card) => {
  const qAndATogether = `${card.question} - ${card.answer}`;
  console.log(qAndATogether);
  return qAndATogether;
}); // ["How often can I use <header>? - As often as you like.", ...]

const questionAndAnswer = cards.map((card) => {
  const qAndA = { question: card.question, answer: card.answer};
  console.log(qAndA);
  return qAndA;
}); // [{ question: 'How often can I use <header>?',
// answer: 'As often as you like.'}, {...}]

export { lowerCaseAnswers, questionsAndAnswersTogether, questionAndAnswer };
