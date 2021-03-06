const daysRef = document.querySelector('.value[data-value="days"]');
const hoursRef = document.querySelector('.value[data-value="hours"]');
const minsRef = document.querySelector('.value[data-value="mins"]');
const secsRef = document.querySelector('.value[data-value="secs"]');


const timer = {
  start (){
    const startTime = new Date(2020, 10, 12, 9, 0, 0, 0);
    setInterval(()=> {
      const currentTime = Date.now();
      const deltaTime = startTime - currentTime;

      updateClockface(deltaTime);
    }, 1000);
   
  }
};

timer.start();

function updateClockface(time){
  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

  daysRef.textContent = `${days}`;
  hoursRef.textContent = `${hours}`;
  minsRef.textContent = `${mins}`;
  secsRef.textContent = `${secs}`;

};



function pad(value){
  return String(value).padStart(2, '0');
};