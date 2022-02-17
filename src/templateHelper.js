// create manager card

const generateManagerCard = (manager) =>

    `<div class="col-lg-4 col-md-6 mt-4">
<div class="card manager-card" style="width: 18rem;">
    <div class="card-header">
        <h2>${manager.name}</h2>
        <h3><span><i class="fa-solid fa-crown"></i> </span>Manager</h3>
    </div>
    <div class="card-body">
        <p class="rounded" id="id">ID: ${manager.id}</p>
        <p class="rounded" id="email">Email:<a href="mailto:${manager.email}">${manager.email}</a></p>
        <p class="rounded" id="office-number">Office Number: ${manager.officeNumber}</p>
    </div>
</div>
</div>`;

// create engineer card

const generateEngineerCard = (engineer) =>

    `<div class="col-lg-4 col-md-6 mt-4">
<div class="card manager-card" style="width: 18rem;">
    <div class="card-header">
        <h2>${engineer.name}</h2>
        <h3><span><i class="fa-solid fa-chess-rook"></i> </span>Engineer</h3>
    </div>
    <div class="card-body">
        <p class="rounded" id="id">ID: ${engineer.id}</p>
        <p class="rounded" id="email">Email:<a href="mailto:${engineer.email}">${engineer.email}</a></p>
        <p class="rounded" id="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p></p>
    </div>
</div>
</div>`;

const generateInternCard = (intern) =>

    `<div class="col-lg-4 col-md-6 mt-4">
<div class="card intern-card" style="width: 18rem;">
    <div class="card-header">
        <h2>${intern.name}</h2>
        <h3><span><i class="fa-solid fa-chess-pawn"></i> </span>Intern</h3>
    </div>
    <div class="card-body">
        <p class="rounded" id="id">ID: ${intern.id}</p>
        <p class="rounded" id="email">Email:<a href="mailto:${intern.email}">${intern.email}</a></p>
        <p class="rounded" id="school">School: ${intern.school}</p>
    </div>
</div>
</div>`;

const generateHTML = (data) => {

    teamArray = [];

    for (let i = 0; i < data.length; i++) {

        const employee = data[i]
        const role = employee.getRole();
        console.log(employee, role);

        switch (role) {
            case 'Manager':
                const managerCard = generateManagerCard(employee);
                teamArray.push(managerCard)
            break;
            case 'Engineer':
                const engineerCard = generateEngineerCard();
                teamArray.push(engineerCard)
            break;
            case 'Intern':
                const internCard = generateInternCard();
                teamArray.push(internCard)
            default:
                console.log('No employee role found!')

        }
    }

    const teamCards = teamArray.join("");
    return generatePage(teamCards)
};

const generatePage = (card) => `
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Team Profile</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="./style.css">
</head>

<body>
    <div class="jumbotron jumbotron-fluid">
        <div class="container d-flex justify-content-center">
            <h1 class="title">My Team</h1>
        </div>
    </div>

    <div class="container d-flex justify-content-center">
        <div class="row">
            ${card}
            </row>


        </div>
        <script src="" async defer></script>
</body>

</html>
`

module.exports = generateHTML;