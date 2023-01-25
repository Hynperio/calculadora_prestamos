invisible.style.display = "none";

function calcular(){ 
    //Obtener variables
    let monto = document.getElementById("monto");
    let interes = document.getElementById("interes");
    let meses = document.getElementById("meses");
    let invisible = document.getElementById("invisible");
    let texto = document.getElementById("texto");

    //Verificar si los campos estan completos
    if (monto.value == null || interes.value == null || meses.value == null) {
        invisible.className = "alert alert-danger text-center mt-5";
        texto.innerHTML = "Por favor llene todos los campos.";
        invisible.style.display = "block";
        
    }

    else if (monto.value == "" || interes.value == "" || meses.value == "") {
        invisible.className = "alert alert-danger text-center mt-5";
        texto.innerHTML = "Por favor llene todos los campos.";
        invisible.style.display = "block";
        
    }

    //Calculo de Prestamo
    else{
        invisible.style.display = "block";
        invisible.className = "col-12 alert alert-primary text-center"; //Clase Div

        monto = parseFloat(monto.value);
        interes = parseFloat(interes.value);
        meses = parseFloat(meses.value);

        let interest = interes;
    
        interes = (interes / 12) / 100; //Interes por mes
    
        let interes1 = Math.pow((1 + interes), meses) * interes; //Primera parte de la formula 
        let interes2 = Math.pow((1 + interes), meses) - 1; //Segunda parte de la formula

        let total = ( monto * (interes1 / interes2)); //Total Cuota Mensual
        
        let inttt = (parseFloat(total) * meses) - monto;

        total = total.toLocaleString("en-US", {minimumFractionDigits: 2}); 
        inttt = inttt.toLocaleString("en-US", {maximumFractionDigits: 2});

        texto.innerHTML = `Cuota Mensual estimada: <b>DOP ${total}</b>  <br> Total de interés pagado: <b> DOP ${inttt} </b> `; //Texto Total

    }
}