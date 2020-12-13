netlifyIdentity.init();
        var thing = document.getElementById("login").childNodes;
        thing[0].remove()
        netlifyIdentity.on('login', user => location.reload());
        netlifyIdentity.on('logout', () => token = null);

        function openModal(modalName) {
            modalName();
        }

        function closeModal() {
            const container = document.getElementById('modal-container');
            if (container.innerHTML) {
                container.innerHTML = '';
            }
        }

        function addProject() {
            try {
                var token = netlifyIdentity.currentUser().token.access_token;
            } catch (err) {
                console.error("Can't get Token")
            }

            var title = document.getElementById('title').value;
            var des = document.getElementById('description').value;
            var image = document.getElementById('image').value;
            var repoLink = document.getElementById('repo-link').value;
            var liveLink = document.getElementById('live-link').value;


            if (token) {
                fetch(`/api/addproject`, {
                        method: 'POST',
                        headers: {
                            "Authorization": `Bearer ${token}`
                        },
                        body: JSON.stringify({
                            title: title,
                            description: des,
                            image: image,
                            repoLink: repoLink,
                            liveLink: liveLink
                        })
                    })
                    .then(response => response.json())
                    .then(json => {
                        console.log(json)
                        displayProjects();
                        clearAddForm();
                        showEasterEgg();
                    });
            } else {
                alert('Please Log In')
            }

        }

        function clearAddForm() {
            document.getElementById('title').value = '';
            document.getElementById('description').value = '';
            document.getElementById('image').value = '';
            document.getElementById('repo-link').value = '';
            document.getElementById('live-link').value = '';
        }

        function showEasterEgg() {
            document.getElementById('easterEgg').style.visibility = 'visible';
            setTimeout(function () {
                document.getElementById('easterEgg').style.visibility = 'hidden';
            }, 5000);
        }

        async function displayProjects() {
            const projects = await fetch('/api/getProjects')
                .then(response => response.json())
                .then(json => {
                    return json
                });

            const table = document.getElementById("projectTableBody");
            table.innerHTML = '';
            projects.forEach(item => {
                let row = table.insertRow();
                let title = row.insertCell(0);
                title.innerHTML = item.title;
                let repo = row.insertCell(1);
                repo.innerHTML =
                    `<a href="${item.repoLink}" target="_blank">Repo Link</a>`;
                let live = row.insertCell(2);
                live.innerHTML = `<a href="${item.liveLink}" target="_blank">Live Link</a>`;
                let edit = row.insertCell(3);
                edit.innerHTML = `<i class="far fa-edit"></i><i class="far fa-save"></i>`;
            });
        }

        function newProject() {
            const container = document.getElementById('modal-container');
            if (container.innerHTML) {
                container.innerHTML = '';
            }
            var testHtml = `
                    <div class="wrapper">
                        <div class="nav-wrapper">
                            <div class="dots-wrapper">
                                <div id="dot-1" class="browser-dot" onclick="closeModal()"></div>
                                <div id="dot-2" class="browser-dot"></div>
                                <div id="dot-3" class="browser-dot"></div>
                            </div>

                            <ul id="navigation">
                                <li>Add Project</li>
                            </ul>
                        </div>

                        <div class="post">

                            <label>Title</label> <input class="input-field" type="text" name="title" id="title"><br />
                            <label>Image</label><input class="input-field" type="text" name="image" id="image"><br />
                            <label>Repo Link</label><input class="input-field" type="text" name="repo-link"
                                id="repo-link"><br />
                            <label>Live Link</label><input class="input-field" type="text" name="live-link"
                                id="live-link"><br />
                            <label>Description</label> <textarea class="input-field" type="text" name="description"
                                id="description"></textarea><br />

                            <button id="add-btn" onclick="addProject()">Add</button>
                        </div>
                    </div>`;
            container.insertAdjacentHTML('beforeend', testHtml);
        }

        function projects() {
            const container = document.getElementById('modal-container');
            if (container.innerHTML) {
                container.innerHTML = '';
            }
            displayProjects();
            var testHtml = `
            <div class="wrapper proj-table">
                        <div class="nav-wrapper">
                            <div class="dots-wrapper">
                                <div id="dot-1" class="browser-dot"></div>
                                <div id="dot-2" class="browser-dot"></div>
                                <div id="dot-3" class="browser-dot"></div>
                            </div>

                            <ul id="navigation">
                                <li>Projects</li>
                            </ul>
                        </div>

                        <div class="projectTable">
                            <table id='projects-table'>
                                <thead>
                                    <tr>
                                        <th>Title</th>
                                        <th>Repo Link</th>
                                        <th>Live Link</th>
                                    </tr>
                                </thead>
                                <tbody id="projectTableBody"></tbody>
                            </table>
                        </div>
                    </div>
            `;
            container.insertAdjacentHTML('beforeend', testHtml);
        }

        function todoList() {
            const container = document.getElementById('modal-container');
            if (container.innerHTML) {
                container.innerHTML = '';
            }
            var testHtml = `<p>This is a test of todo list</p>`;
            container.insertAdjacentHTML('beforeend', testHtml);
        }

        function savedLinks() {
            const container = document.getElementById('modal-container');
            if (container.innerHTML) {
                container.innerHTML = '';
            }
            var testHtml = `<p>This is a test of savedLinks</p>`;
            container.insertAdjacentHTML('beforeend', testHtml);
        }