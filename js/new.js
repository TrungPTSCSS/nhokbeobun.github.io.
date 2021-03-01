$(window).on('load',function(){
  $('.loading').fadeOut(1000)
//   initPhotoSwipeFromDOM('.carousel-img')
})


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

        let content=document.querySelectorAll('.new-content > *')[i];
        let c=document.querySelector('.new-content .active');
        c.classList.remove('active');
        c.style.display='none';
        content.classList.add('active');
        content.style.display='block';
        console.log(content);

    })

    // e.on('click',function(a){
    //     console.log('ok');
    //     a.preventDefault();
    // })
})

let inn=$('.slider-menu');
inn.on('click',function(){
  $('.slider-menu-hidden').addClass('open')
  $('.overlay').fadeIn();
  $('.main').addClass('push');

})

let outt=$('.sli-icon-x');
outt.on('click',function(){
  $('.slider-menu-hidden').removeClass('open')
  $('.overlay').fadeOut();
  $('.main').removeClass('push');
  $('.nav-menu-span').removeClass('open')
})
let o=$('.nav-menu-span')
o.on('click',function(){
  o.toggleClass('open')
  $('.slider-menu-hidden').toggleClass('open')
  
})



// // scroll desktop
// let back=document.querySelector('.container .btt');
// back.addEventListener('click',function(){
//   window.scrollBy({
//     top:-document.body.offsetHeight,
//     behavior:"smooth"
//   })
// })

// scroll mobile
let icback=document.querySelector('.btt .btt-btop');
// let icback=$('.btt .btt-btop');
// window.on('scroll',function(){

// })
icback.addEventListener('click',function(){
  window.scrollBy({
    top:-document.body.offsetHeight,
    behavior:"smooth"
  })
})
function bt(){
  if(document.documentElement.scrollTop > 400){
    icback.style.display='block'
  }else{
    icback.style.display='none'
  }
}
bt()

window.addEventListener('scroll',bt)


window.addEventListener('scroll',function(){
  if(document.documentElement.scrollTop >200){
    document.querySelector('.header-fix').classList.add('fix')
  }else{
    document.querySelector('.header-fix').classList.remove('fix')
  }
})
$('.overlay').on('click',function(){
  $('.slider-menu-hidden').removeClass('open')
  $(this).fadeOut();
})