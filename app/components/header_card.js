var React = require('react');
var Stylesheet=require("aphrodite/no-important").StyleSheet;
var css=require("aphrodite/no-important").css;


const Time=React.createClass({
  componentDidMount:function(){
    setInterval(function(){
      this.setState(this.setupTime(new Date()))
    }.bind(this), 60000);
  },
  setupTime:function(time){
    return {
      hour: time.getHours()>=10 ? time.getHours() : "0"+time.getHours(),
      minutes: time.getMinutes()>=10 ? time.getMinutes() : "0"+time.getMinutes()
    }
  },
  getInitialState:function() {
    return this.setupTime(new Date());
  },
  render:function(){
    return (
      <div className={css(style.time)}>{this.state.hour}:{this.state.minutes}</div>
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
      <div className={css(style.header)}>
        <div className={css(style.main)}>
          <Time/>
          <div className={css(style.title)}>
            {hi}
          </div>
        </div>
      </div>
    );
  },
});


const style=Stylesheet.create({
  header:{
    color:"black",
    display:"flex",
    height:"300px",
    flexDirection: "column",
    backgroundSize:"cover",
    backgroundPosition:"50%",
    backgroundImage:'url("./app/assets/home.jpg")',
  },
  main:{
    height:"100%",
    display:"flex",
    flexDirection:"column",
    background:"rgba(255,255,255,0.5)",
  },
  title:{
    fontSize:"25px",
    fontWeight:"700",
    marginTop:"auto",
    color:"#333",
    padding:"32px 16px"
  },
  time:{
    marginLeft: "auto",
    padding: "16px",
    fontWeight: "300",
    fontSize: "30px",
    color: "#333",
  },
});

module.exports=HeaderCard;
