
        function calcular() {
            const numero = parseInt(document.getElementById('numero').value);
            
            if (isNaN(numero)) {
                document.getElementById('resultado').textContent = "Por favor, insira um número válido.";
                return;
            }
            
            const sucessor = numero + 1;
            const antecessor = numero - 1;
            
            document.getElementById('resultado').textContent = `O antecessor de ${numero} é ${antecessor} e o sucessor é ${sucessor}.`;
        }