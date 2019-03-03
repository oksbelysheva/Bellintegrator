var form = document.querySelector("#charRemoverForm"),
    btn = document.querySelector("#btnResult");
    
btn.addEventListener("click", function(e){
  let input = form.elements.inputText.value;
  form.elements.result.value = charRemover(input);
  return false;
});

/*input: строка, состоящая из нескольких слов. Слова разделены пробельными символами (пробел, табуляция) и знаками препинания (?!:;,.). 
  output: строка, в которой будут удалены все символы, повторяющиеся хоть в одном из слов более одного раза. Игнорировать регистр: СЛОВО = слово*/
  function charRemover(str){
    let separator = ["?", "!", ":", ";", ",", ".", " ", "\t"];
    let words = str.split(' ').filter(Boolean);
    let deleteLetter = {};
    words.forEach(word => {
      let illegalLetters = {};
      for (const letter of word) {
        if (typeof  illegalLetters[letter] === "undefined") {
          illegalLetters[letter] = 1;
          }else{
            illegalLetters[letter]++;
          }
      }
      for (const letter in illegalLetters) {
        if (illegalLetters.hasOwnProperty(letter)) {
          if (illegalLetters[letter]>=2)
            deleteLetter[letter] = 0;
        }
      }
    });
    for (const letter in deleteLetter) {
      if (deleteLetter.hasOwnProperty(letter)) {
        while (str.indexOf(letter) !== -1)
          str = str.replace(letter,'');        
      }
    }
    return str;
}
