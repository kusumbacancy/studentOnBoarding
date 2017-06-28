// SOCKET CODE FOR SYNC
const moment = require('moment');
let fs = require('fs');



// export function for listening to the socket
module.exports = function (socket) {

  socket.on('actions-message', function(type){
    fs.readFile('db/actions.json', 'utf8', function (err, data) {
         if(err) { throw err; }
         let content =  JSON.parse(data);
         let message = "Received request for "+type;
         if(content && type){
            content = content.actions;
            let results = content.filter(function (entry) {
                            return entry.id === type;
                          })[0];
            if(results && results.message){
              message = results.message;
            }
         }
         socket.emit('actions-message', message);
     })

  });

  socket.on('synch-time', function(time){
    socket.emit('synch-time',(time === moment().format("YYYY-MM-DD HH:mm:ss"))?true:false);
  });

  socket.on('disconnect', function(){
    
  });
};
