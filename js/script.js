
document.querySelector('.next').onclick = MyClick;

function MyClick() {
    let log = document.querySelector('#c1').value.toLowerCase()
   

    if(log === 'alex') {
        document.querySelector('.container').classList = 'none';
        document.querySelector('.container2').classList = 'block';
    } else window.location.href = 'error.html';


    

}

document.querySelector('#next2').onclick = MyClick2;

function MyClick2() {
    let log2 = document.querySelector('#c2').value

    if(log2 === '7777') {
        window.location.href = 'index2.html';
        
    } else window.location.href = 'error.html';

}

