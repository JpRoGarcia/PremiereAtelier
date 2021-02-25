const PointQuatre = () => {
    let Paises = 20;
    let Embajador = 20;
    let contador = 0;

    for (let i = 1; i <= Paises; i++) {
        for (let j = 1; j <= Embajador; j++) {
            if(i != j){
                contador++;
                console.log(contador, "Resultados: " , "Pais: " , i, " y Embajador pais: " , j )            
            }
        }      
    }
}

console.time("PointQuatre");
PointQuatre();
console.timeEnd("PointQuatre");
