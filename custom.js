// all heading color change
let firstHeading = document.getElementById('first-heading');
let firstHeadinColor = headingColor(firstHeading);
// firstHeading.style.color = 'white';
let secondHeading = document.getElementById('second-heading');
let secondHeadinColor = headingColor(secondHeading);
// secondHeading.style.color = 'white';
let thirdHeading = document.getElementById('third-heading');
let thirdHeadinColor = headingColor(thirdHeading);
// thirdHeading.style.color = 'white';

function headingColor(headingProperty){
    let headingColor = headingProperty;
    headingColor.style.color = 'maroon';
}

// top player bg color
const containerBgColor = document.getElementById('container-bg-color');
containerBgColor.style.backgroundColor = 'lightseagreen';
const secondContainerBgColor = document.getElementById('second-container-bg-color');
secondContainerBgColor.style.backgroundColor = 'lightseagreen';

// course card design
const firstCardBgColor = document.getElementById('first-course');
firstCardBgColor.style.backgroundColor = 'lavender';
const secondCardBgColor = document.getElementById('second-course');
secondCardBgColor.style.backgroundColor = 'lavender';
const thirdCardBgColor = document.getElementById('third-course');
thirdCardBgColor.style.backgroundColor = 'lavender';

// input Part
document.getElementById('button').addEventListener('click', function(){
    let increaseInput = document.getElementById('input') ;
    let increaseInputText = increaseInput.value;
    let increaseInputTextNumber = parseInt(increaseInputText);
    if (increaseInputTextNumber >= 0){
        increaseInput.value = increaseInputTextNumber + 1;
        if ( increaseInput.value == 5){
            document.getElementById("button").disabled = true;
        }
    }
})

// add iteam
document.getElementById('creat-button').addEventListener('click', function(){
    const ulLiList = document.getElementById('ul-list');
    const creatLi = document.createElement('')
})

// creat li 
document.getElementById('creat-button').addEventListener('click', function(){
    const newLi = document.createElement('li');
    newLi.innerText = 'Player Four';

    const newUl = document.getElementById('ul-list');
    newUl.appendChild(newLi);
})


