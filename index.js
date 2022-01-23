document.addEventListener('DOMContentLoaded', function(){
   
    
    let resultText = document.getElementById('resultText');

    let firstNumber = '';
    let secondNumber = '';
    let operation = '';
    let result = '';

    let root = document.getElementById('root');
    root.addEventListener('click', function(event){
        const eventOperation = event.target.dataset.eventOperation;
        const eventNumber = event.target.dataset.eventNumber;

        console.log('2')

        if(eventNumber){
            let tempResult = result + eventNumber;
            if( tempResult === ',' || tempResult.indexOf('.') !== tempResult.lastIndexOf('.')){
                return;
            } 

            console.log(tempResult)
            if (!operation){
                firstNumber += eventNumber;
                result = firstNumber;
                console.log('3')
            } else {
                secondNumber += eventNumber;
                result = secondNumber;
                console.log('4')
            } 
        } else if ( eventOperation === 'ac'){
            firstNumber = '';
            secondNumber = '';
            result = '0';

            console.log('5')
        } else if (eventOperation !== '='){
           
            console.log('6')
            if ( operation === '+'){
                result = +firstNumber + +secondNumber;
            } else if ( operation === '-'){
                result = +firstNumber - +secondNumber;
            }else if ( operation === '*'){
                result = +firstNumber * +secondNumber;
            } else if ( operation === '/'){
                result = +firstNumber / +secondNumber;
            } else if (operation === '%'){
                result = +(firstNumber * secondNumber) / 100;
            } 
            firstNumber = result;
            operation = eventOperation;
            secondNumber = '';
        } else if ( eventOperation === '='){
            if ( operation === '+'){
                result = +firstNumber + +secondNumber;
            } else if ( operation === '-'){
                result = +firstNumber - +secondNumber;
            }else if ( operation === '*'){
                result = +firstNumber * +secondNumber;
            } else if ( operation === '/'){
                result = +firstNumber / +secondNumber;
            } else if (operation === '%'){
                result = +(firstNumber * secondNumber) / 100;
            } 

            firstNumber = result;
            operation = eventOperation;
            secondNumber = '';
        }
        resultText.value = result;
        
    }); 
   
});
