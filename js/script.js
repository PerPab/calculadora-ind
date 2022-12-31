
    
 window.addEventListener('load', function(){

    let boton = document.getElementById('boton');
    function calcular(){
        let ingreso = Number(document.getElementById('ingreso').value);
        let salida = Number(document.getElementById('salida').value);
        let sueldo = Number(document.getElementById('sueldo-bruto').value);
        let preAviso = document.getElementById('pre-aviso').value;
        let dineroPreAviso;
        let aniosTrabajados = salida - ingreso;
        let monto;

        if(aniosTrabajados > 6){
            monto = 60;
        }else if(aniosTrabajados > 1 && aniosTrabajados < 6){
            monto = 30;
        }else {
            monto = 15;
        }

        if(preAviso=='no'){
            dineroPreAviso = (sueldo/30) * monto;
        }else{
            dineroPreAviso = 0;
        }
          
        let dineroApagar = (sueldo * aniosTrabajados) + dineroPreAviso;

        document.getElementById('resultado').value = `$ ${dineroApagar}`;
    }

    boton.onclick = calcular;

 },true);