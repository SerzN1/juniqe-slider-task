#Welcome to Juniqe test work

Vanilla JS carousel with data loaded from API

```js
var carousel = new Carousel({
  selector: '#carousel',
  apiEndpoint: '/products-list',
  currentSlide: 0
});
```

###Simple API
```js
setTimeout(function () {
  carousel.setSlide(3);
}, 1500);
```

###TODO:
+ add namespace
+ add template params
+ add factory for multi selectors 
+ add class names params

###SETUP
You need to have node and npm installed on your machince.

To start an app:
1) `npm install`
2) `node server.js`
3) open http://localhost:3000 in the browser