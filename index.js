(function(){
  'use strict';

  var json = document.currentScript.text,
      data = JSON.parse(json);

  console.log(data.message);
}());
