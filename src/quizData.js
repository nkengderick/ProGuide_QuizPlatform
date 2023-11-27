const quizData = [
  {
    id: 1,
    title: 'Math Fundamentals',
    questions: [
      {
        id: 1,
        question: 'What is the sum of 5 and 3?',
        answerOptions: ['2', '8', '10', '13'],
        correctAnswer: '8',
        type: 'Single'
      },
      {
        id: 2,
        question: 'What is the product of 4 and 6?',
        answerOptions: ['12', '18', '24', '30'],
        correctAnswer: '24',
        type: 'Multiple'
      },
      {
        id: 3,
        question: 'What is the quotient of 16 divided by 4?',
        answerOptions: ['2', '4', '8', '16'],
        correctAnswer: '4',
        type: 'single'
      },
    ],
  },
  {
    id: 2,
    title: 'English Grammar Challenge',
    questions: [
      {
        id: 1,
        question: 'What is the correct verb tense for the sentence "She _ to the store yesterday"?',
        answerOptions: ['went', 'go', 'goes', 'going'],
        correctAnswer: 'went',
        type: 'Multiple'
      },
      {
        id: 2,
        question: 'What is the correct article to use before the noun "apple"?',
        answerOptions: ['a', 'an', 'the', 'no article needed'],
        correctAnswer: 'an',
        type: 'single'
      },
      {
        id: 3,
        question: 'What is the correct plural form of the noun "child"?',
        answerOptions: ['childrens', 'childs', 'children', 'child'],
        correctAnswer: 'children',
        type: 'Multiple'
      },
    ],
  },
  {
    id: 3,
    title: 'Science Concepts',
    questions: [
      {
        id: 1,
        question: 'What is the smallest unit of matter?',
        answerOptions: ['atom', 'molecule', 'cell', 'tissue'],
        correctAnswer: 'atom',
        type: 'Multiple'
      },
      {
        id: 2,
        question: 'What is the process by which plants produce their own food?',
        answerOptions: ['photosynthesis', 'respiration', 'transpiration', 'fertilization'],
        correctAnswer: 'photosynthesis',
        type: 'single'
      },
      {
        id: 3,
        question: 'What is the name of the force that pulls objects towards the center of the Earth?',
        answerOptions: ['gravity', 'electromagnetism', 'nuclear force', 'weak force'],
        correctAnswer: 'gravity',
        type: 'Multiple'
      },
      {
        id: 4,
        question: 'What is the chemical formula for water?',
        answerOptions: ['H2O', 'CO2', 'O2', 'N2'],
        correctAnswer: 'H2O',
        type: 'single'
      },
    ],
  },
  {
    id: 4,
    title: 'Geography quiz',
    questions: [
      {
        id: 1,
        question: 'What is the capital of France?',
        answerOptions: ['Berlin', 'Madrid', 'Paris', 'Rome'],
        correctAnswer: 'Paris',
        type: 'Single'
      },
      {
        id: 2,
        question: 'What is the largest country in the world by land area?',
        answerOptions: ['Canada', 'Russia', 'China', 'United States'],
        correctAnswer: 'Russia',
        type: 'Multiple'
      },
      {
        id: 3,
        question: 'What is the official language of Brazil?',
        answerOptions: ['Portuguese', 'Spanish', 'French', 'English'],
        correctAnswer: 'Portuguese',
        type: 'single'
      },
    ]
  }
];

export default quizData;
