import { Dimensions } from 'react-native'

export const DIM = {
  height: Dimensions.get('window').height,
  width: Dimensions.get('window').width,
}

export const COLORS = {
  white: '#fff',
  black: '#000',
  slate: '#D6DFE0',
  // primary: '#e40042',
  primary: '#702963',
  light_primary: '#7851a9',
  lighter_primary: '#9865db',
  light_yellow: '#FFF5C0',
  boxColor: '#E8E8E8',
  box_light: '#F8F3EB',
  gainsboro: '#DCDCDC',
}

export const data = [
  [
    {
      correctAns: 'D',
      options: [
        { optionInd: 'A', optionVal: 'H2SO4' },
        { optionInd: 'B', optionVal: 'H2SO3' },
        { optionInd: 'C', optionVal: 'H30' },
        { optionInd: 'D', optionVal: 'H20' },
      ],
      ques: 'What is the formula of Water?',
      topic: 'Chemistry',
    },
    {
      correctAns: 'B',
      options: [
        { optionInd: 'A', optionVal: 'H2SO4' },
        { optionInd: 'B', optionVal: 'C02' },
        { optionInd: 'C', optionVal: 'H30' },
        { optionInd: 'D', optionVal: 'H20' },
      ],
      ques: 'What is the formula of Carbon Dioxide?',
      topic: 'Chemistry',
    },
  ],
  [
    {
      correctAns: 'D',
      options: [
        { optionInd: 'A', optionVal: 'op1' },
        { optionInd: 'B', optionVal: 'op2' },
        { optionInd: 'C', optionVal: 'op3' },
        { optionInd: 'D', optionVal: 'op4' },
      ],
      ques: 'History Question 1',
      topic: 'History',
    },
    {
      correctAns: 'B',
      options: [
        { optionInd: 'A', optionVal: 'op1' },
        { optionInd: 'B', optionVal: 'op2' },
        { optionInd: 'C', optionVal: 'op3' },
        { optionInd: 'D', optionVal: 'op4' },
      ],
      ques: 'History Question 2',
      topic: 'History',
    },
  ],
  [
    {
      correctAns: 'C',
      options: [
        { optionInd: 'A', optionVal: 'op1' },
        { optionInd: 'B', optionVal: 'op2' },
        { optionInd: 'C', optionVal: 'op3' },
        { optionInd: 'D', optionVal: 'op4' },
      ],
      ques: 'Law Question 1',
      topic: 'Law',
    },
  ],
  [
    {
      correctAns: 'C',
      options: [
        { optionInd: 'A', optionVal: '3.76' },
        { optionInd: 'B', optionVal: '3.11' },
        { optionInd: 'C', optionVal: '3.14' },
        { optionInd: 'D', optionVal: '4.14' },
      ],
      ques: 'What is the value of Pi?',
      topic: 'Math',
    },
    {
      correctAns: 'B',
      options: [
        { optionInd: 'A', optionVal: 'op1' },
        { optionInd: 'B', optionVal: 'op2' },
        { optionInd: 'C', optionVal: 'op3' },
        { optionInd: 'D', optionVal: 'op4' },
      ],
      ques: 'Math question 2',
      topic: 'Math',
    },
  ],
  [
    {
      correctAns: 'A',
      options: [
        { optionInd: 'A', optionVal: 'Permittivity' },
        { optionInd: 'B', optionVal: 'Permeability' },
        { optionInd: 'C', optionVal: 'Velocity' },
        { optionInd: 'D', optionVal: 'Gravitation' },
      ],
      ques: 'What do you mean by Mu?',
      topic: 'Physics',
    },
  ],
]
