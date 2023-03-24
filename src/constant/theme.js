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
        id: 2,
      },
      {
        val: 'Option B',
        index: 'B',
        color: 'red',
        id: 3,
      },
      {
        val: 'Option C',
        index: 'C',
        color: 'blue',
        id: 4,
      },
      {
        val: 'Option D',
        index: 'D',
        color: 'green',
        id: 5,
      },
    ],
  },
  {
    id: 6,
    question: 'Question 2',
    options: [
      {
        val: 'Option A',
        index: 'A',
        color: 'brown',
        id: 7,
      },
      {
        val: 'Option B',
        index: 'B',
        color: 'red',
        id: 8,
      },
      {
        val: 'Option C',
        index: 'C',
        color: 'blue',
        id: 9,
      },
      {
        val: 'Option D',
        index: 'D',
        color: 'green',
        id: 10,
      },
    ],
  },
  {
    id: 11,
    question: 'Question 3',
    options: [
      {
        val: 'Option A',
        index: 'A',
        color: 'brown',
        id: 12,
      },
      {
        val: 'Option B',
        index: 'B',
        color: 'red',
        id: 13,
      },
      {
        val: 'Option C',
        index: 'C',
        color: 'blue',
        id: 14,
      },
      {
        val: 'Option D',
        index: 'D',
        color: 'green',
        id: 15,
      },
    ],
  },
  {
    id: 16,
    question: 'Question 4',
    options: [
      {
        val: 'Option A',
        index: 'A',
        color: 'brown',
        id: 17,
      },
      {
        val: 'Option B',
        index: 'B',
        color: 'red',
        id: 18,
      },
      {
        val: 'Option C',
        index: 'C',
        color: 'blue',
        id: 19,
      },
      {
        val: 'Option D',
        index: 'D',
        color: 'green',
        id: 20,
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
