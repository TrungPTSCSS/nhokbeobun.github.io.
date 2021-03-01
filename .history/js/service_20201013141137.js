$(window).on('load',function(){
  $('.loading').fadeOut(1000)
//   initPhotoSwipeFromDOM('.carousel-img')
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





function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}

$('.btn-send').on('click',function(){
  let name=$('#name').val(),
      phone=$('#phone').val(),
      email=$('#email').val(),
      address=$('#address').val();
  //Tên
  if(name == ""){
      $('.name input').addClass('error')
      $('.name p').text('Vui lòng nhập tên đêii')
      //console.log('Vui lòng nhập tên đêii')
  }else{
      if(name < 5)
      {
          $('.name input').addClass('error')
          $('.name p').text('Nhập đầy đủ họ tên nhé!')
      //console.log('Nhập đầy đủ họ tên nhé!')
      }
      else{
          $('.name input').removeClass('error')
          $('.name p').text('')
      }
  }
  //Điện thoại
  if(phone == ""){
      $('.phone input').addClass('error')
      $('.phone p').text('Nhập đầy đủ sđt đêii!')
      //console.log('Vui lòng nhập sđt đêii')
  }else{
      if(phone < 10)
      {
          $('.phone input').addClass('error')
          $('.phone p').text('Nhập đầy đủ sđt nhé!')
      //console.log('Nhập đầy đủ sđt nhé!')
      }
      else{
          $('.phone input').removeClass('error')
          $('.phone p').text('')
      }
  }
  //Mail
  if(!isEmail(email)){
      $('.email input').addClass('error')
      $('.email p').text('Vui lòng nhập đúng email')
      //console.log('Vui lòng nhập đúng email')
  }
  else{
      $('.email input').removeClass('error')
      $('.email p').text('')
  }

  //COntact
  if(address == ""){
      $('.address input').addClass('error')
      $('.address p').text('Vui lòng nhập contact đêii')
      //onsole.log('Vui lòng nhập contact đêii')
  }
  else{
      $('.address input').removeClass('error')
      $('.address p').text('')
  }



  if($('.contact-decrip input').hasClass('error')==false){
      setTimeout(function(){
          alert('Done!')
      }, 1)
  }
})