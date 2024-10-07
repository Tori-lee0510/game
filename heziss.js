export function heziss(increment) {
  setTimeout(() => {
    for (let i = 0; i < 100; i++) {
      increment();
    }
  }, 150);

  for (let i = 0; i < 100; i++) {
    increment();
  }

  for (let j = 100; j > 0; j--) {
    increment();
  }

  return setInterval(() => {
    increment();
  }, 100);
}
