(function () {
  "use strict";

  ymaps.ready(init);

  var myMap, myPlacemark;

  function init() {
    myMap = new ymaps.Map("map", {
      center: [59.939523, 30.329727],
      behaviors: ['default', 'scrollZoom'],
      zoom: 16
    });
    myMap.controls
      .add('zoomControl', {
        left: 5,
        top: 5
      })
    myPlacemark = new ymaps.Placemark([59.938631, 30.323055], {
      balloonContent: 'ул. Большая Конюшенная 19/8'
    }, {
      iconImageHref: 'img/map-tag.png',
      iconImageSize: [80, 140],
      iconImageOffset: [-40, -140]
    });
    myMap.geoObjects
      .add(myPlacemark);
  }
}());

(function () {
  "use strict";

  var modalFeedback, modalFeedbackOpen, modalFeedbackClose, modalWrap, inputs;

  modalFeedback = document.querySelector(".js-modalFeedback");
  modalFeedbackOpen = document.querySelector(".js-modalFeedbackOpen");
  modalFeedbackClose = document.querySelector(".js-modalFeedbackClose");
  modalWrap = document.querySelector(".js-modalWrap");
  inputs = modalFeedback.querySelectorAll("[name]");

  modalFeedbackOpen.addEventListener("click", function (event) {
    event.preventDefault();
    modalWrap.classList.add("wrap-show");
    modalFeedback.classList.add("modal-show");
    inputs[0].focus();
  }, false);

  modalFeedbackClose.addEventListener("click", function (event) {
    event.preventDefault();
    modalFeedback.classList.remove("modal-show");
    modalFeedback.classList.remove("modal-error");
    modalWrap.classList.remove("wrap-show");
  }, false);

  modalWrap.addEventListener("click", function (event) {
    event.preventDefault();
    modalFeedback.classList.remove("modal-show");
    modalFeedback.classList.remove("modal-error");
    modalWrap.classList.remove("wrap-show");
  }, false);

  window.addEventListener("keydown", function (event) {
    if (event.keyCode === 27) {
      event.preventDefault();
      if (modalFeedback.classList.contains("modal-show") || modalMap.classList.contains("modal-show")) {
        modalMap.classList.remove("modal-show");
        modalMap.classList.remove("modal-error");
        modalFeedback.classList.remove("modal-show");
        modalFeedback.classList.remove("modal-error");
        modalWrap.classList.remove("wrap-show");
      }
    }
  }, false);

  modalFeedback.addEventListener("submit", function (event) {
    var i, input;
    for (i = inputs.length - 1; i >= 0; i--) {
      input = inputs[i];
      if (!input.value) {
        event.preventDefault();
        modalFeedback.classList.remove("modal-error");
        modalFeedback.offsetWidth;
        modalFeedback.classList.add("modal-error");
        input.focus();
      }
    }
  }, false);

}());

(function () {
  "use strict";
  var elements, i, length;

  function setElement(element) {
    var name = element.getAttribute("name");
    element.value = localStorage.getItem(name) || "";
    element.addEventListener("keyup", function (event) {
      event.preventDefault();
      localStorage.setItem(name, element.value);
    }, false);
  }
  if (window.localStorage) {
    elements = document.querySelectorAll("[name]");
    for (i = 0, length = elements.length; i < length; i = i + 1) {
      setElement(elements[i]);
    }
  }

}());

(function () {
  "use strict";

  var sliderSwitches, sliderItems;

  sliderSwitches = document.querySelector(".js-sliderSwitches");
  sliderItems = document.querySelector(".js-sliderItems");

  function slideSwitch(node, index) {
    var i;
    i = 0;
    for (i; i < sliderSwitches.children.length; i = i + 1) {
      sliderSwitches.children[i].classList.remove('slider-controls__item--active');
      sliderItems.children[i].classList.remove('slider-item--active');
    }
    node.classList.add('slider-controls__item--active');
    sliderItems.children[index].classList.add('slider-item--active');
  }

  function slideIndex(node) {
    var i, index, siblings;
    i = 0, index = 0, siblings = node.parentElement.children;
    for (i; i < siblings.length; i = i + 1) {
      if (siblings[i] == node) {
        index = i;
      }
    }
    return index;
  }

  sliderSwitches.addEventListener("click", function (event) {
    event.preventDefault();
    var target;
    target = event.target;
    while (target != sliderSwitches) {
      if (target.classList.contains("slider-controls__item")) {
        slideSwitch(target, slideIndex(target));
        return;
      }
      target = target.parentNode;
    }
  }, false);

}());
