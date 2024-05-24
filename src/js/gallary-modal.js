import "./slick";

const gallaryList = document.querySelector(".gallary__list");
const gallaryModalList = document.querySelector(".gallary__modal-list");
const gallaryBackdrop = document.querySelector(".gallary__backdrop");
const closeBtn = document.querySelector(".modal__btn--close");
const loadingImage = document.querySelector(".loading-image-wrapper");

gallaryList.addEventListener("click", gallaryModalOpen);
gallaryBackdrop.addEventListener("click", closeModalHandler);

function showLoadingImage() {
  loadingImage.style.display = "block";
  gallaryModalList.style.display = "none";
}

function hideLoadingImage() {
  loadingImage.style.display = "none";
  gallaryModalList.style.display = "flex";
}

function createGallary() {
  $(document).ready(function () {
    $(".gallary__list").slick({
      infinite: true,
      slidesToShow: 6,
      lazyLoad: "progressive",
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 3,
          },
        },
      ],
    });
  });
}

function toggleModal() {
  gallaryBackdrop.classList.toggle("is-hidden");
  document.querySelector("body").style.overflow =
    document.querySelector("body").style.overflow === "hidden"
      ? "auto"
      : "hidden";
}

function gallaryModalOpen(e) {
  if (e.target.nodeName !== "IMG") {
    return;
  }
  showLoadingImage();
  $(document).ready(function () {
    $(".gallary__modal-list")
      .on("init", function () {
        hideLoadingImage();
      })
      .slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: "progressive",
        initialSlide: e.target.dataset.id - 1,
      });
  });
  $(".gallary__modal-list").show();
  window.addEventListener("keydown", escKeyHandler);
  toggleModal(gallaryBackdrop);
}

function escKeyHandler(e) {
  if (e.code === "Escape") {
    toggleModal();
    window.removeEventListener("keydown", escKeyHandler);
    $(".gallary__modal-list").hide();
    $(".gallary__modal-list").slick("unslick");
  }
}

function closeModalHandler(e) {
  if (e.target.nodeName === "BUTTON") {
    return;
  }
  if (
    e.target.nodeName !== "IMG" ||
    e.target === closeBtn ||
    e.target.nodeName === "svg" ||
    e.target.nodeName === "use"
  ) {
    window.removeEventListener("keydown", escKeyHandler);
    toggleModal();
    $(".gallary__modal-list").hide();
    $(".gallary__modal-list").slick("unslick");
  }
}

createGallary();
