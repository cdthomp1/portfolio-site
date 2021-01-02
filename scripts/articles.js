async function displayArticles() {
	const articles = await fetch('https://dev.to/api/articles?username=cdthomp1')
		.then(response => response.json())
		.then(json => {
			return json
		});

	var articleDiv = document.getElementById('articles');

	articles.forEach(article => {
		//console.log(article)
		if (article.cover_image !== null) {
			var articleHtml = `
		<div class="wrapper">
			<div class="dots-wrapper card-header">
				<div id="dot-1" class="browser-dot"></div>
				<div id="dot-2" class="browser-dot"></div>
				<div id="dot-3" class="browser-dot"></div>
			</div>
			<div class="post">
				<img class="thumbnail" src="${article.cover_image}" alt="Image of Article">
				<div class="post-preview">
					<h6 class="post-title">${article.title}</h6>
					<p class="post-intro">${article.description}</p>
					<div class="link-container">
						<a class="read-more" target="_blank"
							href="${article.canonical_url}">Read Article</a>
						</div>
					</div>
				</div>
			</div>`
			articleDiv.insertAdjacentHTML('beforeend', articleHtml);
		}
	})
}

window.addEventListener('load', (event) => {
	displayArticles();
  });
  