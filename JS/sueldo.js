function Sueldo(categoria,sueldo) {
    if (categoria == 1){
        sueldo= sueldo + (sueldo * .15)
    
    } else if (categoria ==2 ){
        sueldo= sueldo + (sueldo * .10) 
          
    }else if (categoria == 3) {
        sueldo= sueldo + (sueldo * .8)
    
    }else if (categoria == 4){
        sueldo= sueldo + (sueldo * .7)
    
    }
    return "Categoria: " + categoria + "Nuevo sueldo: " + sueldo.toFixed(2)
}

