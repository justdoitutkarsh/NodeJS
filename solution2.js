let i = 0;
const timer = setInterval(() => {
  console.log('Hello World');
  i += 1;
if (i === 5) {
    console.log('Done');
    clearInterval(timer);
  }
}, 1000);