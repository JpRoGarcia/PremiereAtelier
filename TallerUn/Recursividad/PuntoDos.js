let listaRandom = Array(0)

function PointDeux(n) {

    NuevoRandom = RandomInt(0, 1000);

    if(Repetido(listaRandom, listaRandom.length, NuevoRandom) == true){

        listaRandom.push(NuevoRandom)

        if(n==1){
            return console.log(listaRandom); 
        }
        else{
            return PointDeux(n-1)
        }

    }else{
        PointDeux(n)
    }   
}

function Repetido(Lista, TamanoL, x) {
    
    if(TamanoL<0){
        return true
    }else{
        if(Lista[TamanoL] == x){
            return false
        } else{
            return Repetido(Lista, TamanoL - 1, x)
        }
    }
}

function RandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

console.time("PointDeux");
console.log(PointDeux(100));
console.timeEnd("PointDeux");