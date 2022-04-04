document.querySelector("#send").addEventListener('click', function(e){
    e.preventDefault();
    
    let name = document.querySelector('#name');
    let height = document.querySelector('#height');
    let weight = document.querySelector('#weight');

    let nameValue = name.value;
    let heightValue = height.value;
    let weightValue = weight.value;

    heightValue = (heightValue / 100)
    heightValue = heightValue.toFixed(2)
    heightValue = parseFloat(heightValue)


    let M = weightValue / Math.pow(heightValue, 2)
    //let M = weightValue / (heightValue * heightValue)
    M = M.toFixed(2)

    if (M < 16){
        document.querySelector('.result').innerHTML = (nameValue + ' possui Índice de Massa Corporal igual a ' + M +', sendo classificado como: ' + '<strong> Baixo peso muito grave. </strong>')
    } else if (M == 16 || M <= 16.99){
        document.querySelector('.result').innerHTML = (nameValue + ' possui Índice de Massa Corporal igual a ' + M +', sendo classificado como: ' + '<strong> Baixo peso grave. </strong>')
    } else if (M == 17 || M <= 18.49){
        document.querySelector('.result').innerHTML = (nameValue + ' possui Índice de Massa Corporal igual a ' + M +', sendo classificado como: ' + '<strong> Baixo peso. </strong>')
    } else if (M == 18.50 || M <= 24.99){
        document.querySelector('.result').innerHTML = (nameValue + ' possui Índice de Massa Corporal igual a ' + M +', sendo classificado como: ' + '<strong> Peso normal. </strong>')
    } else if (M == 25 || M <= 29.99){
        document.querySelector('.result').innerHTML = (nameValue + ' possui Índice de Massa Corporal igual a ' + M +', sendo classificado como: ' + '<strong> Sobrepeso. </strong>')
    } else if (M == 30 || M <= 34.99){
        document.querySelector('.result').innerHTML = (nameValue + ' possui Índice de Massa Corporal igual a ' + M +', sendo classificado como: ' + '<strong> Obesidade Grau I. </strong>')
    } else if (M == 35 || M <= 39.99){
        document.querySelector('.result').innerHTML = (nameValue + ' possui Índice de Massa Corporal igual a ' + M +', sendo classificado como: ' + '<strong> Obesidade Grau II. </strong>')
    } else if (M > 40){
        document.querySelector('.result').innerHTML = (nameValue + ' possui Índice de Massa Corporal igual a ' + M +', sendo classificado como: ' + '<strong> Obesidade Grau III. </strong>')
    }

})
function showResult(){
    let resultSelect = document.querySelector(".resultArea")

    if (resultSelect.classList.contains('hideResult')){
        resultSelect.classList.remove('hideResult');
        resultSelect.classList.add('showResult');
    }
}