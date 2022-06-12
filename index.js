//1. expressモジュールをロードし、インスタンス化してappに代入。
var express = require("express");
var app = express();

//2. listen()メソッドを実行して3000番ポートで待ち受け
var server = app.listen(3000, function(){
    console.log("Node.js is listening to PORT:" + server.address().port);
});


//3. アプリケーション固有の処理
var photoList = [
    {
        id: "001",
        name: "photo001.jpg",
        type: "jpeg",
        dataUrl: "http://localhost:3000/data/photo001.jpeg"
    },
    {
        id: "002",
        name: "photo002.jpg",
        type: "jpeg",
        dataUrl: "http://localhost:3000/data/photo002.jpeg"
    }
]

app.get("/api/photo/:photoId", function(req, res, next){
    var photo;
    for (i = 0;i < photoList.length; i++) {
        if(photoList[i].id == req.params.photoId){
            var photo = photoList[i];
        }
    }
    res.json(photo);
});


// View EngineにEJSを指定
app.set('view engine', 'ejs');

app.get("/", function(req, res, next) {
    res.render("index", {});
})

