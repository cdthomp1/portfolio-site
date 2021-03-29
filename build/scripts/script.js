function clickCopy() {
	var copyText = document.getElementById("npx");
	copyText.innerText;
	document.execCommand("copy");
	document.getElementById("copy-notice").innerText = "Copied!"
	setTimeout(function () { document.getElementById("copy-notice").innerText = "Click to Copy!" }, 3000);
}



async function displayArticles() {
	const articles = await fetch('https://dev.to/api/articles?username=cdthomp1')
		.then(response => response.json())
		.then(json => {
			return json
		});

	var articleDiv = document.getElementById('articles');

	
}

