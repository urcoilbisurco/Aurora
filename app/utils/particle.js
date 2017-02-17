var axios= require("axios");
var env=require("../_env");

var device=env.device
var token=env.token
var params="?access_token="+token

function getValue(key){
  return axios.get("https://api.particle.io/v1/devices/"+device+"/"+key+params);
}
function postValue(key, data){
  return axios.post("https://api.particle.io/v1/devices/"+device+"/"+key+params, data);
}

var helpers={
  getLightStatus:function(){
    return getValue("led_status")
    .then(function(response){
      console.log(response.data)
      return response.data.result;
    }).catch(function(err){
      console.log("ERROR", err);
    });
  },
  setLightStatus:function(data){
    postValue("led", data)
    .then(function(info){
    }).catch(function(err){
      console.log("ERROR", err);
    });
  }
}
module.exports=helpers;
