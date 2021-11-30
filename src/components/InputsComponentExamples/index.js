import React from 'react';

class Example1 extends React.Component{
    constructor(){
        super();
        this.state = {
            innerText:'',
            isChecked: false,
            subscript: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleConfirmed = this.handleConfirmed.bind(this);     
    }
    handleChange(e){
        console.log(e.target.name);
        const target = e.target;
        const value = target.type ==='checkbox'? target.checked:target.value;
        const name = target.name;
        this.setState({
            [name]:value      
        })
    }   
    handleConfirmed(e){
        e.preventDefault(); 
        const data = {
            text: this.state.innerText,
            checkbox: this.state.isChecked 
        }
        var json = JSON.stringify(data);
        this.setState({
           subscript: json
        })        
    }
   
    render(){
        console.log(this.state)
        return(
            <div>
                <form onSubmit={this.handleConfirmed}>
                    <input type='text' name='innerText' value={this.state.innerText} onChange={this.handleChange}/>
                    <input type='checkbox' name='isChecked' value={this.state.isChecked} onChange={this.handleChange}/>
                    <button>Confirmed</button>   
                </form>
                <div>
                    {this.state.subscript}
                </div> 
                
            </div>
        )
    }
}
export default Example1;