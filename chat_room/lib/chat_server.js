import { AssertionError } from 'assert';

var socketio = require('socket.io');
var io;
var guestNumber = 1;
var nickNames = {};
var namesUsed = [];
var currentRoom = {};

//启动Socket。IO服务器
exports.listen = function(server) {
    io = socket.listen(server);
    io.set('log level', 1);

    io.sockets.on('connection', function(socket) {
        //连接聊天室 =>分配用户昵称 统计用户数
        guestNumber = assignGuestName(socket, guestNumber, nickNames, namesUsed);

        //进入聊天室 =>房间号 新用户 用户列表
        joinRoom(socket, 'Lobby');
        
        //处理用户更名 =>没人用过 更换新的 删除旧的
        handleNameChangeAttempts(socket, nickNames, namesUsed);

        //处理用户消息 =>谁发的 发了什么消息
        handleMessageBroadcasting(socket);

        //处理创建或更换房间 =>离开旧的 进入新的
        handleRoomJoining(socket);

        //处理用户离线 =>清除当前昵称 清除用过的昵称
        handleClientDisconnection(socket, nickNames,namesUsed);

        //响应房间列表请求
        socket.on('rooms', function() {
            socket.emit('rooms', io.sockets.manager.rooms);
        });


    })
}

//辅助函数
//1.分配用户昵称
function assignGuestName(socket, guestNumber, nickNames, namesUsed) {

};

//2.进入聊天室
function joinRoom(socket, room) {

};

//3.处理用户更名
function handleNameChangeAttempts(socket, nickNames, namesUsed) {

};

//4.处理用户消息
function handleMessageBroadcasting(socket) {

};

//5.处理创建或更换房间
function handleRoomJoining(socket) {

};

//6.处理用户离线 
function handleClientDisconnection(socket, nickNames,namesUsed) {

};





