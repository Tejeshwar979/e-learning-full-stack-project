import { Component } from "react";
import { Link } from "react-router-dom"
import './index.css'
import Cookies from 'js-cookie'



class DevopsCourse extends Component {
    state = { isLoading: "loader" }

    componentDidMount = () => {
        this.findSubscribedOrNot()
    }


    findSubscribedOrNot = async () => {
        const jwtToken = Cookies.get("jwtToken")
        const options = {
            method: "get",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${jwtToken}`
            }
        }
        const response = await fetch(`http://localhost:3000/subscribed?course=devops`, options)
        console.log(response)
        if (response.ok) {
            this.setState({ isLoading: "success" })
        }
        else {
            this.setState({ isLoading: "failure" })
        }
    }

    htmlCourseData = () => {
        return (
            <div>
                <h1 className="heading-course-alignment">Devops Fundamentals</h1>
                <div className="htmlcssjavascript">
                    <Link className="text-decor-div" to="/courseDisplay/devopsFundamentals">
                        <div className="course-div">
                            <img className="image-structure" src="https://cdn-icons-png.flaticon.com/512/9068/9068756.png" />
                            <h1 className="headings">Devops Fundamentals</h1>
                        </div>
                    </Link>
                    <Link className="text-decor-div" to="/courseDisplay/linuxForDevops">
                        <div className="course-div">
                            <img className="image-structure" src="https://cdn-icons-png.flaticon.com/512/6124/6124995.png" />
                            <h1 className="headings">linux For Devops</h1>
                        </div>
                    </Link>
                </div>
                <h1 className="heading-course-alignment">Pipelines</h1>
                <div className="sqlmongo">
                    <Link className="text-decor-div" to="/courseDisplay/networkingForDevops">
                        <div className="course-div">
                            <img className="image-structure" src="https://cdn-icons-png.flaticon.com/512/4149/4149643.png" />
                            <h1 className="headings">Networking ForDevops</h1>
                        </div>
                    </Link>
                    <Link className="text-decor-div" to="/courseDisplay/gitVersionControl">
                        <div className="course-div">
                            <img className="image-structure" src="https://cdn-icons-png.flaticon.com/512/2111/2111288.png" />
                            <h1 className="headings">git VersionControl</h1>
                        </div>
                    </Link>
                    <Link className="text-decor-div" to="/courseDisplay/cicdPipelines">
                        <div className="course-div">
                            <img className="image-structure" src="https://cdn-icons-png.flaticon.com/512/1006/1006771.png" />
                            <h1 className="headings">ci cd Pipelines</h1>
                        </div>
                    </Link>
                </div>
                <h1 className="heading-course-alignment">Docker</h1>
                <div className="reactnode">
                    <Link className="text-decor-div" to="/courseDisplay/docker">
                        <div className="course-div">
                            <img className="image-structure" src="https://cdn-icons-png.flaticon.com/512/919/919853.png" />
                            <h1 className="headings">docker</h1>
                        </div>
                    </Link>
                    <Link className="text-decor-div" to="/courseDisplay/kubernetes">
                        <div className="course-div">
                            <img className="image-structure" src="https://cdn-icons-png.flaticon.com/512/919/919836.png" />
                            <h1 className="headings">kubernetes</h1>
                        </div>
                    </Link>
                </div>
                <h1 className="heading-course-alignment">Infrastructure/Cloud</h1>
                <div className="reactnode">
                    <Link className="text-decor-div" to="/courseDisplay/infrastructureAsCode">
                        <div className="course-div">
                            <img className="image-structure" src="https://cdn-icons-png.flaticon.com/512/4248/4248443.png" />
                            <h1 className="headings">infrastructure As Code</h1>
                        </div>
                    </Link>
                    <Link className="text-decor-div" to="/courseDisplay/configurationManagement">
                        <div className="course-div">
                            <img className="image-structure" src="https://cdn-icons-png.flaticon.com/512/1055/1055687.png" />
                            <h1 className="headings">configuration Management</h1>
                        </div>
                    </Link>
                    <Link className="text-decor-div" to="/courseDisplay/cloudPlatforms">
                        <div className="course-div">
                            <img className="image-structure" src="https://cdn-icons-png.flaticon.com/512/4144/4144517.png" />
                            <h1 className="headings">cloud Platforms</h1>
                        </div>
                    </Link>
                </div>
            </div>
        )
    }

    notSubscribed = () => {
        return (
            <div className="contianer-subs">
                <img src="https://cdn-icons-png.flaticon.com/512/3145/3145765.png" />
                <h1>Subscribe Chesukondi</h1>
                <Link to="/subscribe/devops" >
                    <button className="subscribe-btn">Subscribe</button>
                </Link>
            </div>
        )
    }

    loader = () => {
        return (
            <div className="loader-class">
                <h1>Loading</h1>
            </div>
        )
    }

    render() {
        const { isLoading } = this.state
        switch (isLoading) {
            case 'success':
                return this.htmlCourseData();

            case 'failure':
                return this.notSubscribed();

            case 'loader':
                return this.loader();

            default:
                return null;
        }
    }

}



export default DevopsCourse


