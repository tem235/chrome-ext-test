chrome.runtime.onMessage.addListener((msg, _sender, _response) => {
    if (msg.message === 'changeBg') {
        if (window.getComputedStyle(document.body, null).getPropertyValue('background-color') === 'rgb(255, 255, 255)') {
            document.body.style.backgroundColor = "#175417"
        } else {
            document.body.style.backgroundColor = "#ffffff"
        }
    }
});

