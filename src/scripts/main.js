AOS.init();

let dataEvent = new Date("Jul 30, 2024 19:00:00");
let timeStempEvent = dataEvent.getTime();

let countTime = setInterval(function(){
    let now = new Date();
    let timeStempNow = now.getTime();

    let distanceEvent = timeStempEvent - timeStempNow;

    let dayInMs = 1000 * 60 * 60 *24;
    let hourInMs = 1000 *60 *60;
    let minInMs = 1000 *60;

    let dayEvent = Math.floor(distanceEvent / dayInMs);
    let hoursEvent = Math.floor((distanceEvent % dayInMs) / hourInMs);
    let minuteEvent = Math.floor((distanceEvent % hourInMs) / minInMs);
    let segEvent = Math.floor((distanceEvent % minInMs) / 1000);

    document.getElementById('count').innerHTML = `${dayEvent}d ${hoursEvent}h ${minuteEvent}m ${segEvent}s`

    if(distanceEvent = 0){
        clearInterval(countTime);
        document.getElementById('count').innerHTML = 'Começou!'
    } if(distanceEvent < -1){
        clearInterval(countTime);
        document.getElementById('count').innerHTML = 'Encerrado'
    }
},1000);