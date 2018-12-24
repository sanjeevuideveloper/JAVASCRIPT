firstNumberElement=document.querySelector('#firstNumber');
secondNumberElement=document.querySelector('#secondNumber');
operatorButton=document.querySelector('#operator');
equalButton=document.querySelector('#equals-button');
resultButton=document.querySelector('#result-button');
plusButton=document.querySelector('#plus-button');
minusButton=document.querySelector('#minus-button');
divideButton=document.querySelector('#divide-button');
multiplyButton=document.querySelector('#multiply-button');
clearButton=document.querySelector('#clear-button');

minusButton.addEventListener('click',function(){operatorButton.textContent=this.textContent;})
plusButton.addEventListener('click',function(){operatorButton.textContent=this.textContent;})
divideButton.addEventListener('click',function(){operatorButton.textContent=this.textContent;})
multiplyButton.addEventListener('click',function(){operatorButton.textContent=this.textContent;})
clearButton.addEventListener('click',function()
{operatorButton.textContent=plusButton.textContent;
firstNumberElement.value='';
secondNumberElement.value='';
resultButton.textContent='RESULT';
});
equalButton.addEventListener('click',function(){
    var num1=parseFloat(firstNumberElement.value);
    var num2=parseFloat(secondNumberElement.value);
    var operator=operatorButton.textContent;

    var result=0;
    if(num1!=='' && num2!==''){
        switch(operator){
            case '+':result=num1+num2;
                    break;
            case '-':result=num1-num2;
                     break
            case '*':result=num1*num2;
                     break;
            case '/':result=num1/num2;
                       break;
            default:result=0;
                    break;
        }
    }
    resultButton.textContent=result.toString();
    console.log(operator);
})