import React from "react";
import "./Login.css";

class Login extends React.Component {
  constructor(props){
    super(props);
    this.state={
      loginEmail:'',
      loginPassword:''
    }
  }
  onEmailChange =(event) =>{
    this.setState({loginEmail: event.target.value});
  } 
  
  onPasswordChange =(event) =>{
    this.setState({loginPassword: event.target.value});
  }

  onSubmitLogin =()=>{
    fetch('https://polar-peak-29988.herokuapp.com/signin', {
      method: 'post',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        email:this.state.loginEmail,
        password: this.state.loginPassword
      })
    })
    .then(res => res.json())
    .then(user =>{
      if(user.id) {
        this.props.loadUser(user);
        this.props.onRouteChange('home');
      }
    })

  }

  render(){
    const { onRouteChange } =this.props;
  return (
    <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
      <main className="pa4 black-80">
        <div className="measure ">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f3 fw6 ph0 mh0">Log In</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">
                Email
              </label>
              <input
                className="pa2 input-reset ba field bg-transparent w-100"
                type="email"
                name="email-address"
                id="email-address"
                onChange={this.onEmailChange}
              />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">
                Password
              </label>
              <input
                className="b pa2 input-reset ba field bg-transparent w-100"
                type="password"
                name="password"
                id="password"
                onChange={this.onPasswordChange}
              />
            </div>
          </fieldset>
          <div className="">
            <input
              className="b ph3 pv2 input-reset ba signIn bg-transparent grow pointer f6 dib"
              type="submit"
              value="Log In"
              onClick={this.onSubmitLogin}
            />
          </div>
          <div className="lh-copy mt3">
            <p
              onClick={() => onRouteChange("signup")}
              className="f6 link db pointer  signup"
            >
              Sign Up
            </p>
          </div>
        </div>
      </main>
    </article>
  );
  }
};

export default Login;
