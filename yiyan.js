/*-- 兼容低版本浏览器 (包括 IE)，可移除 >
<script src="https://cdn.jsdelivr.net/npm/bluebird@3/js/browser/bluebird.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/whatwg-fetch@2.0.3/fetch.min.js"></script>
 */
     fetch('https://v1.hitokoto.cn')
      .then(function (res){
    return res.json();
                          })
 .then(function (data) {
    var hitokoto = document.getElementById('hitokoto');
    hitokoto.innerText = data.hitokoto; 
    })
    .catch(function (err) {
    console.error(err);
    })