var form = document.querySelector("#serialCalcForm"),
    btn = document.querySelector("#btnResult");
    
btn.addEventListener("click", function(e){
  let input = form.elements.inputExpression.value;
  form.elements.result.value = mathCalculator(input);
  return false;
});

/*input: строка с арифметическим выражением. Внутри выражения записываются вещественные числа (в качестве разделителя целой и дробной части используется точка), 
  разделённые математическими операторами (+ − * /). Между числом и оператором может стоять пробел. В конце строки стоит знак «равно».*/
  function mathCalculator(str){
    let oneAction = /^\s*(\d+\.\d+|\d+)\s*([+*/-]){1}\s*(\d+\.\d+|\d+)/;
    
    while (oneAction.test(str)){
    var arrayExpression = str.match(oneAction);
    switch (arrayExpression[2]){
      case "+":{
        str = str.replace(arrayExpression[0], +arrayExpression[1]+ +arrayExpression[3]) ;
        break;
      }
      case "-":{
        str = str.replace(arrayExpression[0], +arrayExpression[1]- +arrayExpression[3]) ;
        break;
      } 
      case "*":{
        str = str.replace(arrayExpression[0], +arrayExpression[1]* +arrayExpression[3]) ;
        break;
      }  
      case "/":{
        str = str.replace(arrayExpression[0], +arrayExpression[1]/ +arrayExpression[3]) ;
        break;
      }  
    }
  }
    if (str.includes("=")){
      return (+str.replace("=","")).toFixed(2);
    }
    else return null;
}
