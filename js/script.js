
    
 $(document).ready( function(){

    function mostrarAno(){
        let fecha = new Date();
        let ano = fecha.getFullYear();
        let ingreso = document.getElementById('ingreso');
        let salida = document.getElementById('salida');
        for(i=ano; i>=1900; i--){
            ingreso.options.add(new Option(i,i));
            salida.options.add(new Option(i,i));
        }
    }
    window.onload = mostrarAno;

    
    
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
                let formato = Intl.NumberFormat().format(dineroApagar);

                $('#resultado').val( `$ ${formato}`);
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
