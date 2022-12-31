
    
 $(document).ready( function(){

    
    
    function calcular(){

        let ingreso =Number( $('#ingreso').val());
        let salida = Number($('#salida').val());
        let sueldo = Number($('#sueldo-bruto').val());
        let preAviso = $('#pre-aviso').val();
        let dineroPreAviso;
        let aniosTrabajados = salida - ingreso;
        let monto;

        if(ingreso=="" || salida == "" || sueldo == ""){
            $('#resultado').val(`Debe completar todos los campos`);
        }else{
            if(!isNaN(ingreso) && !isNaN(salida) && !isNaN(sueldo)){
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

                $('#resultado').val( `$ ${dineroApagar}`);
                }
            else{
                $('#resultado').val( `Uno de los valores ingresados no es un número`);


            }
        }
        
    }

    $('#boton').click(function(){
        calcular();
    })

 });