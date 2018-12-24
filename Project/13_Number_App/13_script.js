var number=document.querySelector('#number');
var text_number=document.querySelector('#text-number');

var tempStr='';
var z=0;
function textNumber(){

    for(var i=z;i<number.value.length;i++){
        var n=parseInt(number.value.charAt(i));


        switch(n){
            case 0:tempStr+=' '+'ZERO';
                  z++;
                  break;
            case 1:tempStr+=' '+'ONE';
                z++;
                break;
            case 2:tempStr+=' '+'TWO';
                z++;
                break;
            case 3:tempStr+=' '+'THREE';
                z++;
                break;
            case 4:tempStr+=' '+'FOUR';
                z++;
                break;
            case 5:tempStr+=' '+'FIVE';
                z++;
                break;
            case 6:tempStr+=' '+'SIX';
                z++;
                break;
            case 7:tempStr+=' '+'SEVEN';
                z++;
                break;
            case 8:tempStr+=' '+'EIGHT';
                z++;
                break;
            case 9:tempStr+=' '+'NINE';
                z++;
                break;
            default:break;
        }
    }


}
number.addEventListener('keyup',function(){

    textNumber();

    text_number.textContent=tempStr;



})

