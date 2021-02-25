const PointSix = () => {
    let nroFideo = 5;
    let nroCarne = 4;
    let nroSalsa = 6;
    let contador = 0;

    for (let a = 1; a <= nroFideo; a++) {
        for (let b = 1; b <= nroCarne; b++) {
            for (let c = 1; c <= nroSalsa; c++) {
                contador++;
                console.log("Numero Combinaciones es: " , contador)   
                
            }
            
        }     
    }
}

console.time("PointSix");
PointSix()
console.timeEnd("PointSix");