$(document).ready(function(){
    $('.carousel').slick({
        dots: true,
        arrows: true
    });
    console.log('jquery')

    $("#contactForm").submit(function(e){
        e.preventDefault();

        var form = $(this)
        var actionUrl = form.attr('action')

        $('.contactSection').append('<div id="contactSuccess"><div><i class="ri-checkbox-circle-line"></i></div><p>Thanks! your message has been sent. We will be in contact with you very soon.</p></div>')

    })

    $('#contactSuccess').on('click', function(){
        console.log('clicked')
        $('#contactSuccess').remove()
    })
});