var url = 'https://api.github.com/users/cdthomp1/repos?sort=updated'


function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var github = JSON.parse(this.responseText)
        var i = 1;
        github.forEach(repo => {
            console.log(repo.name)
            document.getElementById("name" + i).innerHTML = repo.name;
            document.getElementById("lang" + i).innerHTML = repo.language;
            
            var repoLang = repo.languages_url;
            i++;
        });

      }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
  }




  loadDoc()
