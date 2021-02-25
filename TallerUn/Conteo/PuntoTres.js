const PointTrois = () => {
    let nroTiendaMercado1 = 6;
    let nroTiendaMercado2 = 4;
    let nroTiendaMercado3 = 5;
    
    let contador = 1;

    for (let i = 1; i <= nroTiendaMercado1; i++) {
        console.log(contador , "Mercado 1 Tienda " , i)
        contador++;
    }

    for (let j = 1; j <= nroTiendaMercado2; j++) {
        console.log(contador , "Marcado 2 Tienda " , j)
        contador++;
    }  

    for (let k = 1; k <= nroTiendaMercado3; k++) {
        console.log(contador , "Marcado 3 Tienda " , k)
        contador++;
    }     
}


console.time("PointTrois");
PointTrois();
console.timeEnd("PointTrois");
