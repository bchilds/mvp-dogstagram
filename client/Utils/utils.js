//credit to: https://www.html5rocks.com/en/tutorials/canvas/imagefilters/

// Filters.getPixels = function(img) {
//   var c = this.getCanvas(img.width, img.height);
//   var ctx = c.getContext('2d');
//   ctx.drawImage(img);
//   return ctx.getImageData(0,0,c.width,c.height);
// };

export const getPixels = function(c) {
	//takes in a canvas
	var ctx = c.getContext('2d');
	return ctx.getImageData(0,0,c.width,c.height);
};

// Filters.getCanvas = function(w,h) {
//   var c = document.createElement('canvas');
//   c.width = w;
//   c.height = h;
//   return c;
// };

// Filters.filterImage = function(filter, image, var_args) {
//   var args = [this.getPixels(image)];
//   for (var i=2; i<arguments.length; i++) {
//     args.push(arguments[i]);
//   }
//   return filter.apply(null, args);
// };

export const filterImage = function(filter, canvas, var_args) {
  var args = [this.getPixels(canvas)];
  for (var i=2; i<arguments.length; i++) {
    args.push(arguments[i]);
  }
  return filter.apply(null, args);
};

export const grayscale = function(pixels, args) {
  var d = pixels.data;
  for (var i=0; i<d.length; i+=4) {
    var r = d[i];
    var g = d[i+1];
    var b = d[i+2];
    // CIE luminance for the RGB
    // The human eye is bad at seeing red and blue, so we de-emphasize them.
    var v = 0.2126*r + 0.7152*g + 0.0722*b;
    d[i] = d[i+1] = d[i+2] = v
  }
  return pixels;
};

export const invert = (imgData, args) => {
	for (var i = 0; i < imgData.data.length;i+=4) {
	  imgData.data[i]=255-imgData.data[i];
	  imgData.data[i+1]=255-imgData.data[i+1];
	  imgData.data[i+2]=255-imgData.data[i+2];
	  imgData.data[i+3]=255;
	}
	return imgData;
};
