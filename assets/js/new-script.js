// fetch json and view
let requestURL = './assets/js/projects.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function () {
  const URL = request.response;
  console.log('ALL GOOD? BRUH');
  completedProjects(URL);
  console.log('/*/*/*/*/*/*/*/*/*/');
};
function completedProjects(obj) {
  const projectBuild = obj['project_build'];

  for (let i = 0; i < projectBuild.length; i++) {
    var card = '<div  class="col-6" id="project-card">';
    card += '<div class="card-body">';
    card +=
      '<h3 class="card-title" id="card-title">' +
      projectBuild[i].title +
      '</h3>';
    card +=
      ' <p class="card-text" id="card-text">' + projectBuild[i].text + '</p>';
    card +=
      ' <p class="card-tech" id="card-tech">Tech Stack: ' +
      projectBuild[i].stack +
      '</p>';
    card +=
      ` <a href="${projectBuild[i].href}" id="projectLink" ` +
      'class="projectLink" target="_blank" rel="noopener noreferrer">' +
      'Visit Project</a>';
    card += '</div>';
    card += '</div>';
    $('#project-cards').append(card);
  }
}
