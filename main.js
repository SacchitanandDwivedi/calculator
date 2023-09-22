let history = [];

        function appendToResult(value) {
            document.getElementById('result').value += value;
        }

        function clearResult() {
            document.getElementById('result').value = '';
        }

        function calculateResult() {
            try {
                const expression = document.getElementById('result').value;
                const result = eval(expression);
                document.getElementById('result').value = result;
                history.push(expression + " = " + result);
                updateHistory();
            } catch (error) {
                document.getElementById('result').value = 'Error';
            }
        }

        function updateHistory() {
            const historyElement = document.getElementById('history');
            historyElement.innerHTML = "History:<br>";
            history.forEach((entry) => {
                historyElement.innerHTML += entry + "<br>";
            });
        }