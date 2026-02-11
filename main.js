const generateBtn = document.getElementById('generate-btn');
const lottoNumbersContainer = document.getElementById('lotto-numbers');
const setsInput = document.getElementById('sets-input');

generateBtn.addEventListener('click', () => {
    lottoNumbersContainer.innerHTML = '';
    const numberOfSets = parseInt(setsInput.value, 10);

    for (let i = 0; i < numberOfSets; i++) {
        const setContainer = document.createElement('div');
        setContainer.classList.add('lotto-set');

        const numbers = new Set();
        while(numbers.size < 6) {
            numbers.add(Math.floor(Math.random() * 45) + 1);
        }

        const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

        sortedNumbers.forEach(number => {
            const numberDiv = document.createElement('div');
            numberDiv.classList.add('lotto-number');
            numberDiv.textContent = number;
            setContainer.appendChild(numberDiv);
        });

        lottoNumbersContainer.appendChild(setContainer);
    }
});