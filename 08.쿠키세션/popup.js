

var check = document.querySelector(".check");


check.addEventListener("click", function () {

    if (check.checked) {

        var date = new Date();

        var date2 = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
        document.cookie = "mainPopup=" + check.checked + "; path=/; expires=" + date2.toUTCString();
        window.close();
    }
})

//setCookie, getCookie메서드를 만들어서도 가능. 
//매개변수를 받는 식으로 getter를 만들면 여러 이벤트 or 함수에서도 쿠키사용이 가능해진다