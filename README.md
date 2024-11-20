# Example Broswer Extension

This is an example of a browser extension that demonstrates the basics of working with content scripts, background scripts, and browser actions. The extension changes the background color of all paragraphs (`<p>`) on a webpage.

1. When a webpage is loaded, the content script (`content.js`) runs and changes the background color of all `<p>` elements to gray (`#CCC`).
2. When the user clicks the extension button in the Chrome toolbar, the background script (`background.js`) sends a message to the content script.
3. The content script receives the message and changes the background color of all `<p>` elements to purple (`#F0C`).

## Files
- **`manifest.json`**: The configuration file that defines the extension's permissions, scripts, and behavior.
- **`background.js`**: The background script that listens for the browser action button click and sends a message to the content script.
- **`content.js`**: The content script that manipulates the DOM by changing paragraph colors and listens for messages from the background script.
- **`icon.png`**: The icon for the browser action (not included, you need to add your own icon).

## Installation and Testing (for Chrome)
1. **Clone or Download** the repository containing the extension files.
2. Open **Chrome** and navigate to `chrome://extensions/`.
3. Enable **Developer mode** by toggling the switch in the top right corner.
4. Click on **"Load unpacked"** and select the folder containing the extension files.
5. The extension icon should now appear in the Chrome toolbar.

## Viewing Logs
- **Content Script Logs**: Open the webpage where the content script runs, right-click, and select **Inspect** to open Developer Tools. Go to the **Console** tab to see logs from `content.js`.
- **Background Script Logs**: Open `chrome://extensions/`, find your extension, and click on the **"Service worker"** link to see logs from `background.js`.

## Manifest File Configuration
- **Manifest Version**: 3
- **Permissions**: `"activeTab"` and `"scripting"` are required to manipulate webpage content and communicate between scripts.
- **Content Script**: Automatically injects `content.js` into all webpages.
- **Background Script**: Defined as a service worker to handle extension button clicks.