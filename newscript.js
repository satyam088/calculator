const numBtn = document.querySelectorAll(".same");
const res = document.querySelector("#res");
const clear = document.querySelector("#clear");
const main = document.querySelector("#main");
// console.log(numBtn);
const numbers = ['0','1','2','3','4','5','6','7','8','9'];
const operators = ['+','-','*','/'];
function calculate(){
    let stringToBeclaculated = res.textContent;
    try{
        let ans = math.evaluate(res.textContent);
        res.textContent = ans;
    }catch(err){
        res.textContent= 0;
        const p = document.createElement('p');
        p.textContent= "Expression is Invalid";
        p.style.color = 'red';
        p.style.paddingTop = '20px';
        main.append(p);
        let timeout = setTimeout(()=>{
            p.remove();
            clearTimeout(timeout);
        },3000);
    }
}
function addListners(){
    Array.from(numBtn).forEach((btn)=>{
        if(btn.textContent!=='='){    
            btn.addEventListener('click',function (dets){
                console.log(this.textContent);
                if(res.textContent==0)
                    res.textContent = this.textContent;
                else
                    res.textContent+= this.textContent;
            });
        }else{
            // calls calculate function
            btn.addEventListener('click',calculate);
        }
    });
    // for clearing the result ;
    clear.addEventListener('click',function(e){
        res.textContent = 0;
        console.log("cleared");
    });
    // to take values from keyboard
    window.addEventListener('keydown',(dets)=>{
        // console.log(dets);
        if(numbers.includes(dets.key)){
            if(res.textContent==0)
                res.textContent = dets.key;
            else
                res.textContent+= dets.key;
        }else if(operators.includes(dets.key)){
            if(res.textContent!=0){
                res.textContent+=dets.key;
            }
        }
        if(dets.key =='Backspace')
            if(res.textContent.length == 1)
                res.textContent=0;
            else 
                res.textContent = res.textContent.substring(0, res.textContent.length -1);
        if(dets.key=='Enter'){
            calculate();
        }
        
    });
}
addListners();