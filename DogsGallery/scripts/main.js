let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/ShibaInu.jpeg')
    {
        myImage.setAttribute('src', 'images/ShibaInu2.jpeg');
    } else {
        myImage.setAttribute('src', 'images/ShibaInu.jpeg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name');
    if (!myName) {
        setUserName();
    } else {    localStorage.setItem('name', myName);
    myHeading.textContent = 'Welcome to the Dogs Gallery ' + myName;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Welcome to the Dogs Gallery ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}