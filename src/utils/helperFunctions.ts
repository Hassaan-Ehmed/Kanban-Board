// export const getCurrentDate =()=>{

//     // Preparing date packet to display
// let month = new Intl.DateTimeFormat('en',{month:"short"}).format();
// let day = new Intl.DateTimeFormat('en',{day:"2-digit"}).format();
// let year = new Intl.DateTimeFormat('en',{year:"numeric"}).format();

// let datePacket = {  month, day, year };


// return datePacket
// };




export const  getCurrentTimeStamp=()=>{

// get Current Date Time 
const now = new Date();


const formattedStamp = now.toLocaleDateString('en-US',{

day:'2-digit',
month:'2-digit',
year:'2-digit',
}) +' ~ '+ now.toLocaleTimeString('en-US',{
   hour:'2-digit',
   minute:'2-digit',
   second:'2-digit' 
});


return formattedStamp

};

