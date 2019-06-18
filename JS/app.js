/*
 **********************************************************
 * OPAQUE NAVBAR SCRIPT
 **********************************************************
 */
// Toggle tranparent navbar when the user scrolls the page
$(window).scroll(function () {
    if ($(this).scrollTop() > 200)  /*height in pixels when the navbar becomes non opaque*/
    {
        $('.opaque-navbar').addClass('opaque');
    } else {
        $('.opaque-navbar').removeClass('opaque');
    }
});
var marginLeft = '0%', width = '16%';
$(document).ready(function () {
    $("#slideshow > div:gt(0)").hide();

    setInterval(function() {
        $('#slideshow > div:first')
            .fadeOut(1000)
            .next()
            .fadeIn(1000)
            .end()
            .appendTo('#slideshow');
    }, 3000);
    $("#slideshow_mob > div:gt(0)").hide();

    setInterval(function() {
        $('#slideshow_mob > div:first')
            .fadeOut(1000)
            .next()
            .fadeIn(1000)
            .end()
            .appendTo('#slideshow_mob');
    }, 3000);
    $('#myModal').on('hide.bs.modal', function () {
        $('#main_wrapper').removeClass('blur');
    });
    $('#myModal').on('show.bs.modal', function () {
        $('#main_wrapper').addClass('blur');
    });
    $('li').click(function () {
        $("#navMain").removeClass('in');
    });
    $('.two').hover(function () {
        $('#nav_line').css('margin-left', '20%');
        $('#nav_line').css('width', '26%');
    }, function () {
        $('#nav_line').css('margin-left', marginLeft);
        $('#nav_line').css('width', width);
    });
    $('.two').click(function () {
        $('#nav_line').css('margin-left', '20%');
        $('#nav_line').css('width', '26%');
        marginLeft = '20%';
        width = '26%';
    });
    $('.one').hover(function () {
        $('#nav_line').css('margin-left', '');
        $('#nav_line').css('width', '16%');
    }, function () {
        $('#nav_line').css('margin-left', marginLeft);
        $('#nav_line').css('width', width);
    });
    $('.one').click(function () {
        $('#nav_line').css('margin-left', '');
        $('#nav_line').css('width', '16%');
        marginLeft = '0%';
        width = '16%';
    });
    $('.three').hover(function () {
        $('#nav_line').css('margin-left', '51%');
        $('#nav_line').css('width', '19%');
    }, function () {
        $('#nav_line').css('margin-left', marginLeft);
        $('#nav_line').css('width', width);
    });
    $('.three').click(function () {
        $('#nav_line').css('margin-left', '51%');
        $('#nav_line').css('width', '19%');
        marginLeft = '51%';
        width = '19%';
    });
    $('.four').hover(function () {
        $('#nav_line').css('margin-left', '76%');
        $('#nav_line').css('width', '21%');
    }, function () {
        $('#nav_line').css('margin-left', marginLeft);
        $('#nav_line').css('width', width);
    });
    $('.four').click(function () {
        $('#nav_line').css('margin-left', '76%');
        $('#nav_line').css('width', '21%');
        marginLeft = '76%';
        width = '21%';
    });
    // setTimeout(function () {
    //     $('.gm-style-cc').children().eq(2).css('width', '');
    // }, 2000);
    window.sr = ScrollReveal();
    sr.reveal('.come-in');
    sr.reveal('#right_cu');
    sr.reveal('#middle_cu');
    sr.reveal('#left_cu');
    sr.reveal('#middle_child');
    sr.reveal('#about_us_box');
    sr.reveal('#foot');
    sr.reveal('#top_header');
    sr.reveal('#bottom_header');
    $('#myCarousel').carousel();
    // $('.nav_collapse').click(function () {
    //     $('.navbar-collapse').collapse('hide');
    //     $(this).addClass('active');
    //     $(this).css('color','grey');
    //     console.log("on click");
    // });
    $(document).on("scroll", onScroll);
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top + 2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function changeLine(e) {
    if (e.hasClass('active')) {
        // $(e).trigger('click');
        switch (e.attr('class').split(' ')[1]) {
            case "one":
                $('#nav_line').css('margin-left', '');
                $('#nav_line').css('width', '16%');
                marginLeft = '0%';
                width = '16%';
                break;
            case "two":
                $('#nav_line').css('margin-left', '20%');
                $('#nav_line').css('width', '26%');
                marginLeft = '20%';
                width = '26%';
                break;
            case "three":
                $('#nav_line').css('margin-left', '51%');
                $('#nav_line').css('width', '19%');
                marginLeft = '51%';
                width = '19%';
                break;
            case "four":
                $('#nav_line').css('margin-left', '76%');
                $('#nav_line').css('width', '21%');
                marginLeft = '76%';
                width = '21%';
                break;
        }
    }
}

function onScroll(event) {
    var scrollPos = $(document).scrollTop();
    $('#navMain a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#navMain ul li a').removeClass("active");
            currLink.addClass("active");
            // console.log(currLink);
            changeLine(currLink);
            // console.log("On scroll");
        }
        else {
            currLink.removeClass("active");
        }
    });
}
var arr;
$.getJSON("JS/modal.json",function(result){
    arr=result;
});
function modalTrigger(arg) {
    $('.modal-flex-container').empty();
    for(var i=0;i<arr[arg].length;i++){
        $('.modal-flex-container').append('<div class="product-flex-item module come-in modal-list">\n' +
            '<div class="product_desc modal-desc">'+arr[arg][i]["name"]+'</div>\n</div>');
    }
    $('.modal-title').html(arg);
    // $('.modal-body').html(json[arg]);
    $('#myModal').modal('show');
}
