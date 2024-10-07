export function dongjae(increment) {
  for (let i= 0; i < 100; i++) {
    increment()
  }
  
  
  return setInterval(() => {
    increment();
    
    //내 이름이 출력 될 때마다 실행시켜야 한다.
  }, 150)
}
