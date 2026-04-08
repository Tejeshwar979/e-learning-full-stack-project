import { Component } from "react";
import './index.css'



class Register extends Component {
    state = { name: "", username: "", password: "", email: "", emptyname: "", emptyusername: "", emptypassword: "", emptyemail: "", isRegistering: "Register" }

    submitForm = async (event) => {
        event.preventDefault()
        const { name, username, password, email } = this.state
        if (name === "" || username === "" || password === "" || email === "") {
            alert("Enter everyCredentials correctly")
        }
        else {
            this.setState({ isRegistering: "Registering..." })
            const { name, username, password, email } = this.state
            const options = {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name, username, email, password
                })
            }
            const response = await fetch("http://localhost:3000/register", options)
            if (response.ok) {
                const data = await response.json()
                console.log(data.message)
                this.props.history.replace("/")
            }
            else {
                alert("something went Wrong")
                this.setState({ isRegistering: "Register" })
            }
        }
    }


    changeNameReq = () => {
        const { name } = this.state
        if (name === "") {
            this.setState({ emptyname: "*required" })
        }
        else {
            this.setState({ emptyname: "" })
        }
    }

    changeEmailReq = () => {
        const { email } = this.state
        if (email === "") {
            this.setState({ emptyemail: "*required" })
        }
        else {
            this.setState({ emptyemail: "" })
        }
    }

    changePasswordReq = () => {
        const { password } = this.state
        if (password === "") {
            this.setState({ emptypassword: "*required" })
        }
        else {
            this.setState({ emptypassword: "" })
        }
    }

    changeUsernameReq = () => {
        const { username } = this.state
        if (username === "") {
            this.setState({ emptyusername: "*required" })
        }
        else {
            this.setState({ emptyusername: "" })
        }
    }


    changeName = (event) => {
        this.setState({ name: event.target.value })
    }
    changeEmail = (event) => {
        this.setState({ email: event.target.value })
    }
    changePassword = (event) => {
        this.setState({ password: event.target.value })
    }
    changeUsername = (event) => {
        this.setState({ username: event.target.value })
    }



    render() {
        const { emptyname, emptyemail, emptypassword, emptyusername, isRegistering } = this.state
        return (
            <form onSubmit={this.submitForm}>
                <div className="register-outer-div">
                    <div className="register-inner-div">
                        <label>NAME</label>
                        <input className="input-style" onChange={this.changeName} onBlur={this.changeNameReq} type="text" />
                        <p className="header-registered">{emptyname}</p>
                        <label>USERNAME</label>
                        <input className="input-style" onChange={this.changeUsername} onBlur={this.changeUsernameReq} type="text" />
                        <p className="header-registered">{emptyusername}</p>
                        <label>PASSWORD</label>
                        <input className="input-style" onChange={this.changePassword} onBlur={this.changePasswordReq} type="password" />
                        <p className="header-registered">{emptypassword}</p>
                        <label>EMAIL</label>
                        <input className="input-style" onChange={this.changeEmail} onBlur={this.changeEmailReq} type="text" />
                        <p className="header-registered">{emptyemail}</p>
                        <div>
                            <button className="register-button" type="submit">{isRegistering}</button>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}



export default Register




