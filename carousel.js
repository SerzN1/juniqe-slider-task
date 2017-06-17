// TODO; add namespace, add template params, add factory for multi selectors, add class names params

// data loader
function dataLoader(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.onreadystatechange = function () {
    if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      var responseJson = JSON.parse(xhr.responseText);
      callback(responseJson);
    }
  };
  xhr.send();
}

// createElement
function createElement(tag, className, container, html) {
  var el = document.createElement(tag);
  el.className = className;
  html && (el.innerHTML = html);
  container.appendChild(el);
  return el;
}

// pager
function Pager(opts) {
  this.o = opts;
  this.init();
}
Pager.prototype = {
  init: function () {
    this.el = createElement('UL', this.o.className, this.o.container);
    this.render();
    this.bindEvents();
  },
  setActive: function (active) {
    this.o.active = active;
    this.render();
  },
  bindEvents: function () {
    var _this = this;
    this.handleClick = function (e) {
      var element = e.target;
      var page = element.getAttribute('data-page');
      page && _this.o.callback(Number(page));
    };
    this.el.addEventListener('click', this.handleClick);
  },
  render: function () {
    var pages = '';
    for (var i = 0; i < this.o.count; i += 1) {
      pages += '<li data-page="' + i + '" class="' + (this.o.active === i ? 'active' : '') + '">' + (i + 1) + '</li>';
    }
    this.el.innerHTML = pages;
  },
  destroy: function () {
    this.el.removeEventListener('click', this.handleClick);
    this.el = null;
  }
};

// carousel
function Carousel (options) {
  this.options = {
    selector: options.selector || '#carousel',
    apiEndpoint: options.apiEndpoint || '',
    itemsData: options.itemsData || [],
    useArrows: true,
    usePager: true,
    animationTime: 600,
    ns: '',
    renderCarouselItem: options.renderCarouselItem || this.renderCarouselItem
  };
  this.el = document.querySelector(this.options.selector);
  this.state = {
    active: options.currentSlide || 0,
    animating: false,
    activeSlide: null,
    nextSlide: null
  };

  var endpoint = this.options.apiEndpoint;
  if (endpoint) {
    dataLoader(endpoint, this.prepareDataAndInit.bind(this));
  } else {
    this.init();
  }
}
Carousel.prototype = {
  prepareDataAndInit: function (data) {
    this.options.itemsData = data;
    this.init();
  },
  init: function () {
    this.slides = {};
    this.slidesCount = this.options.itemsData && this.options.itemsData.length;

    if (this.slidesCount) {
      this.createCarousel();
    } else {
      throw new Error('no items found');
    }
  },
  createCarousel: function () {
    if (this.slidesCount > 1) {
      this.options.itemsData.forEach(this.createSlide.bind(this));

      if (this.options.usePager) {
        this.pager = new Pager({
          container: this.el,
          callback: this.setSlide.bind(this),
          className: 'carousel_navigation',
          active: this.state.active,
          count: this.slidesCount
        });
      }

      this.options.useArrows && this.createArrows();
    } else {
      this.createSlide(this.options.itemsData[0], 0);
    }
  },
  setSlide: function (index) {
    if (this.state.animating || index === this.state.active) return;
    this.animateSlides(index, this.state.active);
    this.pager && this.pager.setActive(index);
    this.state.active = index;
  },
  animateSlides: function (newIndex, oldIndex) {
    var _this = this;
    var side = 'rtl';
    this.state.animating = true;
    if (newIndex < oldIndex) {
      side = 'ltr';
    }
    this.slides[newIndex].className = 'carousel_item next ' + (side === 'rtl' ? 'right' : 'left');
    setTimeout(function () {
      _this.slides[oldIndex].className = 'carousel_item active ' + (side === 'rtl' ? 'left' : 'right');
      _this.slides[newIndex].className = 'carousel_item next';
    }, 0);
    setTimeout(function () {
      _this.removeSetArtifacts(newIndex, oldIndex);
    }, _this.options.animationTime);
  },
  removeSetArtifacts: function (newIndex, oldIndex) {
    this.slides[oldIndex].className = 'carousel_item';
    this.slides[newIndex].className = 'carousel_item active';
    this.state.animating = false;
  },
  createArrows: function () {
    var _this = this;
    var prevArrow = createElement('DIV', 'carousel_arrow carousel_arrow__prev', this.el);
    var nextArrow = createElement('DIV', 'carousel_arrow carousel_arrow__next', this.el);

    this.prevSlide = function(e) {
      e.preventDefault();
      var prevIndex = _this.state.active - 1;
      var prev = prevIndex < 0 ? (_this.slidesCount - 1) : prevIndex;
      _this.setSlide(prev);
    };
    this.nextSlide = function (e) {
      e.preventDefault();
      _this.setSlide((_this.state.active + 1) % _this.slidesCount);
    };

    prevArrow.addEventListener('click', this.prevSlide);
    nextArrow.addEventListener('click', this.nextSlide);
  },
  renderCarouselItem: function (slideData) {
    return "<a class='carousel_link' href='" + slideData.url + "'>" +
        "<img class='carousel_image' src='" + slideData.image_url + "' />" +
        "<div class='carousel_slide_price'>" + slideData.price + ' ' + slideData.price_currency_code + "</div>" +
        "<div class='carousel_slide_title'>" +
          slideData.name +
          "<span>" + slideData.description + "</span>" +
        "</div>" +
      "</a>";
  },
  createSlide: function (slideData, slideIndex) {
    var className = slideIndex === this.state.active ? 'carousel_item active' : 'carousel_item';
    this.slides[slideIndex] = createElement('DIV', className, this.el, this.options.renderCarouselItem(slideData));
    this.slides[slideIndex].style.transition = 'transform ' + this.options.animationTime + 'ms ease-in-out';
  },
  destroy: function () {
    this.prevArrow.removeEventListener('click', this.prevSlide);
    this.nextArrow.removeEventListener('click', this.nextSlide);
    this.prevArrow = null;
    this.nextArrow = null;
    this.pager && this.pager.destroy();
    this.pager = null;
    this.el = null;
  }
};
