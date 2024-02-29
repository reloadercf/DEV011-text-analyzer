import analyzer from './analyzer.js';

const textAreaInput=document.querySelector('#inputText');
const counterWords=document.querySelector('#counterWords')
const counterLetter=document.querySelector('#counterLetter')
const contar = document.querySelector('#contar');

textAreaInput.addEventListener('input', ()=>{
  counterWords.textContent=analyzer.getWordCount(textAreaInput.value);
  counterLetter.textContent=analyzer.getCharacterCount(textAreaInput.value);
  contar.innerHTML=`<marquee>${analyzer.getCharacterCountExcludingSpaces(textAreaInput.value)}</marquee>`
})