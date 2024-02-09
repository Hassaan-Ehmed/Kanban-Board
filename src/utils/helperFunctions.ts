export const getCurrentDate =()=>{

    // Preparing date packet to display
let month = new Intl.DateTimeFormat('en',{month:"short"}).format();
let day = new Intl.DateTimeFormat('en',{day:"2-digit"}).format();
let year = new Intl.DateTimeFormat('en',{year:"numeric"}).format();

let datePacket = {  month, day, year };


return datePacket
};




export const getCurrentTime =()=>{

    // Preparing date packet to display
let hours = new Intl.DateTimeFormat('en',{hour:"2-digit"}).format();
let minutes = new Intl.DateTimeFormat('en',{minute:"2-digit"}).format();
let seconds = new Intl.DateTimeFormat('en',{second:"2-digit"}).format();

let timePacket = {  hours, minutes, seconds };


return timePacket

};

