const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer')
const Intern = require('../lib/Intern')


function generateCards(team) {
    let cards = []
    for(let i = 0; i < team.length; i++) {
    const teamArray = team[i];
        switch(teamArray.getRole()) {
            case 'Manager':
            const manager = new Manager(teamArray.id, teamArray.name, teamArray.email, teamArray.officeNumber);
            cards.push(generateManagerCard(manager));
            break;
            case 'Engineer':
            const engineer = new Engineer(teamArray.id, teamArray.name, teamArray.email, teamArray.github);
            cards.push(generateEngineerCard(engineer));
            break;
            case 'Intern':
            const intern = new Intern(teamArray.id, teamArray.name, teamArray.email, teamArray.school);
            cards.push(generateInternCard(intern));
            break;
        }
    }
    return cards.join(``)
}

function generateTeam(team) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
    <title>My Team</title>
  </head>
  <body>
  <div class="jumbotron jumbotron-fluid bg-danger">
    <div class="container">
      <h1 class="display-4 text-center">My Team</h1>
    </div>
  </div>
  <div class="d-flex flex-row flex-wrap justify-content-center">
  ${generateCards(team)}
  </div>
  </body>
  </html>
      `
  }



let generateManagerCard = (Manager) => {
    return `
    <div class="card m-1" style="width: 18rem">
        <div class="card-header bg-primary">
            <h3 class="card-title bg-primary text-white">${Manager.getName()}</h3>
            <h6 class="card-text bg-primary text-white"><i class="fa fa-coffee"></i> ${Manager.getRole()}</h6>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${Manager.getId()}</li>
                <li class="list-group-item">Email:<a href="mailto: ${Manager.getEmail()}"> ${Manager.getEmail()}</a></li>
                <li class="list-group-item">Office Number: ${Manager.getOfficeNumber()}</li>
            </ul>
        </div>
    </div>
    `
}

let generateEngineerCard = (Engineer) => {
  return `
  <div class="card m-1 " style="width: 18rem">
    <div class="card-header bg-primary">
      <h3 class="card-title bg-primary text-white">${Engineer.getName()}</h3>
      <h6 class="card-text bg-primary text-white"><i class="fa fa-laptop"></i> ${Engineer.getRole()}</h6>
    </div>
    <div class="card-body">
      <ul class="list-group">
        <li class="list-group-item">ID: ${Engineer.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto: ${Engineer.getEmail()}"> ${Engineer.getEmail()}</a></li>
        <li class="list-group-item">GitHub: <a href="https://github.com/${Engineer.getGithub()}"> ${Engineer.getGithub()}</a></li>
      </ul>
    </div>
  </div>
  `
};

let generateInternCard = (Intern) => {
  return `
  <div class="card m-1 shadow" style="width: 18rem">
    <div class="card-header bg-primary">
      <h3 class="card-title bg-primary text-white">${Intern.getName()}</h3>
      <h6 class="card-text bg-primary text-white"><i class="fa fa-graduation-cap"></i> ${Intern.getRole()}</h6>
    </div>
    <div class="card-body">
      <ul class="list-group">
        <li class="list-group-item">ID: ${Intern.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto: ${Intern.getEmail()}"> ${Intern.getEmail()}</a></li>
        <li class="list-group-item">School: ${Intern.getSchool()}</li>
      </ul>
    </div>
  </div>
  `
}




module.exports = generateTeam;