async function displayProjects() {
	const projects = await fetch('/api/getProjects')
		.then(response => response.json())
		.then(json => {
			return json
		});

	var projDiv = document.getElementById('projects');

	projects.forEach(project => {
		if (project.public) {
			var htmlStuff = `
		<div class="wrapper">
			<div class="dots-wrapper card-header">
				<div id="dot-1" class="browser-dot"></div>
				<div id="dot-2" class="browser-dot"></div>
				<div id="dot-3" class="browser-dot"></div>
			</div>
			<div class="post">
				<img class="thumbnail" src="${project.image}" alt="Image of Project">
				<div class="post-preview">
					<h6 class="post-title">${project.title}</h6>
					<p class="post-intro">${project.description}</p>
					<div class="link-container">
						<a class="read-more" target="_blank"
							href="${project.repoLink}">Repo
							Link</a>`
			if (project.liveLink) {
				htmlStuff += `
									<a class="read-more" target="_blank"
									href="${project.liveLink}">Live Site</a>
											</div>
										</div>
									</div>
								</div>`
			}

			projDiv.insertAdjacentHTML('beforeend', htmlStuff);
		}
	})
}