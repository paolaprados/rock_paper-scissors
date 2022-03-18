// alert("juego mamonsillo");

const ROCK = 'rock';
const PAPER = 'paper';
const SCISSORS = 'scissors';

const TIE = 0;
const WIN = 1;
const LOST = 2;

const rock = document.getElementById(ROCK);
const paper = document.getElementById(PAPER);
const scissors = document.getElementById(SCISSORS);
const parrafo = document.getElementById('parrafo');
const user = document.getElementById('user');
const machine = document.getElementById('machine');

console.log('result', parrafo.innerHTML);

rock.addEventListener('click', () => {
  play(ROCK);
});

paper.addEventListener('click', () => {
  play(PAPER);
});

scissors.addEventListener('click', () => {
  play(SCISSORS);
});

function play(userOption) {
  const machineOption = calMachineOption();
  const result = calResult(userOption, machineOption);

  user.src = './imagenes/' + userOption + '.png';
  machine.src = './imagenes/' + machineOption + '.png';

  switch (result) {
    case TIE:
      parrafo.innerHTML = 'you have tied!';
      // alert(machineOption + 'tie');
      break;
    case WIN:
      parrafo.innerHTML = 'you have win!';
      // alert(machineOption + 'win');
      break;
    case LOST:
      parrafo.innerHTML = 'you lost!';
      // alert(machineOption + 'lost');
      break;
  }
}

function calMachineOption() {
  const number = Math.floor(Math.random() * 3);
  switch (number) {
    case 0:
      return ROCK;
    case 1:
      return PAPER;
    case 2:
      return SCISSORS;
  }
}

function calResult(userOption, machineOption) {
  console.log(machineOption);
  if (userOption === machineOption) {
    return TIE;
  } else if (userOption === ROCK) {
    if (machineOption === PAPER) return LOST;
    if (machineOption === SCISSORS) return WIN;
    if (machineOption === ROCK) return TIE;
  } else if (userOption === PAPER) {
    if (machineOption === PAPER) return TIE;
    if (machineOption === SCISSORS) return LOST;
    if (machineOption === ROCK) return WIN;
  } else if (userOption === SCISSORS) {
    if (machineOption === PAPER) return WIN;
    if (machineOption === SCISSORS) return TIE;
    if (machineOption === ROCK) return LOST;
  }
}
