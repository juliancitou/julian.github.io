var valor1 = null;
        var valor2 = null;
        var status = null;
        function suma() {
            valor1 = document.getElementsByName("num1")[0].value;
            valor2 = document.getElementsByName("num2")[0].value;
            suma = parseInt(valor1) + parseInt(valor2);
            alert("El resultado es " + suma);
        };
        function multi() {
            valor1 = document.getElementsByName("num1")[0].value;
            valor2 = document.getElementsByName("num2")[0].value;
            prod = parseInt(valor1) * parseInt(valor2);
            alert("El resultado es " + prod);
        };
        
        function restar(){
            valor1 = document.getElementsByName("num1")[0].value;
            valor2 = document.getElementsByName("num2")[0].value;
            prod = parseInt(valor1) - parseInt(valor2);
            alert("El resultado es " + prod);
        };

        function dividir(){
            valor1 = document.getElementsByName("num1")[0].value;
            valor2 = document.getElementsByName("num2")[0].value;
            prod = parseInt(valor1) / parseInt(valor2);
            alert("El resultado es " + prod);
        };