displayProjects();
        
netlifyIdentity.init();
var thing = document.getElementById("login").childNodes;
thing[0].remove()

    

netlifyIdentity.on('login', user => location.reload());
netlifyIdentity.on('logout', () => token = null);
function addProject() {
    try {
        var token = netlifyIdentity.currentUser().token.access_token; 
    }catch (err) {
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
    setTimeout(function(){ document.getElementById('easterEgg').style.visibility = 'hidden'; }, 5000);
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
        repo.innerHTML = `<a href="${item.repoLink}" target="_blank">${item.repoLink}</a>`;
        let live = row.insertCell(2);
        live.innerHTML = `<a href="${item.liveLink}" target="_blank">${item.liveLink}</a>`;
    });
}