var estudiantes =["maria","sergio","rosa","daniel"];

function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
}

for (var i=0; i < estudiantes.length; i++){
    saludarEstudiantes(estudiantes[i]);
}

// -----------------------------

var estudiantes =["maria","sergio","rosa","daniel"];

function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
}

for (var estudiante of estudiantes){
    saludarEstudiantes(estudiante);
}


// ___________________________________________

var estudiantes =["maria","sergio","rosa","daniel"];

function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
}

while (estudiantes.length >0) {
    var estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante);
}