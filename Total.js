function Totalp(){
    let sem1 = document.getElementById('sem1').value;
    let sem2 = document.getElementById('sem2').value;
    let Total2 = parseFloat(sem1) + parseFloat(sem2);
    let percentage2 =(Total2/1400)*100; 
     let percentage3=Number(percentage2).toFixed(2);

    let message2 = `<p>Your percentage of 1st year :- ${percentage3}%</p> `
    document.getElementById('message2').innerHTML = message2;   
       
}