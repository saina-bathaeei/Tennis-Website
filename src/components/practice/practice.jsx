import React, { isValidElement } from "react"
import './practice.css'
import Input from "./input/input"

class Prictice extends React.Component{
    constructor (props) {
        super(props)
        this.state ={
            firstName:'',
            lastName:'',
            email:'',
            allValid: false,
            submitted: false,
            isVisible: false,
            isVisible1:false,
            isVisible2:false,
        }
    }
    changeValue(event) {
        this.setState({
            firstName: event.nativeEvent.target.value
        })
        console.log(event)
    }
    changeValue1(event) {
        this.setState({
            lastName: event.nativeEvent.target.value
        })
    }
    changeValue2(event) {
        this.setState({
            email: event.nativeEvent.target.value
        })
    }
    buttonValid(){
        this.setState({
            submitted: true
        })
        if(this.state.firstName === ''){
            this.setState({
                isVisible: true
            })
        }else{
            this.setState({
                isVisible: false
            })
        }
        if(this.state.lastName === ''){
            this.setState({
                isVisible1: true
            })
        }else{
            this.setState({
                isVisible1:false
            })
        }
        if(this.state.email === ''){
            this.setState({
                isVisible2: true
            })
        }else{
            this.setState({
                isVisible2:false
            })
        }
            if(this.state.firstName.length !== 0 && this.state.lastName.length !== 0 && this.state.email.length !== 0){
                console.log('all valid')
                this.setState({
                    allValid : true
                })
                /*setTimeout(()=> {
                    this.setState({
                        allValid : false
                    },3000)
                })*/
            }
    }
    
    

    render(){
        return(
            <div className="form-container">
                <div className="register-form">
                    {/* Uncomment the next line to show the success message */}
                    {/* <div className="success-message">Success! Thank you for registering</div> */}
                    {this.state.allValid && this.state.submitted && <div className="success-message">Success! Thank you for registering</div>}
                    <input
                        id="first-name"
                        className="form-field"
                        type="text"
                        placeholder="First Name"
                        name="firstName"
                        value={this.state.firstName}
                        onChange={(event)=> {this.changeValue(event)}}
                    />
                    {/* Uncomment the next line to show the error message */}
                    {this.state.submitted && this.state.firstName.length === 0 && <span id="first-name-error">Please enter a first name</span>}
                    <input
                        id="last-name"
                        className="form-field"
                        type="text"
                        placeholder="Last Name"
                        name="lastName"
                        value={this.state.lastName}
                        onChange={(event)=> {this.changeValue1(event)}}

                    />
                    {this.state.submitted && this.state.lastName.length === 0 && <span id="first-name-error">Please enter a last name</span>}
                    {/* Uncomment the next line to show the error message */}
                    {/* <span id="last-name-error">Please enter a last name</span> */}
                    <input
                        id="email"
                        className="form-field"
                        type="text"
                        placeholder="Email"
                        name="email"
                        value={this.state.email}
                        onChange={(event)=> {this.changeValue2(event)}}
                    />
                    {/* Uncomment the next line to show the error message */}
                    {this.state.submitted && this.state.email.length === 0 && <span id="first-name-error">Please enter a email address</span>}

                    {/* <span id="email-error">Please enter an email address</span> */}
                    <button className="form-field" type="submit" onClick={this.buttonValid.bind(this)}>
                        Register
                    </button>
                </div>
            </div>
        )
    }
}
export default Prictice