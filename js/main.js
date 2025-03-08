
// const text = "안녕하세요 한덕수 박정민 인사드립니다. 지금부터 모바일 청첩장 시작합니다."; // 타이핑할 문구
// let index = 0;
// let speed = 100; // 글자 타이핑 속도 (밀리초 단위)

// function typeWriter() {
//   if (index < text.length) {
//     document.getElementById("type").textContent += text.charAt(index);
//     index++;
//     setTimeout(typeWriter, speed);
//   }
// }

// typeWriter();

$(document).ready(function() {
    $(window).scroll( function(){
        $('.content').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1','margin-bottom':'0px'},1000);
            }
            
        }); 
    });
});

