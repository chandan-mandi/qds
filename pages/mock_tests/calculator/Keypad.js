import React, {Component} from 'react';

class KeyPadComponent extends Component {

    render() {
        return (
            <div className="button">
                <style>
                {`
                    .keypads
                    {
                        width: 21%;
                        background-color: #f2f2f2;
                        margin: 2%;
                    }
                    .keypads:hover
                    {
                        background-color: #192f5a;
                        color: white;
                    }
                    .equal
                    {
                        background-color: #28a745;
                        color: white;
                    }
                    .clear
                    {
                        background-color: #dc3545;
                        color: #fff;
                    }
                
                `}
                </style>
                <button  className="keypads"  name="(" onClick={e => this.props.onClick(e.target.name)}>(</button>
                <button  className="keypads clear" name="CE" onClick={e => this.props.onClick(e.target.name)}><span className="fa fa-arrow-left"></span></button>
                <button className="keypads"  name=")" onClick={e => this.props.onClick(e.target.name)}>)</button>
                <button className="keypads clear"  name="C" onClick={e => this.props.onClick(e.target.name)}>C</button><br/>

                <button className="keypads"  name="7" onClick={e => this.props.onClick(e.target.name)}>7</button>
                <button className="keypads"  name="8" onClick={e => this.props.onClick(e.target.name)}>8</button>
                <button className="keypads"  name="9" onClick={e => this.props.onClick(e.target.name)}>9</button>
                <button className="keypads"  name="*" onClick={e => this.props.onClick(e.target.name)}>x</button><br/>

                <button className="keypads"  name="4" onClick={e => this.props.onClick(e.target.name)}>4</button>
                <button className="keypads"  name="5" onClick={e => this.props.onClick(e.target.name)}>5</button>
                <button className="keypads"  name="6" onClick={e => this.props.onClick(e.target.name)}>6</button>
                <button className="keypads"  name="-" onClick={e => this.props.onClick(e.target.name)}>-</button><br/>

                
                <button className="keypads"  name="1" onClick={e => this.props.onClick(e.target.name)}>1</button>
                <button className="keypads"  name="2" onClick={e => this.props.onClick(e.target.name)}>2</button>
                <button className="keypads"  name="3" onClick={e => this.props.onClick(e.target.name)}>3</button>
                <button className="keypads"  name="+" onClick={e => this.props.onClick(e.target.name)}>+</button><br/>

                <button className="keypads"  name="." onClick={e => this.props.onClick(e.target.name)}>.</button>
                <button className="keypads"  name="0" onClick={e => this.props.onClick(e.target.name)}>0</button>
                <button className="keypads equal"  name="=" onClick={e => this.props.onClick(e.target.name)}>=</button>
                <button className="keypads"  name="/" onClick={e => this.props.onClick(e.target.name)}>÷</button><br/>
            </div>
        );
    }
}


export default KeyPadComponent;