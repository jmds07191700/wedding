// Add your javascript here
// Don't forget to add it into respective layouts where this js file is needed
$(document).ready(function () {
    $("#map-image").on("click")
    {

    }

    $('#go-to-top').click(function () {
        $('html,body').animate({scrollTop: 0}, 400);
        return false;
    });

    $(".gift-send").click(function () {
        $("#gift-name").text($(this).data("name"));
    })


    $("#reserveGiftButton").click(function () {
        let name = $("#sender-name").val();
        let message = $("#sender-message").val();
        $("#reserveGiftButton").text("전송중...");
        $("#reserveGiftButton").prop("disabled", true);

        emailjs.init("user_yjLL5xG0A3kkOCH5BGIDh");
        emailjs.send("wedding-mail", "gift_send", {
            name: name,
            gift: $("#gift-name").text(),
            message: message
        }).then(function (response) {
            $('#giftMailModal').modal('hide');
            alert(name + "님의 메시지가 정상적으로 전송되었습니다.");

            $("#reserveGiftButton").text("예약하기!");
            $("#sender-name").val('');
            $("#sender-message").val('');
            $("#reserveGiftButton").prop("disabled", false);
        }, function (err) {
            alert("메시지 전송이 실패했습니다. 다시 시도해주세요.");
        });
    })
})

// Smooth scroll for links with hashes
$("a.smooth-scroll").click(function (event) {
    // On-page links
    if (
        location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
    ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
        // Does a scroll target exist?
        if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $("html, body").animate(
                {
                    scrollTop: target.offset().top
                },
                1000,
                function () {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) {
                        // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    }
                }
            );
        }
    }
});
// var $target = document.querySelector('#type p');
// $target.addEventListener('th.afterType', function (e) {
// });
//     TypeHangul.type('#type p');


  // 실행

  // TypeHangul을 이용해 각 <p> 태그에 순차적으로 타이핑 효과 적용
  $(document).ready(function () {
    const $paragraphs = $("#type p"); // #type 안의 모든 <p> 태그 가져오기
  
    function applyTypeHangul($element) {
      return new Promise((resolve) => {
        const typeInstance = new TypeHangul($element.get(0), { // jQuery 객체를 DOM 객체로 변환
          intervalType: 100, // 글자 출력 간격 (ms)
          intervalDelay: 500, // 한 문장 간 대기 시간
        });
  
        // 타이핑 효과 실행 및 완료 후 resolve 호출
        typeInstance.run(() => {
          resolve(); // 다음 작업 진행
        });
      });
    }
  
    async function startTyping() {
      for (let i = 0; i < $paragraphs.length; i++) {
        await applyTypeHangul($($paragraphs[i])); // 각 <p> 태그에 타이핑 효과 적용
      }
    }
  
    startTyping(); // 타이핑 효과 시작
  });

  console.log("TypeHangul 실행 시작:", $element.text());

  