import { Component } from "react";
import Cookies from 'js-cookie'
import DataDisplay from "../DataDisplay";
import './index.css'

class courseDisplay extends Component {
    state = { isLoading: true, data: [] }
    componentDidMount = () => {
        this.callTheCourseApi()
    }
    callTheCourseApi = async () => {
        const jwtToken = Cookies.get("jwtToken")
        const { match } = this.props
        const { params } = match
        const { topic } = params
        console.log(params)
        const options = {
            method: "get",
            headers: {
                "Content-Type": 'application/json',
                authorization: `Bearer ${jwtToken}`
            },
        }
        const response = await fetch(`http://localhost:3000/coursedata?topic=${topic}`, options)
        const data = await response.json()
        console.log(data)
        this.setState({ isLoading: false, data: data })
    }
    renderthedata = () => {
        const { data } = this.state
        return (
            <div>
                <h1 className="topic-heading">Topic</h1>
                <div className="div-container-for-topics">
                    {data.map(item => (
                        <DataDisplay item={item} key={item._id} />
                    ))}
                </div>
            </div >
        )
    }
    render() {
        const { isLoading } = this.state
        return (
            isLoading ? (<div className="loader-class"> <h1> Loading </h1></div>) : this.renderthedata()
        )
    }
}

export default courseDisplay


