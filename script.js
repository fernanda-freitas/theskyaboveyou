window.onload = function() {
  sendApiRequest()
}

// Event listener that runs the function sendApiRequest
document.addEventListener("keydown", (event)=>{
  let name = event.key;
  if (name == 'ArrowRight'){
    sendApiRequest()
  }
})

//Fetch data from the API.
async function sendApiRequest(){
  let API_KEY = "6d0HgOuN03cuFVRS19r4Dt62zCSftPIIL186UrAo";
  let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&count=1&hd=true`);
  let data = await response.json();
  let dataRefactored = data[0];
  showImage(dataRefactored);
}


//function that displays data received from the API.
function showImage(data){
  document.querySelector('#content').innerHTML = `<img src="${data.hdurl}" alt="Nasa picture"><h2>${data.title}</h2>`;
}
