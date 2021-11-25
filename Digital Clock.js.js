function run_Time(){
    let oclockTime = new Date()
    let hours = oclockTime.getHours()
    let minuts = oclockTime.getMinutes() 
    let seconds = oclockTime.getSeconds() 
    document.getElementById(`clock`).innerHTML = `${hours}:${minuts}:${seconds}`
    document.getElementById(`date`).innerHTML = oclockTime.getDate() + `-` + (oclockTime.getMonth()+1) + `-` + oclockTime.getFullYear()
}
let changeColor = document.getElementById(`color`)
console.log(changeColor);
changeColor.onchange = () =>{
    document.getElementById(`main`).style.background = changeColor.value
    localStorage.setItem(`savedColor`,changeColor.value)
}
onload = () =>{
    document.getElementById(`main`).style.background = localStorage.getItem(`savedColor`)
}
setInterval(run_Time, 1000);


