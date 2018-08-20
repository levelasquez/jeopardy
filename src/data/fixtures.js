const categories = [{
  id: 0,
  title: 'category one',
}, {
  id: 1,
  title: 'category two',
}, {
  id: 2,
  title: 'category three',
}]

const category = categories[0]

const clue = {
  id: 0,
  question: 'q one',
  answer: 'a one',
  value: 200,
}

const clues = [
  clue,
  {
    id: 1,
    question: 'q two',
    answer: 'a two',
    value: 400,
  },
]

export {
  categories,
  category,
  clue,
  clues,
}
