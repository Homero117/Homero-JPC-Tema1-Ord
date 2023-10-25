function Fgeneral(a,b,c){

arreglo = [null, null]

discriminante = ((b ** 2) - (4*(a*c)))
raiz = Math.sqrt(Math.abs(discriminante))
x1= ( (b*(-1)) + raiz) / (2 * a)
x2= ( (b*(-1)) - raiz) / (2 * a)


 if (x1 < 0){
    x1= x1 +  "i "
    arreglo[0]= x1
    arreglo[1]= x2
    
    
    return arreglo
 }
 if (x2 < 0){
    x2= x2 +  "i "
    arreglo[0]= x1
    arreglo[1]= x2


return arreglo
 }



}
console.log(Fgeneral(8,1,8))


 