// Copyright (c) 2012 Kolaboratory. All rights reserved.

document.addEventListener("DOMNodeInserted", function(event) {
  if (event.srcElement && event.srcElement.localName == 'div' ){
    $('div[class*="fbAdUnit"]').closest('.ego_section').html('<div id="twitter-login-js"></div><h1></h1><span id="injected-twitter-login"></span>');
    $('div[class*="uiImageBlock"]').closest('.ego_section').html('<div id="twitter-login-js"></div><h1></h1><span id="injected-twitter-login"></span>');
    // $('.ego_column').html('<div id="twitter-login-js"></div><span class="injected-twitter-login"></span>');
  }
});

// $.get("https://api.twitter.com/1/statuses/home_timeline.json?&count=21&include_entities=1&include_available_features=1&contributor_details=true&pc=true",function(){console.log(arguments)},'html');

$(function(){
  $.getScript('http://platform.twitter.com/anywhere.js?id=NRiwsi684LTFYvav8gV48w&v=1', function(){
    var js = document.createElement('script'); js.id = 'remove-timeline-ads-twitter-init'; js.async = true;
    js.text = '<script>console.log("penis pie!")</script>';
    $('#twitter-login-js').html('<script>console.log(typeof twttr)</script>');
    twttr.anywhere(function (T) {
      T(".injected-twitter-login").connectButton({ size: "large" });
    });
  });
});

// $(function(){
//   $.ajax({
//     url: 'https://twitter.com/statuses/user_timeline/spiceninja.json'
//     , data: { count: 2 }
//     , type: 'GET'
//     , dataType: 'jsonp'
//     , jsonpCallback: penisTime
//   })
//   .success(function(results){
//     console.log('TWEETES!', results);
//   })
//   .error(function(){

//   });
  
// });
