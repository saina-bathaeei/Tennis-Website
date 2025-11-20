import './account.css'
import React from 'react'

class Account extends React.Component {
    
    constructor(props){
        super(props)
        const savedState = localStorage.getItem('user');
        this.state ={
            signIn : true,
            user: savedState ? JSON.parse(savedState) : [],
            userName: '',
            password: '',
            gmail: ''
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.user !== this.state.user) {
          localStorage.setItem('user', JSON.stringify(this.state.user));
        }
      }

    changeState(){
        this.setState(prevState => ({
            signIn: !prevState.signIn,
          }));
    }
    clickSign(){
        console.log('hello')
        const newAlbum = {
            id: this.state.user.length + 1, // Simple ID generation
            username: this.state.userName,
            password: this.state.password, // Random price for demonstration
            Gmail: this.state.gmail
          };
      
          this.setState(prevState => ({
            user: [...prevState.user, newAlbum]
          }));
    }

    submitted(event){
        event.preventDefault()
    }

    changeUsername(event){
        this.setState({
            userName: event.target.value
        })
    }

    changeGmail(event){
        this.setState({
            gmail: event.target.value
        })
    }

    changePassword(event){
        this.setState({
            password: event.target.value
        })
    }
    render(){
        return (
            <>
            
            <div className='contain'>
              <button className='back'><img src="/home/icon/lets-icons--back.svg" />back</button>
                  <div className="account-container">
                      
                  {
                this.state.signIn ? (
                <form action="" onSubmit={this.submitted.bind(this)}>
                    <div className="title">
                        <h1><img src="/home/icon/game-icons--tennis-ball.svg" />sign in</h1>
                    </div>
                    <input type="text" placeholder='Username' />
                    <input type="text" placeholder='Password' />
                    <h3>Dont have an account? <a onClick={this.changeState.bind(this)}>sign up</a></h3>
                    <button className='sign'>Sign in</button>
                </form>) : (
                <form action="" onSubmit={this.submitted.bind(this)}>
                    <div className="title">
                        <h1><img src="/home/icon/game-icons--tennis-ball.svg" />sign up</h1>
                    </div>
                    <input type="text" placeholder='Username' onChange={this.changeUsername.bind(this)} value={this.state.userName}/>
                    <input type="text" placeholder='Gmail' onChange={this.changeGmail.bind(this)} value={this.state.gmail}/>
                    <input type="text" placeholder='Password' onChange={this.changePassword.bind(this)} value={this.state.password}/>
                    <h3>have an account? <a onClick={this.changeState.bind(this)}>sign up</a></h3>
                    <button className='sign' onClick={this.clickSign.bind(this)}>Sign up</button>
                </form>
                )
            }
                  </div>
      
            </div>
            </>
          )
    }
  }
  
export default Account