chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.action == 'broadcast') {
        chrome.tabs.query({url: 'https://www.google.com.vn/*'}, function (tabs) {
            for (var i = 0; i < tabs.length; i++) {
                chrome.tabs.sendMessage(tabs[i].id, {action: "change_dom", data: message.data}, function (response) {

                });
            }
            // chrome.tabs.sendMessage(tabs[0].id, {action: "open_dialog_box"}, function(response) {});
        });
    }
});