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


// scroll desktop
let back=document.querySelector('.container .btt');
back.addEventListener('click',function(){
  window.scrollBy({
    top:-document.body.offsetHeight,
    behavior:"smooth"
  })
})

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



$('.slider-wrap').flickity({
  // options
  cellAlign: 'left',
  contain: true,
  prevNextButtons: true,
  wrapAround:true,
  autoPlay:3000,
  on: {
    ready:function(){
      let dotted=$('.flickity-page-dots'),
          paging=('.slider-bottom .dotted')
          dotted.appendTo(paging);
    }
  //   ,
  //   change:function(index){
  //     let number=$('.slider1__bottom-paging .number')
  //     let indexPage=index+1
  //     number.text(indexPage.toString().padStart(2,0))
  //   }
  },
});