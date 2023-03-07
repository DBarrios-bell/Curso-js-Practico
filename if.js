var edad = 18;

if (edad  === 18) {
    console.log("hey puedes votar, tu primera votacion");
} else if(edad > 18){
    console.log("Puedes votar de nuevo");
}else{
    console.log("No puedes votar")
}


condition ? true : falso;

var numero = 1;

var resultado = numero === 1 ? "si soy un uno" : "no soy uno";

//---------------------

function conseguirTipoSubcripcion(suscripcion){
    if(suscripcion =='free'){
        console.log("free");
        return;
    }
    if(suscripcion =='expert'){
        console.log("expert");
        return;
    }

    console.warn("el tipo de subscripcion no existe");
}



// --para crear solo una condicion y no muchas--

const TipoDeSubcripciones={
    free:'solo puedes tomar cursos free',
    expert:'solo puedes tomar cursos  expert',
    basic:'solo puedes tomar cursos  basic',
    experDuo:'solo puedes tomar cursos  experDuo',
};

function conseguirTipoSubcripcion(suscripcion){
    if(TipoDeSubcripciones[suscripcion]){
        console.log(TipoDeSubcripciones[suscripcion]);
        return;
    }
    console.warn("el tipo de subscripcion no existe");
}