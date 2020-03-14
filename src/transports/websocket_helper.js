'use strict';

var getWebSocketDefault = function(ws_addr) {
    return new WebSocket(ws_addr);
}

var webSocketGetter = getWebSocketDefault;

module.exports = {
    getWebSocket: function(ws_addr) {
        return webSocketGetter(ws_addr);
    },
    setWebSocketGetter: function(getter) {
        webSocketGetter = getter;
    }
}