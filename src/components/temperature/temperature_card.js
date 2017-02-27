var React = require('react');
var PropTypes = React.PropTypes;
var cn=require("classnames");
var css=require("./temperature_card.scss");

function TemperatureCard(props){
  background={
    "backgroundImage":'url("./src/assets/'+props.background+'")',
  }
  return (
    <div className={css.weather} style={background}>
      <div className={cn(css.main, (props.title=="Indoor" ? css.indoor : ""))}>
        <div className={css.title}>{props.title}</div>
        <div className={css.temp}>
          <div className={css.temp_value}>{props.temperature}°</div>
          <div className={css.temp_description}>{props.description}</div>
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

module.exports=TemperatureCard;
