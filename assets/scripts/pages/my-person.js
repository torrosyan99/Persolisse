const questions = [
  {
    question: 'What style is closer to you now?',
    answers: [
      'Minimalism / clean lines',
      'Classic / elegance',
      'Casual / relaxed',
      'Experimental / unusual'
    ]
  },
  {
    question: 'Your everyday choice?',
    answers: [
      'Simple basics',
      'Elegant fitted pieces',
      'Comfortable relaxed clothes',
      'Bright or unexpected combinations'
    ]
  },
  {
    question: 'Best colors for you?',
    answers: [
      'Neutrals: black, white, beige, gray',
      'Soft warm shades',
      'Deep classic colors',
      'Bold accent colors'
    ]
  },
  {
    question: 'Most important in outfits?',
    answers: [
      'Comfort',
      'Elegance',
      'Practicality',
      'Originality'
    ]
  },
  {
    question: 'Your accessory style?',
    answers: [
      'I prefer almost no accessories',
      'I like delicate details',
      'I choose practical accessories',
      'I love statement pieces'
    ]
  },
  {
    question: 'Preferred silhouette?',
    answers: [
      'Straight and clean',
      'Fitted and feminine',
      'Loose and comfortable',
      'Unusual or layered'
    ]
  },
  {
    question: 'Most worn shoes?',
    answers: [
      'Minimal sneakers or flats',
      'Heels or elegant shoes',
      'Comfortable sneakers',
      'Statement shoes'
    ]
  },
  {
    question: 'How do you shop?',
    answers: [
      'I buy only what I really need',
      'I look for timeless pieces',
      'I choose what feels comfortable',
      'I like trying new trends'
    ]
  },
  {
    question: 'Your style message?',
    answers: [
      'Calm and confident',
      'Elegant and refined',
      'Open and easy-going',
      'Creative and bold'
    ]
  },
  {
    question: 'Dinner outfit choice?',
    answers: [
      'A simple monochrome look',
      'A classic dress or tailored set',
      'Relaxed trousers with a nice top',
      'An expressive outfit with accents'
    ]
  },
  {
    question: 'How visible should it be?',
    answers: [
      'As little as possible',
      'A subtle elegant impression',
      'A natural and effortless look',
      'I want it to stand out'
    ]
  },
  {
    question: 'Wardrobe goal?',
    answers: [
      'Make it more minimal and organized',
      'Make it more elegant',
      'Make it more comfortable and practical',
      'Make it more unique and expressive'
    ]
  }
];

const d = new Quiz('.questions', questions, (result) => {
  console.log(result);
}, {
  passedText: 'Accuracy of determination '
});

console.log(d)