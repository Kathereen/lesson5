import React from 'react';
import propTypes from 'prop-types'

const significatorValue ={
    g: 'greater',
    l: 'lower'
}
function toGreater(lower) {
    return(lower * 0.5)
}
function toLower(greater){
    return(greater * 0.05)
}
function tryConvert(number, convert) {
    const input = parseFloat(number);
    if (Number.isNaN(input)) {
      return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
  }

class NumberInput extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            number: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }
     handleChange(e){
        this.props.onNumberChange(e.target.value);
    }
    render(){
        const number = this.props.number;
        const significator = this.props.significator;
        return(
            <fieldset>
                    <legend>Введіть ваше число {significatorValue[significator]}</legend>
                    <input value={number} onChange={this.handleChange}/>
            </fieldset>
        )
    }
}

class Calculator extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            number: '',
            significator: 'l'
        }
        this.handleToLowerNumberChange = this.handleToLowerNumberChange.bind(this);
        this.handleToGreaterNumberChange = this.handleToGreaterNumberChange.bind(this);
        
    }
    handleToLowerNumberChange(number){
        this.setState({
            significator:'l',
            number
        })
    }
    handleToGreaterNumberChange(number){
        this.setState({
            significator:'g',
            number
        })
    }
    
    render(){
        const number = this.state.number;
        const significator = this.state.significator;
        const greater = significator ==='l'? tryConvert(number, toGreater) : number;
        const lower = significator ==='g'? tryConvert(number, toLower) : number;

        return(
            <div>
            <NumberInput significator='g' number={greater} onNumberChange={this.handleToGreaterNumberChange}/>
            <NumberInput significator='l' number={lower} onNumberChange={this.handleToLowerNumberChange}/>
            </div>
        )
    }
}
NumberInput.propTypes = {
    number: propTypes.number
}
export default Calculator;