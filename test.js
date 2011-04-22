// from client
str = '{"sessionId":"7116154658142477","data":{"type":"string","color":"red","data":"aa"}}';
console.log(JSON.parse(str));
console.log(typeof JSON.parse(str));

var msg  = {"type"  : "string",
            "color" : "red",
            "data"  : "1"};

function msgToJsonString(msg)  {
  return  '{"type":"'+msg.type +'",'+
           '"color":"'+msg.color +'",'+
            '"data":"'+msg.data +'"}';
}

//j = {x:1, y:2,action:'mousemove'};
//typeof JSON.stringify(j);
//
//try {
//  typeof JSON.parse('{"x":1, "y":2,"action":"mousemove"}');
//} catch (e) {
//  console.log(__line+e.message);
//}
//
//
//js = [];
//js.push(j);
//js.push(j);
//
//console.log(js.length);
//messages = [];
//
//messages.push({ "sessionId" : 1});
