import { Component } from "react";
import Cookies from 'js-cookie'



class Subscribe extends Component {
    state = { isLoading: true, message: "" }
    componentDidMount = () => {
        this.subscribeToCourse()
    }
    subscribeToCourse = async (props) => {
        const jwtToken = Cookies.get("jwtToken")
        console.log(jwtToken)
        const { match } = this.props
        const { params } = match
        const { topic } = params
        const options = {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${jwtToken}`
            }
        }
        const response = await fetch(`http://localhost:3000/updatePayment/${topic}`, options)
        if (response.ok) {
            const { history } = this.props
            if (topic == 'web') {
                history.replace('/htmlCourse')
            }
            else if (topic === 'ai') {
                history.replace('/aiCourse')
            }
            else if (topic === 'cyber') {
                history.replace('/CyberCourse')
            }
            else if (topic === 'devops') {
                history.replace('/DevopsCourse')
            }
        }
        else {
            this.setState({ message: 'Failed', isLoading: false })
        }
    }

    loader = () => {
        <div className="loader-class">
            <h1>Loading</h1>
        </div>
    }

    displayData = () => {
        const { message } = this.state
        return (
            <div>
                <h1>{`${message}`}</h1>
            </div>
        )
    }

    render() {
        const { isLoading } = this.state
        return (
            <div>
                {
                    isLoading ? (this.loader()) : (this.displayData())
                }
            </div>
        )
    }

}



export default Subscribe


