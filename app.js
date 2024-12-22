function updateClock(){
    const now = new Date();
    let hours = now.getHours();
    const meridian = hours >= 12 ? "PM" :"AM";
    hours = (hours % 12 || 12).toString().padStart(2,"0");
    const minutes = now.getMinutes().toString().padStart(2,"0");
    const seconds = now.getSeconds().toString().padStart(2,"0");
    const timeStamp = `${hours}:${minutes}:${seconds} ${meridian}`;
    document.getElementById("text").textContent = timeStamp;
}
updateClock();
setInterval(updateClock,1000)