var data =  {
    "words": [
        -570334408,
        2004172356,
        757317984,
        1876342768,
        -1842347817,
        -961658523,
        -296856494,
        -1123982696
    ],
    "sigBytes": 32
};
  
  var unpack = function(hex) {
    return new Buffer( hex, 'hex' ).toString('hex');
  };
  
  var convert_object = function(data) {
    if (typeof data === 'string') {
      return unpack(data);
    } else if (Array.isArray( data )) {
      return data.map(convert_object);
    } else if (typeof data === 'object') {
      var parsed = {};
  
      Object.keys( data ).forEach( function( key, index, keys ) {
         parsed[ unpack(key) ] = convert_object( data[key]);
      });
  
      return parsed;
    } else {
      throw ("Oops! we don't support type: " + (typeof data));
    }
  };
  
  console.log( convert_object(data) );