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
  document.querySelector('#content').innerHTML = `
  <img class="space-image" src="${data.hdurl}" alt="Nasa picture">
  <h2>${data.title}</h2>
  <div class="navigation">
    <h6 class="navigation-text">Use <span class="navigation-text-bold">Arrow Right</span> to navigate</h6>
    <img class="navigation-icon" src="svg/chevron-right.svg">
    <img class="navigation-icon-sm" src="svg/chevron-right.svg">
  </div>
  `;
}
