document.addEventListener("DOMContentLoaded", () => {
    // initialSetColor();
    SetColor();

    // const redBtn = document.getElementById('Red');
    // const greenBtn = document.getElementById('Green');
    // const blueBtn = document.getElementById('Blue');

    // redBtn.onclick = () => setColor('red');    
    // greenBtn.onclick = () => setColor('green');    
    // blueBtn.onclick = () => setColor('blue');  
    
    const light = document.getElementById('Light');
    const dark = document.getElementById('Dark');

    light.onclick = () => pickSetColor('rgb(227, 224, 224)');  
    dark.onclick = () => pickSetColor('rgb(120, 118, 118)');  
});

// function getColor(color) {
//     return localStorage.getItem('color');
// }

// function setColor(color) {
//     document.body.style.background = color;
//     localStorage.setItem('color', color);
// }

// function initialSetColor() {
//     const localColor = getColor();
//     if (localColor) {
//         document.body.style.background = localColor;
//     }
// }

// localStorage.setItem('array', JSON.stringify([{a:1}]))
// to work with data

function pickGetColor(pick) {
    return localStorage.getItem('pick');
}

function pickSetColor(pick) {
    document.body.style.background = pick;
    localStorage.setItem('pick', pick);
}

function SetColor() {
    const localColor = pickGetColor();
    if (localColor) {
        document.body.style.background = localColor;
    }
}

const userNameElement = document.getElementById('Name');
const userAgeElement = document.getElementById('Age');
var userBtn = document.querySelector('.submit');

userBtn.addEventListener('click', function() {
    const user = {
        userName: userNameElement.value,
        userAge: userAgeElement.value,
    }

    console.log(user);

    localStorage.setItem('user', JSON.stringify(user));
})

