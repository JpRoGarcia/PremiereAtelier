const PointCinq = () => {
    let nroFaldas = 3;
    let nroBlusas = 5;
    let nroZapatos = 2;
    let contador = 0;

    for (let a = 1; a <= nroFaldas; a++) {
        for (let b = 1; b <= nroBlusas; b++) {
            for (let c = 1; c <= nroZapatos; c++) {
                contador++;
                console.log("Numero Maneras de Vestir: " , contador)                 
            }            
        }     
    }
}

console.time("PointCinq");
PointCinq();
console.timeEnd("PointCinq");