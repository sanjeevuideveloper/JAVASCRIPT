//minutes = Math.floor((timer/100)/60);
//seconds = Math.floor((timer/100) - (minutes * 60));

var originalText=document.querySelector('.text-section-div p')
var Congratulation=document.querySelector('.cong-section');
var textArea=document.querySelector('#text-area');
var textAreaBorder=document.querySelector('#text-area');
var minutes=document.querySelector('#minutes');
var seconds=document.querySelector('#seconds');
var Reset=document.querySelector('#reset');
var timer=0;
var minutes1=0;
var seconds1=0;
var interval=0;
var timerRunning=false;

textArea.addEventListener('keypress',function(){
    var textEntered=textArea.value;
    if(textEntered.length===0 && !timerRunning) {
        interval=setInterval(startTimer, 10);
        timerRunning=true;
             }
});
textArea.addEventListener('keyup',function(){
    var originalText1=originalText.textContent;
    var textEntered=textArea.value;
    var partialText=originalText1.substr(0,textEntered.length)
    if(textEntered===originalText1){
        textAreaBorder.style.borderColor='green';
        clearInterval(interval);
        Congratulation.style.display='block';

    }
    else{
        if(partialText===textEntered ){
            textAreaBorder.style.borderColor='blue';

        }
    }
    if(textEntered===''){
        textAreaBorder.style.borderColor='gray';

    }

    if(partialText!==textEntered){
        textAreaBorder.style.borderColor='red';

    }


})



Reset.addEventListener('click',function(){
    clearInterval(interval);
    timer=0;
    minutes1=0;
    seconds1=0;
    interval=0;
    minutes.textContent='00';
    seconds.textContent='00';
    textArea.value='';
    textAreaBorder.style.borderColor='gray';
    Congratulation.style.display='none';
    timerRunning=false;
    getRandomString();
})



var textArray = ['Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur autem culpa,',
    'deleniti fugit labore laudantium nobis odit porro praesentium quasi quia sapiente ',
    'sed suscipit tempore ut? Dignissimos eos molestiae nihil pariatur temporibus. Animi',
    'cumque doloremque eligendi, facere obcaecati optio perferendis voluptatum. ',
    'Accusamus accusantium ad, assumenda, eius et fugiat inventore ipsam maxime minima ',
    'minus nesciunt optio provident quisquam quod saepe sed suscipit totam. Accusantium',
    'consectetur dolorem ducimus earum iste laborum molestias porro tempora. A amet,',
    'animi, consectetur cumque dolore exercitationem explicabo ipsa iure maiores odit',
    'perspiciatis provident quisquam quod ratione repellendus saepe tempora vel veniam ',
    'quisquam quod ratione repellendus saepe tempora vel veniam voluptas voluptatum! Labore obcaecati sequi veniam.',
    'tempore ut? Dignissimos eos molestiae nihil pariatur temporibus. Animi cumque doloremque eligendi'];
function startTimer(){
    minutes1=Math.floor((timer/100)/60);
seconds1=Math.floor((timer/100) - (minutes1 * 60));
    minutes.textContent =leadingZero(minutes1).toString();
seconds.textContent=leadingZero(seconds1).toString();

    timer++;
}
// leading Zero
function leadingZero(time) {
    if(time <= 9){
        return '0' + time;
    }
    else{
        return time;
    }
}

// getRandom String
function getRandomString() {
    var randomNumber = Math.round(Math.random() * 10);
    var randomStr = textArray[randomNumber];
    originalText.textContent = randomStr;
}
