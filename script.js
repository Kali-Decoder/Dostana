const first=document.querySelector("#first")
    const second=document.querySelector("#second")
    const btn=document.querySelector(".btn-dark");
    const result=document.querySelector(".result");
    btn.addEventListener('click',()=>{
        var i=0;
        if(first.value.trim()==='' || second.value.trim()==='')
        {
            alert("Enter Valid Input");
        }
        else{
            var r=Math.round(Math.random()*100);
        
        var id=setInterval(()=>{
                result.innerHTML=`${i}%`;
                if(i==r)
                {
                    clearInterval(id);
                }
                i++;

        },100);
        }
    })