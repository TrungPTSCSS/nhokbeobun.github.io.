let tab__title=document.querySelectorAll('.New__tab-title a');
tab__title.forEach((e,i)=>{
    e.addEventListener('click',function(a){
        a.preventDefault();
        document.querySelector('.New__tab-title .active').classList.remove('active');
        e.classList.add('active');

        // let content=document.querySelector('.New__tab-content > *:nth-child('+(i+1)+')');
        let content=document.querySelectorAll('.New__tab-content > *')[i];
        let c=document.querySelector('.New__tab-content .active');
        c.classList.remove('active');
        c.style.display='none';
        content.classList.add('active');
        content.style.display='block';
        console.log(content);
    })
})

let tab=document.querySelectorAll('.containerr a');
tab.forEach(function(e,i){
    e.addEventListener('click',function(a){
        a.preventDefault();
        document.querySelector('.containerr .active').classList.remove('active');
        e.classList.add('active');

        let cont=document.querySelectorAll('new-content >*')[i];
        let c=document.querySelector('.new-content .active');
        c.classList.remove('active');
        c.style.display='none';
        cont.classList.add('active');
        cont.style.display='block';
        console.log(content);

    })

    // e.on('click',function(a){
    //     console.log('ok');
    //     a.preventDefault();
    // })
})

