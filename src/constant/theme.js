import { Dimensions } from 'react-native'

export const DIM = {
  height: Dimensions.get('window').height,
  width: Dimensions.get('window').width,
}

export const COLORS = {
  white: '#fff',
  black: '#000',
  slate: '#D6DFE0',
  primary: '#e40042',
  light_primary: '#F181A1',
  lighter_primary: '#efb9c8',
  light_yellow: '#FFF5C0',
  boxColor: '#E8E8E8',
  box_light: '#F8F3EB',
  gainsboro: '#DCDCDC',
}

export const data = [
  {
    id: 1,
    question: 'Question 1',
    options: [
      {
        val: 'Option A',
        index: 'A',
        color: 'brown',
      },
      {
        val: 'Option B',
        index: 'B',
        color: 'red',
      },
      {
        val: 'Option C',
        index: 'C',
        color: 'blue',
      },
      {
        val: 'Option D',
        index: 'D',
        color: 'green',
      },
    ],
  },
  {
    id: 2,
    question: 'Question 2',
    options: [
      {
        val: 'Option A',
        index: 'A',
        color: 'brown',
      },
      {
        val: 'Option B',
        index: 'B',
        color: 'red',
      },
      {
        val: 'Option C',
        index: 'C',
        color: 'blue',
      },
      {
        val: 'Option D',
        index: 'D',
        color: 'green',
      },
    ],
  },
  {
    id: 3,
    question: 'Question 3',
    options: [
      {
        val: 'Option A',
        index: 'A',
        color: 'brown',
      },
      {
        val: 'Option B',
        index: 'B',
        color: 'red',
      },
      {
        val: 'Option C',
        index: 'C',
        color: 'blue',
      },
      {
        val: 'Option D',
        index: 'D',
        color: 'green',
      },
    ],
  },
  {
    id: 4,
    question: 'Question 4',
    options: [
      {
        val: 'Option A',
        index: 'A',
        color: 'brown',
      },
      {
        val: 'Option B',
        index: 'B',
        color: 'red',
      },
      {
        val: 'Option C',
        index: 'C',
        color: 'blue',
      },
      {
        val: 'Option D',
        index: 'D',
        color: 'green',
      },
    ],
  },
]

export const icons = [
  {
    id: 1,
    cardTitle: 'Math',
    cardIcon: 'math-integral-box',
  },
  {
    id: 2,
    cardTitle: 'Physics',
    cardIcon: 'react',
  },
  {
    id: 3,
    cardTitle: 'Chemistry',
    cardIcon: 'lab-flask',
  },
  {
    id: 4,
    cardTitle: 'Javascript',
    cardIcon: 'language-javascript',
  },
  {
    id: 5,
    cardTitle: 'Kotlin',
    cardIcon: 'language-kotlin',
  },
  {
    id: 6,
    cardTitle: 'Python',
    cardIcon: 'language-python',
  },
]
