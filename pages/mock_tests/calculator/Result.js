import React, {Component} from 'react';

class ResultComponent extends Component {


    render() {
        let {result} = this.props;
        return (
            <div className="result">
                <style>
                    {`
                        .result
                        {
                            border: 2px solid black;
                            height: 50px;
                            width: 175px;
                            margin-bottom: 2%;
                            background-color: #fff;
                        }

                    `}
                </style>
                <p>{result}</p>
            </div>
    )
        ;
    }
}


export default ResultComponent;