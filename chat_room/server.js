var htp = require('http');
var fs = require('fs');
var path = require('path');
var mime = require('mime');
var cache = {};


//请求文件不存在时发送404错误
function send404() {

};

//请求文件正确时发送文件
function sendFile() {

};

//静态文件服务 =>第一次从硬盘文件读取， 之后从缓存读取
function serverStatic() {

};

//创建HTTP服务器
var server = http.careateServer(function(req, res) {

});

//启动HTTP服务
server.listen(3000, function() {

});

//设置Socket.IO服务器
var chatServer = require('./lib/chat_server');
chatServer.listen(server);

