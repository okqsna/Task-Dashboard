import React from "react";
import './Timer.css';
class Timer extends React.Component{
    constructor(props){
        super(props);
        this.state = {date: new Date()};    
    }
    componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
      }
    
      componentWillUnmount() {
        clearInterval(this.timerID);
      }
    
      tick() {
        this.setState({
          date: new Date()
        });
      }
       
      
    render(){
        return(
            <div className="Timer">
                <p>time - {this.state.date.toLocaleTimeString()}</p>
            </div>
        )
    }
}
export default Timer;