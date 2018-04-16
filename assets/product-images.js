class ProductImage {
  constructor(){
    var SELF = this;
    SELF.slider_nav = document.querySelector('ul.slider-nav');
    SELF.slider_images = document.querySelector('div.slider-for');
    SELF.images_by_color = JSON.parse( document.querySelector('script.images-data').innerHTML.trim() );
    SELF.createSliderImages().createThumbnailImages();
    SELF.attachSwatchClickEvents();

    return SELF;
  }
  
  createSliderImages(given_color){
    for(var _color_name in SELF.images_by_color){
      //	If we want only a certain color, skip other colors.
      if(given_color && _color_name != given_color) continue;
      // Make the images
      var _images = SELF.images_by_color[_color_name];
      _images.forEach(function(_image_url){
        var _div = document.createElement('figure');
        var _img = document.createElement('img');
        _div.classList.add('color_'+SELF.handleizeString(_color_name), 'image', 'is-2by3');
        _img.classList.add('product-image-main', 'image-zoom');
        _div.setAttribute('data-image-url', _image_url);
      });
    }
  }
}