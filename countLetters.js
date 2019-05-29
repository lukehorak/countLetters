function countLetters(phrase){
  const stripped = phrase.replaceAll(/ /g, '');

  let results = {}

  for (let c of stripped){
    if(results[c]){
      results[c] += 1
    }
    else {
      results[c] = 1;
    }
  }
  return results
}

// Tests

console.log(countLetters('hello there'));
console.log(countLetters('general kenobi!'));