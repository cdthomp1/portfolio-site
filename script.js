function clickCopy() {
	var copyText = document.getElementById("npx");
	copyText.innerText;
	document.execCommand("copy");
	document.getElementById("copy-notice").innerText = "Copied!"
	setTimeout(function(){ document.getElementById("copy-notice").innerText = "Click to Copy!"}, 3000);
	
}