var express = require('express')
var app = express()

app.use(express.static('./'))

app.get('/products-list', function (req, res, next) {
  res.send([
    {
      'name': 'All You Need Is Love - Women\'s TShirt V-Neck',
      'price': 28.9,
      'url': 'https://www.juniqe.com/all-you-need-is-love-womens-t-shirt-v-neck-n10-258206.html',
      'product_id': '258206',
      'image_url': 'https://rndr.juniqe.com/media/catalog/product/cache/x310/34/19/34-19-N10-white-0-front-1.jpg',
      'price_currency_code': 'CHF',
      'availability': 'InStock',
      'category': 'V-Neck T-Shirts',
      'description': 'All You Need Is Love',
      'date_published': '2017-05-11'
    },
    {
      'name': 'Frida Con Amigos - Premium Poster',
      'price': 11.9,
      'url': 'https://www.juniqe.com/frida-con-amigos-premium-poster-1x1-1717966.html',
      'product_id': '1717966',
      'image_url': 'https://rndr.juniqe.com/media/catalog/product/606/7/606-7-101X.jpg',
      'price_currency_code': 'EUR',
      'availability': 'InStock',
      'category': 'Premium Posters',
      'description': 'Frida Con Amigos',
      'date_published': '2017-05-12'
    },
    {
      'name': 'Print 42 - Premium Poster',
      'price': 12.9,
      'url': 'https://www.juniqe.com/print-48-premium-poster-portrait-1363025.html',
      'product_id': '1363025',
      'image_url': 'https://rndr.juniqe.com/media/catalog/product/566/11/566-11-101P.jpg',
      'price_currency_code': 'USD',
      'availability': 'InStock',
      'category': 'Wall Art',
      'description': 'Print 48',
      'date_published': '2017-05-11'
    }, {
      'name': 'Aventyr - Premium Poster',
      'price': 24.9,
      'url': 'https://www.juniqe.com/aventyr-premium-poster-portrait-2025670.html',
      'product_id': '2025670',
      'image_url': 'https://rndr.juniqe.com/media/catalog/product/646/1/646-1-101P.jpg',
      'price_currency_code': 'EUR',
      'availability': 'InStock',
      'category': 'Wall Art',
      'description': 'Aventyr',
      'date_published': '2017-05-12'
    },
    {
      'name': 'All You Need Is Love - Women\'s TShirt V-Neck',
      'price': 24.9,
      'url': 'https://www.juniqe.com/all-you-need-is-love-womens-t-shirt-v-neck-n10-258206.html',
      'product_id': '258206',
      'image_url': 'https://rndr.juniqe.com/media/catalog/product/cache/x310/34/19/34-19-N10-white-0-front-1.jpg',
      'price_currency_code': 'USD',
      'availability': 'InStock',
      'category': 'V-Neck T-Shirts',
      'description': 'All You Need Is Love',
      'date_published': '2017-05-11'
    },
    {
      'name': 'Frida Con Amigos - Premium Poster',
      'price': 61.9,
      'url': 'https://www.juniqe.com/frida-con-amigos-premium-poster-1x1-1717966.html',
      'product_id': '1717966',
      'image_url': 'https://rndr.juniqe.com/media/catalog/product/606/7/606-7-101X.jpg',
      'price_currency_code': 'CHF',
      'availability': 'InStock',
      'category': 'Premium Posters',
      'description': 'Frida Con Amigos',
      'date_published': '2017-05-12'
    }, {
      'name': 'Print 49 - Premium Poster',
      'price': 14.9,
      'url': 'https://www.juniqe.com/print-48-premium-poster-portrait-1363025.html',
      'product_id': '1363025',
      'image_url': 'https://rndr.juniqe.com/media/catalog/product/566/11/566-11-101P.jpg',
      'price_currency_code': 'EUR',
      'availability': 'InStock',
      'category': 'Wall Art',
      'description': 'Print 48',
      'date_published': '2017-05-11'
    },
    {
      'name': 'Aventyr 2 - Premium Poster',
      'price': 22.9,
      'url': 'https://www.juniqe.com/aventyr-premium-poster-portrait-2025670.html',
      'product_id': '2025670',
      'image_url': 'https://rndr.juniqe.com/media/catalog/product/646/1/646-1-101P.jpg',
      'price_currency_code': 'EUR',
      'availability': 'InStock',
      'category': 'Wall Art',
      'description': 'Aventyr',
      'date_published': '2017-05-12'
    },
    {
      'name': 'All You Need Is Love - Women\'s TShirt V-Neck',
      'price': 27.9,
      'url': 'https://www.juniqe.com/all-you-need-is-love-womens-t-shirt-v-neck-n10-258206.html',
      'product_id': '258206',
      'image_url': 'https://rndr.juniqe.com/media/catalog/product/cache/x310/34/19/34-19-N10-white-0-front-1.jpg',
      'price_currency_code': 'USD',
      'availability': 'InStock',
      'category': 'V-Neck T-Shirts',
      'description': 'All You Need Is Love',
      'date_published': '2017-05-11'
    }, {
      'name': 'Frida Con Amigos - Premium Poster',
      'price': 12.5,
      'url': 'https://www.juniqe.com/frida-con-amigos-premium-poster-1x1-1717966.html',
      'product_id': '1717966',
      'image_url': 'https://rndr.juniqe.com/media/catalog/product/606/7/606-7-101X.jpg',
      'price_currency_code': 'EUR',
      'availability': 'InStock',
      'category': 'Premium Posters',
      'description': 'Frida Con Amigos',
      'date_published': '2017-05-12'
    }, {
      'name': 'Print 46 - Premium Poster',
      'price': 125.2,
      'url': 'https://www.juniqe.com/print-48-premium-poster-portrait-1363025.html',
      'product_id': '1363025',
      'image_url': 'https://rndr.juniqe.com/media/catalog/product/566/11/566-11-101P.jpg',
      'price_currency_code': 'RUB',
      'availability': 'InStock',
      'category': 'Wall Art',
      'description': 'Print 48',
      'date_published': '2017-05-11'
    }, {
      'name': 'Aventyr 5 - Premium Poster',
      'price': 34.9,
      'url': 'https://www.juniqe.com/aventyr-premium-poster-portrait-2025670.html',
      'product_id': '2025670',
      'image_url': 'https://rndr.juniqe.com/media/catalog/product/646/1/646-1-101P.jpg',
      'price_currency_code': 'EUR',
      'availability': 'InStock',
      'category': 'Wall Art',
      'description': 'Aventyr',
      'date_published': '2017-05-12'
    }
  ]);
})

app.listen(3000, function () {
  console.log('Juiqe app listening on port 3000!')
});