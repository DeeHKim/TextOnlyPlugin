function text(){
  chrome.tabs.executeScript(null, {file: "textonly.js"});
}

function pics(){
  chrome.tabs.executeScript(null, {file: "picsonly.js"});
}

function links(){
  chrome.tabs.executeScript(null, {file: "linksonly.js"});
}

document.getElementById('text').addEventListener('click', text);
document.getElementById('pics').addEventListener('click', pics);
document.getElementById('links').addEventListener('click', links);
