document.addEventListener("DOMContentLoaded", () => {
    const contentBtn = document.getElementById("content-style");
    const leftBtn = document.getElementById("left");
    const rightBtn = document.getElementById("right");
    const upBtn = document.getElementById("up");
    const downBtn = document.getElementById("down");
    const centerBtn = document.getElementById("center");

    const contentPositions = (x, y, btn) => {
        contentBtn.style.left = `${x}px`
        contentBtn.style.top = `${y}px`
        contentBtn.innerHTML = btn.innerHTML
        contentBtn.style.transition = 'all 0.7s ease-in-out'
    }

    const rect = (btn) =>{
        const left = btn.getBoundingClientRect().left
        const top = btn.getBoundingClientRect().top
        const width = btn.getBoundingClientRect().width
        const height = btn.getBoundingClientRect().height

        if(btn == leftBtn){
           contentPositions(left - width + 50, top + height + 5,btn)
        //    console.log("left", left - width + 50, top + height + 5)
        }

        else if(btn == rightBtn){
            contentPositions(left + width + 80, top + height + 5,btn)
            // console.log("right", left + width + 100, top + height + 5)
        }
        else if(btn == upBtn){
            contentPositions(left + width, top - height + 20,btn)
            // console.log("up", left + width, top - height + 20)
        }

        else if(btn == downBtn){ 
            contentPositions(left + width + 5, top + height + 60,btn); 
            // console.log("down", left + width + 5, top + height + 60)
        }
        else{
            contentPositions(left + width, top + height + 5,btn)
            // console.log("center")
        }
    }

    leftBtn.addEventListener("click",  () =>{
        rect(leftBtn)
    })

    rightBtn.addEventListener('click', () =>{
        rect(rightBtn)
    })

    upBtn.addEventListener('click', () =>{  
        rect(upBtn)
    })

    downBtn.addEventListener('click', () =>{  
        rect(downBtn)
    })

    centerBtn.addEventListener('click', () =>{  
        rect(centerBtn)
    })

})
