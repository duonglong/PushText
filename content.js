chrome.extension.onMessage.addListener(function (msg, sender, sendResponse) {
    if(msg.action == 'change_dom'){
        document.getElementById('lst-ib').value = msg.data['input'];
    }
});
button = document.getElementById("mybutton");
if (button) {
    button.onclick = function () {
        chrome.runtime.sendMessage({action: "broadcast", data: {"input": document.getElementById("myinput").value}}, function (response) {

        });
    }
}