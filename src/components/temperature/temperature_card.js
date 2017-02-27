var React = require('react');
var PropTypes = React.PropTypes;

var Stylesheet=require("aphrodite/no-important").StyleSheet;
var css=require("aphrodite/no-important").css;


function TemperatureCard(props){
  background={
    "backgroundImage":'url("./app/assets/'+props.background+'")',
  }
  return (
    <div className={css(style.weather)} style={background}>
      <div className={css(style.main)}>
        <div className={css(style.title)}>{props.title}</div>
        <div className={css(style.temp)}>
          <div className={css(style.temp_value)}>{props.temperature}°</div>
          <div className={css(style.temp_description)}>{props.description}</div>
        </div>
      </div>
    </div>
  )
}

TemperatureCard.propTypes={
  background:PropTypes.string.isRequired,
  title:PropTypes.string.isRequired,
  temperature:PropTypes.string.isRequired,
  description:PropTypes.string.isRequired,
}


const style=Stylesheet.create({
  weather:{
    marginBottom:"8px",
    color:"white",
    backgroundSize:"cover",
    backgroundPosition:"50%",
  },
  main:{
    background:"rgba(63,81,181,0.8)",
    display:"flex",
    alignItems: "center",
    flexDirection: "row",
    padding:"16px"
  },
  title:{
    fontSize:"20px"
  },
  temp:{
    marginLeft:"auto",
    textAlign:"right",
    display:"flex",
    flexDirection:"column",
  },
  temp_value:{
    fontSize:"25px",
    fontWeight:"300"
  },
  temp_description:{
    fontWeight:"300",
    fontStyle:"italic",
  }
});

//
//
// .weather{
//   margin-bottom:8px;
//   color:white;
//   background-size:cover;
//   background-position:50%;
//   .main{
//     background:rgba(63,81,181,0.8);//$primaryColor;
//     display:flex;
//     align-items: center;
//     flex-direction: row;
//     padding:16px;
//     &.indoor{
//       background:rgba(96,125,139,0.8);//$primaryColor;
//     }
//   }
//   .title{
//     font-size:20px;
//   }
//   .temp{
//     margin-left:auto;
//     text-align: right;
//     display:flex;
//     flex-direction: column;
//     .temperature{
//       font-size:25px;
//       font-weight:300;
//     }
//     .temp-description{
//       font-weight:300;
//       font-style:italic;
//     }
//   }
// }
//


module.exports=TemperatureCard;
