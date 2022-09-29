let wallet = {
    money: 10000
};


document.querySelector('.wallet').innerHTML = `<h1>ВАШ БАЛАНС:   ${wallet.money}</h1>`;

document.querySelector('#next3').onclick = MyClick3;

function MyClick3() {
    let log3 = document.querySelector('#c3').value

    log3 = +log3

    let com = log3 / 100 * 3
    let total = log3 + com



    document.querySelector('.m1').innerHTML = `${log3}`;
    document.querySelector('.m2').innerHTML = `${com}`;
    document.querySelector('.m3').innerHTML = `${log3 + com}`;

    // let twallet = []

    if (total <= 10000) {
        document.querySelector('.yes').classList = 'yes_block';
    } else {
        document.querySelector('.no').classList = 'no_block';
    }



    document.querySelector('#sucf').onclick = MyClick4;

    function MyClick4() {

        document.querySelector('#container4').classList = 'block';

        document.querySelector('.container3').classList = 'none';

        let total_balance = 10000 - total

        document.querySelector('.wallet').innerHTML = `<h1>ВАШ БАЛАНС:   ${total_balance}</h1>`;


        let twallet = []

        twallet.push(total)


        console.log(twallet);
        console.log(total);


        document.querySelector('.total').innerHTML = `<h1>${twallet}</h1>`;
        // twallet.push(10000 - total)








        document.querySelector('#back').onclick = MyClick5;

        function MyClick5() {
    
            document.querySelector('#container4').classList = 'block';
    
            document.querySelector('.container3').classList = 'none';
    
           let total_balance = 10000 - total
    
            document.querySelector('.wallet').innerHTML = `<h1>ВАШ БАЛАНС:   ${total_balance}</h1>`;
    
    
                let twallet = []
    
                twallet.push(total)
    
    
                console.log(twallet);
                console.log(total);
    
    
                document.querySelector('.total').innerHTML = `<h1>${twallet}</h1>`;
        // twallet.push(10000 - total)
    }
    

    }





    // document.querySelector('.total').innerHTML = `<h1>${twallet}</h1>`;
}


// document.querySelector('#sucf').onclick = MyClick4;

// function MyClick4() {
//     twallet.push(10000 - total)
// }

// let twallet = {

// }
