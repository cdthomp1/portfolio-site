function clickCopy() {
	var copyText = document.getElementById("npx");
	copyText.innerText;
	document.execCommand("copy");
	alert("Copied the text: " + copyText.innerText);
}