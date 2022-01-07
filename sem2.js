const calcy = () => {
    let Mark1 = document.getElementById('mark1').value;
    let Mark2 = document.getElementById('mark2').value;
    let Mark3 = document.getElementById('mark3').value;
    let Mark4 = document.getElementById('mark4').value;
    let Mark5 = document.getElementById('mark5').value;
    let Mark6 = document.getElementById('mark6').value;
    let Mark7 = document.getElementById('mark7').value;
    let Mark8 = document.getElementById('mark8').value;
    let Mark9 = document.getElementById('mark9').value;
    let Mark10 = document.getElementById('mark10').value;
    let Mark11 = document.getElementById('mark11').value;
    let Mark12 = document.getElementById('mark12').value;
    let Mark13 = document.getElementById('mark13').value;
    if (Mark1 > 100 || Mark2 > 25 || Mark3 > 75 || Mark4 > 25 || Mark5 > 75 || Mark6 > 25 || Mark7 > 75 || Mark8 > 75 || Mark9 > 75 || Mark10 > 50 || Mark11 > 50 || Mark12 > 25 || Mark13 > 50) {
        alert("invalid Marks");
    }
    else {
        let Total = parseFloat(Mark1) + parseFloat(Mark2) + parseFloat(Mark3) +
            parseFloat(Mark4) + parseFloat(Mark5) + parseFloat(Mark6) + parseFloat(Mark7) +
            parseFloat(Mark8) + parseFloat(Mark9) + parseFloat(Mark10) + parseFloat(Mark11)+
            parseFloat(Mark12) + parseFloat(Mark13);
        let percentage = (Total / 725) * 100;
   
        let message = ` 
    <p >Out of 725 your total is ${Total} and percentage is ${percentage}%.</p> 
    `
    document.getElementById('message').innerHTML = message;       
    }
}