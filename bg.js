chrome.browserAction.onClicked.addListener(function (tab) {
    // chrome.tabs.create({
    //     url: "https://s.ziax.dk"
    // });

	chrome.tabs.create({
		url: chrome.extension.getURL('sense/index.html')
	});
});