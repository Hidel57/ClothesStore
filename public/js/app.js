'use strict';

(function () {
  function init () {
    var router = new Router([
      new Route('home', 'home.html', true),
      new Route('about', 'about.html'),
      new Route('gallery', 'gallery.html'),
      new Route('services', 'services.html'),
      new Route('contacts', 'contacts.html')
    ])
  }
  init()
}())