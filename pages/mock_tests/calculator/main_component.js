import React, { Component } from 'react';
import KeyPadComponent from './Keypad';
import ResultComponent from './Result';

class Calculator extends Component {
    constructor(){
        super();

        this.state = {
            result: ""
        }
    }

    onClick = button => {

        if(button === "="){
            this.calculate()
        }

        else if(button === "C"){
            this.reset()
        }
        else if(button === "CE"){
            this.backspace()
        }

        else {
            this.setState({
                result: this.state.result + button
            })
        }
    };


    calculate = () => {
        var checkResult = ''
        if(this.state.result.includes('--')){
            checkResult = this.state.result.replace('--','+')
        }

        else {
            checkResult = this.state.result
        }

        try {
            this.setState({
                // eslint-disable-next-line
                result: (eval(checkResult) || "" ) + ""
            })
        } catch (e) {
            this.setState({
                result: "error"
            })

        }
    };

    reset = () => {
        this.setState({
            result: ""
        })
    };

    backspace = () => {
        this.setState({
            result: this.state.result.slice(0, -1)
        })
    };

    render() {
        return (
            <div>
                <style>
                {`
                    .calculator-body
                    {
                        background-color: #e2e2e2;
                    }
                    .title-bar
                    {
                        background-color: #007bff;
                        color: #fff;
                        font-size: 14px;
                    }
                    .close-icon
                    {
                        cursor: pointer;
                    }
                    .close-icon:active
                    {
                        border: 1px solid white;
                    }
                
                `}
                </style>
                <div className="title-bar pt-1 pb-1 pl-2 ">
                     Calculator 
                    <span className="float-right close-icon pl-2 pr-2" onClick={() => this.props.dropdown(false)}> &times; </span>
                </div>
                <div className="calculator-body p-2">
                    <ResultComponent result={this.state.result}/>
                    <KeyPadComponent onClick={this.onClick}/>
                </div>
            </div>
        );
    }
}

export default Calculator;