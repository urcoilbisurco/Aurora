var React = require('react');

const Time=React.createClass({
  componentDidMount:function(){
    setInterval(function(){
      var time=(new Date())
      this.setState({
        hour: time.getHours(),
        minutes: time.getMinutes()
      })
    }.bind(this), 60000);
  },
  getInitialState:function() {
    var time=(new Date())
    return {
      hour: time.getHours()>=10 ? time.getHours() : "0"+time.getHours(),
      minutes: time.getMinutes()>=10 ? time.getMinutes() : "0"+time.getMinutes()
    }
  },
  render:function(){
    return (
      <div className="time">{this.state.hour}:{this.state.minutes}</div>
    )
  }
});

const HeaderCard = React.createClass({
  sayHi:function(name){
    var hours=(new Date()).getHours();
    var greeting="";
    if(hours<6){greeting="Good night"}
    if(hours>=6 & hours <= 12){greeting="Good morning"}
    if(hours>=13 & hours <= 20){greeting="Good afternoon"}
    if(hours>20){greeting="Good evening";}
    if(name){
      greeting=greeting+", "+name+".";
    }else{
      greeting=greeting+", my friend.";
    }
    return greeting;
  },

  render:function() {
    var hi=this.sayHi("Francesco");
    return (
      <div className="header">
        <div className="main">
          <Time/>
          <div className="title">
            {hi}
          </div>
        </div>
      </div>
    );
  },
});


module.exports=HeaderCard;



//https://itunes.apple.com/us/app/the-grid-family-dashboard/id1191966094?mt=8&ref=producthunt
