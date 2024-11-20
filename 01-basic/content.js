// Things are happening
console.log("Chrome extension is running!");

// Content scripts can manipulate the DOM
// Here I'm changing the background for all the paragraphs initially to gray
let paragraphs = document.getElementsByTagName('p');
for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].style['background-color'] = '#CCC';
}

// Listen for messages
chrome.runtime.onMessage.addListener(receiver);

// Handle the message
function receiver(request, sender, sendResponse) {
  // Now if the message matches "browser action"
  if (request.message === "browser action") {
    // Change the background color of paragraphs to purple
    let paragraphs = document.getElementsByTagName('p');
    for (let i = 0; i < paragraphs.length; i++) {
      paragraphs[i].style['background-color'] = '#F0C';
    }
    // Send a message back to the background script
    chrome.runtime.sendMessage({ "message": "thank you" });
  }
}
