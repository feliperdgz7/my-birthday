AOS.init();

const dataEvent = new Date("Jul 30, 2024 19:00:00");
const timeStempEvent = dataEvent.getTime();

const countTime = setInterval(function(){
    const now = new Date();
    const timeStempNow = now.getTime();

    const distanceEvent = timeStempEvent - timeStempNow;

    const dayInMs = 1000 * 60 * 60 *24;
    const hourInMs = 1000 *60 *60;
    const minInMs = 1000 *60;

    const dayEvent = Math.floor(distanceEvent / dayInMs);
    const hoursEvent = Math.floor((distanceEvent % dayInMs) / hourInMs);
    const minuteEvent = Math.floor((distanceEvent % hourInMs) / minInMs);
    const segEvent = Math.floor((distanceEvent % minInMs) / 1000);

    document.getElementById('count').innerHTML = `${dayEvent}d ${hoursEvent}h ${minuteEvent}m ${segEvent}s`

    if(distanceEvent = 0){
        clearInterval(countTime);
        document.getElementById('count').innerHTML = 'Começou!'
    } if(distanceEvent < -1){
        clearInterval(countTime);
        document.getElementById('count').innerHTML = 'Encerrado'
    }
},1000);