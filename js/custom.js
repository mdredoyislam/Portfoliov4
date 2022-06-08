// navbar bar
$('.navbar-toggler').click(function () {
    $('.navbar-toggler').toggleClass('myJbar')
})
// VenoBox
new VenoBox({
    selector: ".my-image-links"
});
$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('.navbar').addClass("sticky-header");
    } else {
        $('.navbar').removeClass("sticky-header");
    }
});
//    Type js
var typed3 = new Typed('#typeStyle', {
    strings: ['Web Designer.', 'Web Developer.', 'Professional Coder.', 'WordPress Developer.'],
    typeSpeed: 50,
    backSpeed: 0,
    startDelay: 100,
    loop: true,
    shuffle: true,
    smartBackspace: false,
});
// BAck to top
$("#toTop").click(function () {
    $("html, body").animate({
        scrollTop: 0
    }, 1000);
});
// testi-slider
$('.testi-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,
});
//   misit Up
var containerEl = document.querySelector('.port-main');

var mixer = mixitup(containerEl);

// Counter Js
$('.couter').counterUp({
    delay: 10,
    time: 2500,
});
// Form Validation
var fname = document.getElementById('fname')
var name_error = document.getElementById('name_error')

var number = document.getElementById('number')
var number_error = document.getElementById('number_error')

var mail = document.getElementById('mail')
var mail_error = document.getElementById('mail_error')
var mail_rejax = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
var subject = document.getElementById('subject')
var subject_error = document.getElementById('subject_error')




function formvalid() {
    if (fname.value == '') {
        name_error.innerHTML = 'Please enter your name !'
        fname.focus()
        return false
    } else if (number.value == '') {
        number_error.innerHTML = 'please enter you number !'
        number.focus()
        return false
    }else if (mail.value == '') {
        mail_error.innerHTML = 'please enter you email !'
        mail.focus()
        return false
    }else if (!mail_rejax.test(mail.value)) {
        mail_error.innerHTML = 'Incorrect email  !'
        mail.focus()
        return false
    }else if (subject.value == '') {
        subject_error.innerHTML = 'Please! Tell me What you want to say'
        subject.focus()
        return false
    }
}

function valid(){
    if(fname.value != ''){
        name_error.innerHTML = ''
    }
    if(number.value != ''){
        number_error.innerHTML = '' 
    }
    if(mail.value != ''){
        mail_error.innerHTML = ''  
    }
    if(subject.value != ''){
        subject_error.innerHTML = ''
    }
}
fname.addEventListener('blur', valid)
number.addEventListener('blur', valid)
mail.addEventListener('blur', valid)
subject.addEventListener('blur', valid)