import pets from '../pets';

const constants = {
  DOG: 'Dog'
};

export const getPets = () => pets;

const dogSentence = ({ name, age }) => `Who let the dogs out: ${name}, ${age}?`;

const defaultSentence = ({ animal, name }) => `Are we in Jumanji ${animal} ${name}?`;

export const isDog = ({ animal }) => animal === constants.DOG;

export const getSentence = petsProps =>
  isDog(petsProps) ? dogSentence(petsProps) : defaultSentence(petsProps);
