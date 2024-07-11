const input= document.querySelector('input');
let previousvalue='';
let firstthreeeno='';

    input.addEventListener("input",()=>{

        if(input.value.length === 4 && previousvalue.length<input.value){
           let aaaa= input.value.slice(0,3);
           firstthreeeno=aaaa
           let  chnage= `+(${aaaa}) -${input.value[input.value.length-1]}`
           input.value=chnage;
        }
    
        else if(input.value.length===7 && previousvalue.length>input.value.length){
            input.value=firstthreeeno
        }
    
        previousvalue=input.value;
    
    
    })
    



