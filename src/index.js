import styles from './index.css';

const rootNode = document.getElementById('root');
const headerNode = document.getElementById('header');

const heading = document.createElement('h1');
heading.textContent = 'These are my dogs yo';
headerNode.appendChild(heading);
heading.className = styles.heading;
const list = document.createElement('ul');
const dogNames = [
  'Spot',
  'Rover',
  'Bingo',
  'Joe'
];
rootNode.appendChild(list);

dogNames.forEach(name => {
  const nameLi = document.createElement('li');
  nameLi.textContent = name;
  list.appendChild(nameLi);
});

