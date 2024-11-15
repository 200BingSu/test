window.addEventListener("load", function () {
  // gnb를 호버하면 layout을 늘릴건데,
  const gnb = document.querySelector(".gnb");
  const headerLayout = document.querySelector(".herader .layout");
  //   console.log(gnb);
  //   console.log(headerLayout);
  //마우스가 들어가면 gnb-active를 layout에 추가를 하고
  gnb.addEventListener("mouseenter", function () {
    headerLayout.classList.add("gnb-active");
  });
  //마우스가 나가면 gnb-active를 layout에서 빼겠다.
  gnb.addEventListener("mouseleave", function () {
    headerLayout.classList.remove("gnb-active");
  });
});
