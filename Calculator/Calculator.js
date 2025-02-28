let v1 = document.getElementById("V1")
let v2 = document.getElementById("V2")



let add = document.getElementById("add")
let sub = document.getElementById("sub")
let mul = document.getElementById("mul")
let div = document.getElementById("div")
let main = document.getElementById("main")
let result = document.getElementById("result")


add.addEventListener("click",()=>{
     
     main.style.display = "none"
     result.style.display = "inline-block"
     let h1res = document.getElementById("h1res")
     let a = v1.value
     let b = v2.value
     h1res.textContent = "Result: " + (Number(a)+Number(b))
},false)


sub.addEventListener("click",()=>{
    main.style.display = "none"
    result.style.display = "inline-block"
    let h1res = document.getElementById("h1res")
    let a = v1.value
    let b = v2.value
    h1res.textContent = "Result: " + (Number(a)-Number(b))
},false)


mul.addEventListener("click",()=>{
    main.style.display = "none"
    result.style.display = "inline-block"
    let h1res = document.getElementById("h1res")
    let a = v1.value
    let b = v2.value
    h1res.textContent = "Result: " + (Number(a)*Number(b))
},false)


div.addEventListener("click",()=>{
    main.style.display = "none"
    result.style.display = "inline-block"
    let h1res = document.getElementById("h1res")
    let a = v1.value
    let b = v2.value
    h1res.textContent = "Result: " + (Number(a)/Number(b))
},false)