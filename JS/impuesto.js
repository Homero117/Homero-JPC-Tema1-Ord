function impu(articulo){
    let prefinal;
    if(articulo<=20){
        prefinal=articulo;
        return "Precio total: "+prefinal.toFixed(2)
    }
    if(articulo>20 && articulo<=40){
        prefinal=articulo+(((articulo-20)*30)/100);
        return "Precio total: "+prefinal.toFixed(2)
    }
    if(articulo>40 && articulo<=500){
        prefinal=articulo+4+(((articulo-40)*40)/100);
        return "Precio total: "+prefinal.toFixed(2)
    }
    if(articulo>500){
        prefinal=articulo+4+(((articulo-40)*50)/100);
        return "Precio total: "+prefinal.toFixed(2)
    }

}
