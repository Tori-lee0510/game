export function 정유석(increment) {
  return setInterval(() => {
    console.log("정유석");
    increment();
  }, 4990);
}