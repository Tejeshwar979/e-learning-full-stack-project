import { Component } from "react";
import Cookies from "js-cookie"
import './index.css'
import { Link } from 'react-router-dom'

class Login extends Component {
    state = { username: "", password: "", isIncorrect: "", isLoggingIn: "Login" }
    onSubmitForm = async (event) => {
        event.preventDefault()
        this.setState({ isLoggingIn: "Logging..." })
        const { username, password } = this.state
        const options = {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        }
        const response = await fetch("http://localhost:3000/login", options)
        if (response.ok) {
            const data = await response.json()
            const jwtToken = data.jwtKey
            Cookies.set("jwtToken", jwtToken, { expires: 30 })
            this.props.history.replace('/Home')
        }
        else {
            this.setState({ isIncorrect: "*password Incorrect", isLoggingIn: "Login", username: "", password: "" })
        }
    }
    changeUsername = (event) => {
        this.setState({ username: event.target.value })
    }
    changePassword = (event) => {
        this.setState({ password: event.target.value })
    }
    render() {
        const { isIncorrect, isLoggingIn, username, password } = this.state
        return (
            <form onSubmit={this.onSubmitForm}>
                <div className="div-outer-cont">
                    <div className="div-cont-image-login-form-align">
                        <div className="div-cont-main">
                            <label className="heading">USERNAME</label>
                            <input value={username} className="input-style" onChange={this.changeUsername} type="text" />
                            <label className="heading">PASSWORD</label>
                            <input value={password} className="input-style" onChange={this.changePassword} type="password" />
                            <h1 className="passwordIncorrect-style"> {isIncorrect} </h1>
                            <div>
                                <button className="login-button" type="submit">{isLoggingIn}</button>
                            </div>
                            <div className="registered-question-div">
                                <span>are You registered ?</span>
                                <Link to="/Register">
                                    <p>Register</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}



export default Login




