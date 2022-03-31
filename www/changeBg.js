let changeColor = document.getElementById('blackBg');
if(changeColor != null) {
	changeColor.onclick = function(el) {
		let colorBg = '#333';
		let colorText = '#fff';
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
			chrome.tabs.executeScript(
				tabs[0].id,
				{code: 'document.body.style.backgroundColor = "' + colorBg + 
				'";document.body.style.color = "' + colorText + '"'})
		})
	}
}