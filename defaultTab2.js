function defaultTab() {

document.getElementById("exit").addEventListener("click", function(event){
    chrome.tabs.getCurrent(null,function(tab){
      chrome.tabs.update(tab.id, {
        url: "chrome-search://local-ntp/local-ntp.html"
      });
    });
 });

 }
