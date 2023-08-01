const analyzer = {  
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    if(text.length===0) return 0
    return text.split(' ').filter(letter=>letter!==' ').length;
  },
  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    return text.split('').length
  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    return text.split('').filter(letter=>(letter!==' '&&letter!=='!'&&letter!=='.'&&letter!==':'&&letter!==';'&&letter!==',')).length;
  },
  getAverageWordLength: (text) => {    
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const arrText = text.split(' ');
    const sum=arrText.reduce((acc,cur)=>acc+cur.length,0);
    const operation= (sum/arrText.length).toFixed(2);
    return parseFloat(operation);
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    return text.split(' ').reduce((acc,cur)=>{
      if(!isNaN(Number(cur))){
        return acc+1;
      } 
      return acc;
    },0)
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    return text.split(' ').reduce((acc,cur)=>{
      if(!isNaN(Number(cur))){
        return acc+Number(cur);
      } 
      return acc;
    },0)
  },
};

export default analyzer;
