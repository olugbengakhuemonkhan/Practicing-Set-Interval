var counter = 10;

var setIdValue = setInterval(countdown,1000);

function countdown() {
    console.log(counter--);

    if (counter < 0) {
        clearInterval(setIdValue);
        console.log('I am done');
    }
}