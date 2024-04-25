import "/src/scss/style.scss";
import "./slick";

$(document).ready(function () {
  $(".gallary__list").slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
  });
});
