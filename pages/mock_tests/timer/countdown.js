class Countdown extends React.Component {
    constructor(props) {
      super();
      this.state = {
        time: {
          hours: 0,
          minutes: 0,
          seconds: 0,
          milliseconds: 0,
        },
        duration: props.newTime,
        timer: null
      };
      this.startTimer = this.start.bind(this);
    }
  
    msToTime(duration) {
      //let milliseconds = parseInt((duration % 1000));
      let seconds = Math.floor((duration / 1000) % 60);
      let minutes = Math.floor((duration / (1000 * 60)) % 60);
      //let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
  
      //hours = hours.toString().padStart(2, '0');
      minutes = minutes.toString().padStart(2, '0');
      seconds = seconds.toString().padStart(2, '0');
      //milliseconds = milliseconds.toString().padStart(3, '0');

      if(minutes === "00" && seconds === "00")
      {
        this.props.timesUp(true);
      }
      else
      {
          this.props.timesUp(false);
      }
  
      return {
        //hours,
        minutes,
        seconds,
        //milliseconds
      };
    }
  
    componentDidMount() {

        this.startTimer();

    }
  
    start() {
      if (!this.state.timer) {
        this.state.startTime = Date.now();
        this.timer = window.setInterval(() => this.run(), 10);
      }
    }
  
    run() {
      const diff = Date.now() - this.state.startTime;
      
      let remaining = this.state.duration - diff;
      if (remaining < 0) {
        remaining = 0;
      }
      this.setState(() => ({
        time: this.msToTime(remaining)
      }));
      if (remaining === 0) {
        window.clearTimeout(this.timer);
        this.timer = null;
      }
    }
  
    render() {
      return ( 
          <span> 
            {this.state.time.minutes} : {this.state.time.seconds}
          </span>
      );
    }
  }
   
  export default Countdown;