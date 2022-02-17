// create manager card

const generateManagerCard = () =>

`<div class="col-lg-4 col-md-6 mt-4">
<div class="card manager-card" style="width: 18rem;">
    <div class="card-header">
        <h2>Manager</h2>
        <h3><span><i class="fa-solid fa-crown"></i> </span>Tywin Lannister</h3>
    </div>
    <div class="card-body">
        <p class="rounded" id="id">ID: ${manager.id}</p>
        <p class="rounded" id="email">Email:<a href="mailto:${manager.email}">${manager.email}</a></p>
        <p class="rounded" id="office-number">Office Number: ${manager.officeNumber}</p>
    </div>
</div>
</div>`;

// create engineer card

const generateEngineerCard = () => 

`<div class="col-lg-4 col-md-6 mt-4">
<div class="card manager-card" style="width: 18rem;">
    <div class="card-header">
        <h2>Engineer</h2>
        <h3><span><i class="fa-solid fa-chess-rook"></i> </span>Jamie Lannister</h3>
    </div>
    <div class="card-body">
        <p class="rounded" id="id">ID: </p>
        <p class="rounded" id="email">Email:<a href="mailto:${engineer.email}">${engineer.email}</a></p>
        <p class="rounded" id="github">Github: </p>
    </div>
</div>
</div>`;

const generateInterCard = () => 

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