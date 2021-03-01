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

let tab=$('.containerr a');
tab.forEach((e,i)=>{
    e.on('click',function(a){
        console.log('ok')
        a.preventDefault()
        $('.containerr .active').removeClass('active')
        a.addClass('active')
    })
    
})

