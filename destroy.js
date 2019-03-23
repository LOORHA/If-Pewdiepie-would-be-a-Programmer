function destroyTSeries(){
    // Preparing variables
    var subsElement = document.getElementById('subscriber-count');
    var textElement = subsElement.innerText;
    var start = textElement.replace(/\,/g,'').replace(' subscribers', '');
    var subsTheyDeserve = 0;
    var speed = 7000;
    var range = subsTheyDeserve - start;

    // Fucking magic math shit starts here
    var stepTime = Math.abs(Math.floor(speed / range));
    stepTime = Math.max(stepTime, 50);
    var startTime = new Date().getTime();
    var endTime = startTime + speed;
    var timer;
    function run(){
        var now = new Date().getTime();
        var remaining = Math.max((endTime - now) / speed, 0);
        var value = Math.round(subsTheyDeserve - (remaining * range));
        var nf = new Intl.NumberFormat();
        subsElement.innerText = nf.format(value) + ' subscribers';
        if (value == subsTheyDeserve){
            clearInterval(timer);
        }
    }
    timer = setInterval(run, stepTime);
    run();
}

destroyTSeries();
