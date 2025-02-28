let input = document.getElementById("input")
let list = document.getElementById("list")


        let check = "on";

        i1.addEventListener("change",()=>
            {
                let i1 = document.getElementById("i1")
                let del = document.createElement("button")
                let box = document.createElement("input")
                let para = document.createElement("p")
                
                box.style.display = "inline"
                box.type = "checkbox"
                list.append(box)
                box.addEventListener("click",()=>{
                    if(check == "on")
                        {
                            para.style.textDecoration = "line-through"
                            check = "off"
                        }
                        else {
                            para.style.textDecoration = "none"
                            check = "on"
                        }
                })
        
               
                para.style.display = "inline"
                para.style.marginLeft = "4px"
                para.textContent = i1.value
                list.append(para)
        
                
                del.style.display = "inline"
                del.style.marginLeft = "8px"
                del.textContent = "Delete"  
                list.append(del)
                i1.value = " ";
                del.addEventListener("click",()=>{
                    list.addEventListener("click",(element)=>{
                        element.currentTarget.remove()
        
                    })
                })

                let brk = document.createElement("br")
                list.append(brk)

                
        
            })