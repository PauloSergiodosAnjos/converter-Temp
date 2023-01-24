const Celcius = Number (prompt('type your celcius temp'));
const calcCtoF = (Celcius * 1.8) + 32;
const text1 = document.getElementById('TempCtoF');
const calcCtoK = (Celcius + 273);
const text2 = document.getElementById('TempCtoK');


text1.innerHTML = `${calcCtoF} F`;
text2.innerHTML = `${calcCtoK} K`;


