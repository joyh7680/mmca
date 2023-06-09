$(function(){
    
    // hamburger menu
    $('.header .btn-hamburger').click(function(e){
        e.preventDefault();
        $('.accodian-menu, .accodian-menu .btn-close').addClass('on');
        $('.header .btn-hamburger').addClass('off');
        $('body').addClass('hidden');
    })

    // accodian-menu
    $('.accodian-menu .btn-close').click(function(e){
        e.preventDefault();
        $('.accodian-menu, .accodian-menu .btn-close').removeClass('on');
        $('.header .btn-hamburger').removeClass('off');
        $('body').removeClass('hidden');
    })

    $('.accodian-menu .gnb-area a').click(function(e){
        e.preventDefault();
        $('.accodian-menu, .accodian-menu .btn-close').removeClass('on');
        $('.header .btn-hamburger').removeClass('off');
        $('body').removeClass('hidden');

        type=$(this).data('type');
        sec_top = $('.sc-'+type).offset().top;
        $('html,body').animate({scrollTop:sec_top}, 300);
    })

    // footer 
    footerMotion = gsap.timeline({
        scrollTrigger:{
            trigger:".footer",
            start:"0% 70%",
            end : "100% 100%",
            scrub : 1
        },
    })
        footerMotion
        .addLabel('a')
            .to('.footer .flex-area > * ',{
                y : 0,
                opacity : 1,
            },'a')
            .to('.footer .group-elements .elem01, .footer .group-elements .elem02, .footer .group-elements .elem03',{
                x : 0, y:0, z:0,
                opacity : 1,
            },'a')
            .from('.footer .footer-elem01',{
               rotateZ: 180,
            },'a')

    // modal 
    $('.modal').click(function(e){
        e.preventDefault();
        $('.sc-modal').addClass('on');
        $('body').addClass('hidden');
    })
    $('.sc-modal .btn-close, .sc-modal .bg-area').click(function(e){
        e.preventDefault();
        $('.sc-modal').removeClass('on');
        $('body').removeClass('hidden');
    })
})