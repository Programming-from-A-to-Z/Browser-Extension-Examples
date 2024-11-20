// A listener for when the user clicks on the extension button
chrome.action.onClicked.addListener((tab) => {
  // Send a message to the active tab to trigger the change to purple
  chrome.tabs.sendMessage(tab.id, { message: "browser action" });
});

// Listening for messages (optional, for responses from content script)
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.message === "thank you") {
    console.log("Received a 'thank you' message from the content script!");
  }
});
