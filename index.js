const calcy = () => {
    let Mark1 = document.getElementById('EM1').value;
    let Mark2 = document.getElementById('EM1T').value;
    let Mark3 = document.getElementById('EP1').value;
    let Mark4 = document.getElementById('EP1T').value;
    let Mark5 = document.getElementById('EC1').value;
    let Mark6 = document.getElementById('EC1T').value;
    let Mark7 = document.getElementById('EM').value;
    let Mark8 = document.getElementById('EMT').value;
    let Mark9 = document.getElementById('BEE').value;
    let Mark10 = document.getElementById('BEET').value;
    let Mark11 = document.getElementById('WS').value;
    if (Mark1 > 100 || Mark2 > 25 || Mark3 > 75 || Mark4 > 25 || Mark5 > 75 || Mark6 > 25 || Mark7 > 100 || Mark8 > 50 || Mark9 > 100 || Mark10 > 50 || Mark11 > 50) {
        alert("invalid Marks");
    }
    else {
        let Total = parseFloat(Mark1) + parseFloat(Mark2) + parseFloat(Mark3) +
            parseFloat(Mark4) + parseFloat(Mark5) + parseFloat(Mark6) + parseFloat(Mark7) +
            parseFloat(Mark8) + parseFloat(Mark9) + parseFloat(Mark10) + parseFloat(Mark11);
        let percentage = (Total / 675) * 100;
   
        let message = ` 
    <p >Out of 675 your total is ${Total} and percentage is ${percentage}%.</p> `
    document.getElementById('message').innerHTML = message;
    }
}

    