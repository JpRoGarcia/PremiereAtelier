const PointDeux = () => {
    let nroCarreteras = 3;

    for (let d = 1; d <= nroCarreteras; d++) {
        console.log("Numero de Carretera es:" , d);
    }
}

console.time("PointDeux");
PointDeux();
console.timeEnd("PointDeux");