const args = process.argv.slice(2);

const alarm = (delay) => {
  setTimeout(() => {
    process.stdout.write('\x07');
  }, delay);
};

const setAlarms = (args) => {
  const arguments = args.map(a => Number(a));
  const times = arguments.filter(
    num => Number.isInteger(num) && num >= 0 ? true : false 
  );

  for (const time of times) {
    const milliseconds = time * 1000;
    alarm(milliseconds);
  }
};

setAlarms(args);
