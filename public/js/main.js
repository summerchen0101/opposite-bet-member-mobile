
$(document).ready(function () {
    // 輪撥圖
    var swiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        spaceBetween: 0,
        speed: 500,
        autoplay: {
            delay: 3000,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
    // footer 選單開關
    $('.footer ul li').click(function () {
        $('.footer ul li').removeClass("active");
        $(this).addClass("active");
    });

    // input清除按钮
    $(".btn_cancel").click(function () {
        jQuery(this).parent().find(".form-input").val("");
        $(this).hide();
    });

    $(".form-input").keyup(function () {
        var remove = jQuery(this).parent().find(".form-input");
        if (remove.val()) {
            remove.parent().find(".btn_cancel").show();
        } else {
            remove.parent().find(".btn_cancel").hide();
        }
    });

    // input眼睛按鈕
    $(document).on('click', '.btn_eye', function () {
        $(this).toggleClass("iconeye-show iconeye-close");
        var input = jQuery(this).parent().find("input");
        if (input.attr("type") == "text")
            input.attr("type", "password");
        else
            input.attr("type", "text");
    });

    // scroll 加Class固定屬性
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 185) {

            $(".teaminfo-section").addClass("scroll");
            $(".nav-tabs").addClass("fixed");
            $("notice-section").hide;
        } else {

            $("notice-section").show;
            $(".teaminfo-section").removeClass("scroll");
            $(".nav-tabs").removeClass("fixed");
        }
    });

    // 個人資料修改 Slide up
    $('.nickname').on('click', function () {
        $('.mask').fadeIn();
        $('#nickname-edit').addClass("slide-up");
        // console.log("11111");
    });
    $('.name').on('click', function () {
        $('.mask').fadeIn();
        $('#name-edit').addClass("slide-up");
    });
    $('.email').on('click', function () {
        $('.mask').fadeIn();
        $('#email-edit').addClass("slide-up");
    });
    $('.tel').on('click', function () {
        $('.mask').fadeIn();
        $('#tel-edit').addClass("slide-up");
    });
    $('.login-pw').on('click', function () {
        $('.mask').fadeIn();
        $('#login-pw-edit').addClass("slide-up");
    });
    $('.wechat').on('click', function () {
        $('.mask').fadeIn();
        $('#wechat-edit').addClass("slide-up");
    });
    $('.qq').on('click', function () {
        $('.mask').fadeIn();
        $('#qq-edit').addClass("slide-up");
    });
    $('.bank-card').on('click', function () {
        $('.mask').fadeIn();
        $('#bank-card-edit').addClass("slide-up");
    });
    $('.withdrawal-pw').on('click', function () {
        $('.mask').fadeIn();
        $('#withdrawal-pw-edit').addClass("slide-up");
    });

    $('.close_btn, .mask, .remove-slide').on('click', function () {
        $('.mask').fadeOut();
        $('.slide-up-section').removeClass("slide-up");
    });
    // 語系選擇
    $('.lang-select').on('click', function () {
        $('.mask').fadeIn();
        $('#lang-select').addClass("slide-up");
    });

    // 站內信
    $('.message-edit').on('click', function () {
        $('.mask').fadeIn();
        $('#message-edit').addClass("slide-up");
    });

    $('.message-seen').on('click', function () {//全部已讀
        if (!$('.message-item').is("123")) {
            $(".message-item").addClass("seen");
            $(".message-item .iconfont").removeClass("iconmail").addClass("iconmail-open");
        }
    });

    $('.message-edit_btn').on('click', function () {//編輯站內信
        $('.message-item >.message-select').show();
    });
    // 比賽結果--摺疊選單
    $('.result-title').on('click', function (e) {
        if (jQuery(e.target).is('.show')) {
            jQuery(this).removeClass('show');
            jQuery(this).parent().find('.result-content').slideUp(300);
        }
        else {
            jQuery(this).addClass('show').parent().find('.result-content').slideDown(300);
        }
        e.preventDefault();
    });
    // 明細--摺疊選單
    $('.detail-item').on('click', function (e) {
        if (jQuery(e.target).is('.show')) {
            jQuery(this).removeClass('show');
            jQuery(this).find(".detail-content").hide();
        }
        else {
            jQuery(this).addClass('show').find('.detail-content').show();
        }
        e.preventDefault();
    });

    $(document).on('click', '.detail-content', function () {
        var item = jQuery(this).parents().find(".detail-item");
        console.log("000");
        if (item.is('.show')) {
            item.find('.detail-content').hide();
            item.removeClass('show');
        }
    });

    // checkbox全選
    $(document).ready(function () {
        $("#checkall").click(function () {
            if ($("#checkall").prop("checked")) {
                $("input[name='Checkbox[]']").prop("checked", true);
            } else {
                $("input[name='Checkbox[]']").prop("checked", false);
            }
        })
    });
    // 彈跳視窗背景滾動修正
    $('body').on('hide.bs.modal', 'div.modal[role]', function (e) {
        var len = $('div.modal[role]').length;
        if (len > 1) {
            setTimeout(function () {
                $('body').addClass('modal-open');
            }, 300);
        }
    });

});