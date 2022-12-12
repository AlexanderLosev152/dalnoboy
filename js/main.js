      var swiper = new Swiper(".swiper", {
        slidesPerView: 3,
        spaceBetween: 25,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        mousewhell: true,
        keyboard: true,
      });

      // // // кнопка прикрепить тз
      // // window.onload = () => {

      // //   const uploadFile = document.getElementById("upload__file");
      // //   const uploadBtn = document.getElementById("upload__btn");
      // //   const uploadText = document.getElementById("upload__text");

      // //   // имитация клика
      // //   uploadBtn.addEventListener('click', function () {
      // //     uploadFile.click();
      // //   })
      // // }



      // // кнопка Добавьте фото товара
      // window.onload = () => {

      //   const uploadFotoFile = document.getElementById("upload__foto-file");
      //   const uploadFotoBtn = document.getElementById("upload__foto-btn");
      //   const uploadFotoText = document.getElementById("upload__foto-text");

      //   // имитация клика
      //   uploadFotoBtn.addEventListener('click', function () {
      //     uploadFotoFile.click();
      //   })
      // }      