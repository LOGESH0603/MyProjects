let opt = document.getElementById("opt")
let opt1 = document.getElementById("opt1")
let opt2 = document.getElementById("opt2")
let opt3 = document.getElementById("opt3")

let hrs = document.getElementById("Hours")
let min = document.getElementById("min")
let apm = document.getElementById("AmPm")
let sec= document.getElementById("sec")

opt.addEventListener("change", ()=>{

    let day = document.getElementById("Day")
    let date = document.getElementById("Date")
    setInterval(() => {
        let date1 = new Date()
       
    if(opt.value == opt1.value)
        {
            hrs.textContent = date1.getHours() + " Hrs"
            min.textContent = date1.getMinutes() + " Mins"
            sec.textContent = date1.getSeconds() + " Secs"
            if(date1.getDay() == 0){day.textContent = "Sunday"}
            if(date1.getDay() == 1){day.textContent = "Monday"}
            if(date1.getDay() == 2){day.textContent = "Tuesday"}
            if(date1.getDay() == 3){day.textContent = "Wednesday"}
            if(date1.getDay() == 4){day.textContent = "Thursday"}
            if(date1.getDay() == 5){day.textContent = "Friday"}
            if(date1.getDay() == 6){day.textContent = "Saturday"}
            date.textContent = date1.getDate() + "/" + (date1.getMonth()+1) + "/" + date1.getFullYear()
            apm.textContent = (date1.getHours() <= 12 ? "AM" : "PM")
        }
    else if(opt.value == opt2.value)
        { 
            hrs.textContent = (date1.getHours()%12) + " Hrs"
            min.textContent = date1.getMinutes() + " Mins"
            sec.textContent = date1.getSeconds() + " Secs"
            if(date1.getDay() == 0){day.textContent = "Sunday"}
            if(date1.getDay() == 1){day.textContent = "Monday"}
            if(date1.getDay() == 2){day.textContent = "Tuesday"}
            if(date1.getDay() == 3){day.textContent = "Wednesday"}
            if(date1.getDay() == 4){day.textContent = "Thursday"}
            if(date1.getDay() == 5){day.textContent = "Friday"}
            if(date1.getDay() == 6){day.textContent = "Saturday"}
            date.textContent = date1.getDate() + "/" + (date1.getMonth()+1) + "/" + date1.getFullYear()
            apm.textContent = (date1.getHours() <= 12 ? "AM" : "PM")
        }
    else if(opt.value == opt3.value)
        {
            hrs.textContent = "Hours"
            min.textContent = "Minutes"
            sec.textContent = "Seconds"
            apm.textContent = "AM/PM"
            day.textContent = "Day"
            date.textContent = "Date"
        }
}, 1000);
});