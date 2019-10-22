const timer = delay => {
    console.log('Hello after ' + delay + ' seconds');
  };
  setTimeout(timer, 4 * 1000, 4);
  setTimeout(timer, 8 * 1000, 8);