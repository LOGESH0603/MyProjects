let res;
let count = 0;
console.log(count)
let head = document.getElementById("head")
let start = document.getElementById("start")
let pause = document.getElementById("pause")

start.addEventListener("click", start1);
    
    function start1()
    {
        res = setInterval(() => {
            head.textContent = "Wait for " + ++count + " seconds..."
            pause.style.display = "none" 
            start.removeEventListener("click", start1)
           if(count == 11)
            {
                alert("Get to the Photography...")
                window.location.href = "https://pixabay.com/"
            }
        }, 1000);
    }

let stop = document.getElementById("Stop")
stop.addEventListener("click", stop1);

    function stop1()
    {
       
        clearInterval(res);
        if(count < 11)
            {
                head.textContent = `Windows will be launched in ${10-count} seconds..`
                pause.style.display = "inline-block" 
            }
            start.addEventListener("click", start1);
    }

