import { Component, Suspense } from "react";
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'
import './index.css'


class TopicDisplay extends Component {
    state = { isLoading: true, data: [] }
    componentDidMount = () => {
        this.sendTheIdThroughByApi()
    }
    sendTheIdThroughByApi = async () => {
        const jwtToken = Cookies.get("jwtToken")
        const history = this.props
        const { match } = history
        const { params } = match
        const { id } = params
        const options = {
            method: 'get',
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${jwtToken}`
            }
        }
        const response = await fetch(`http://localhost:3000/courseSingleData/${id}`, options)
        const data = await response.json()
        console.log(data)
        this.setState({ isLoading: false, data: data })
    }

    render() {
        const { isLoading, data } = this.state
        return (
            <div>
                {
                    isLoading ? (
                        <div className="loader-class"> <h1>Loading</h1> </div>
                    ) : (<div className="video-div">
                        <ReactPlayer url={`${data[0].videoUrl}`} width="100%"
                            height="100vh"
                            controls
                            className="videoStyle" />
                    </div>)
                }
            </div>

        )
    }
}

export default TopicDisplay


