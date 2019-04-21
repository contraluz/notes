'chaining'
// 链式写法， 返回的是jquery对象， 建议多行时 使用换行缩进写法。 使用太多可能导致性能问题。


$.ajax({

    url: "test.html",

    success: function () {
        alert("哈哈，成功了！");
    },

    error: function () {
        alert("出错啦！");
    }

});
// 返回的 xhr 对象

'1.5.0 版本以前-'

$.ajax("test.html")

    .done(function () {
        alert("哈哈，成功了！");
    })

    .fail(function () {
        alert("出错啦！");
    })

    .done(function () {
        alert("第二个回调函数！");
    });
    // 返回的 deferred 对象