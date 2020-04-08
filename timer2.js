const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('SIGINT', () => {
  process.stdout.write('Thanks for using me, ciao!\n');
  rl.close();
});

const setAlarm = (seconds) => {
  const delay = seconds * 1000;
  setTimeout(() => {
    process.stdout.write('\x07');
  }, delay);
};

const getUserInput = () => {
  rl.question("For how long would you like to set a timer?\n", (answer) => {
    if (answer === "b") {
      setAlarm(0);
      getUserInput();

    } else if (/[0-9]/.test(answer)) {
      process.stdout.write(`setting timer for ${answer} seconds...\n`);
      setAlarm(answer);
      getUserInput();
    }
  });
};

getUserInput();
