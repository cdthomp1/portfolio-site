particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 33,
        "density": {
          "enable": true,
          "value_area": 1420.4657549380909
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "triangle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.06313181133058181,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 11.83721462448409,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });
   
var githubURL = 'https://api.github.com/users/cdthomp1/repos?sort=updated'


async function getGithub() {
  return await fetch(githubURL).then(res => {
    return res.json();
  }).catch((e)=>{
    console.error(e)
  })
}


function displayResults(repo) {

    var div = document.createElement("div");
    div.classList.add("githubProject");
    var repoHeader = repo.name;
   
    if (repo.language === null) {
      var repoLanguage = "None Yet!"
    } else {
      var repoLanguage = repo.language;
    }

    if (repo.description === null) {
      var repoDescription = "No Description Yet!"
    } else {
      var repoDescription = repo.description;
    }


    var projectHeader = document.createElement("h3");
    projectHeader.innerText = repoHeader;
    div.appendChild(projectHeader)
    var p = document.createElement("p");
    var languageTextnode = document.createTextNode("Language: " + repoLanguage);
    p.appendChild(languageTextnode);
    div.appendChild(p);

    var pD = document.createElement("p");
    var descriptionTextnode = document.createTextNode(repoDescription);
    pD.appendChild(descriptionTextnode);
    div.appendChild(pD);

    document.getElementById("githubProjects").appendChild(div)


}

getGithub().then(res => {
  var repos = res.slice(0,3)
  repos.forEach(repo => {
    displayResults(repo);
  })
}).catch((e)=>{
  console.error(e)
})
