import { Component } from "react";
import { Link } from "react-router-dom"
import './index.css'
import Cookies from 'js-cookie'



class CyberCourse extends Component {
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
        const response = await fetch(`http://localhost:3000/subscribed?course=cyber`, options)
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
                <h1 className="heading-course-alignment">Fundamentals</h1>
                <div className="htmlcssjavascript">
                    <Link className="text-decor-div" to="/courseDisplay/cyberSecurityFundamentals">
                        <div className="course-div">
                            <img className="image-structure" src="https://cdn-icons-png.flaticon.com/512/2092/2092663.png" />
                            <h1 className="headings">Cyber Security Fundamentals</h1>
                        </div>
                    </Link>
                    <Link className="text-decor-div" to="/courseDisplay/networkingFundamentals">
                        <div className="course-div">
                            <img className="image-structure" src="https://cdn-icons-png.flaticon.com/512/4149/4149643.png" />
                            <h1 className="headings">Networking Fundamentals</h1>
                        </div>
                    </Link>
                    <Link className="text-decor-div" to="/courseDisplay/operatingSystemSecurity">
                        <div className="course-div">
                            <img className="image-structure" src="https://cdn-icons-png.flaticon.com/512/4248/4248443.png" />
                            <h1 className="headings">Operating System Security</h1>
                        </div>
                    </Link>
                    <Link className="text-decor-div" to="/courseDisplay/linuxForHackers">
                        <div className="course-div">
                            <img className="image-structure" src="https://cdn-icons-png.flaticon.com/512/6124/6124995.png" />
                            <h1 className="headings">Linux for Hackers</h1>
                        </div>
                    </Link>
                </div>
                <h1 className="heading-course-alignment">Security</h1>
                <div className="sqlmongo">
                    <Link className="text-decor-div" to="/courseDisplay/cryptography">
                        <div className="course-div">
                            <img className="image-structure" src="https://cdn-icons-png.flaticon.com/512/3064/3064197.png" />
                            <h1 className="headings">Cryptography</h1>
                        </div>
                    </Link>
                    <Link className="text-decor-div" to="/courseDisplay/webSecurity">
                        <div className="course-div">
                            <img className="image-structure" src="https://cdn-icons-png.flaticon.com/512/1006/1006771.png" />
                            <h1 className="headings">Web Security</h1>
                        </div>
                    </Link>
                    <Link className="text-decor-div" to="/courseDisplay/ethicalHacking">
                        <div className="course-div">
                            <img className="image-structure" src="https://cdn-icons-png.flaticon.com/512/565/565547.png" />
                            <h1 className="headings">Ethical Hacking</h1>
                        </div>
                    </Link>
                </div>
                <h1 className="heading-course-alignment">Testing / Analysis</h1>
                <div className="reactnode">
                    <Link className="text-decor-div" to="/courseDisplay/penetrationTesting">
                        <div className="course-div">
                            <img className="image-structure" src="https://cdn-icons-png.flaticon.com/512/2721/2721293.png" />
                            <h1 className="headings">Penetration Testing</h1>
                        </div>
                    </Link>
                    <Link className="text-decor-div" to="/courseDisplay/malwareAnalysis">
                        <div className="course-div">
                            <img className="image-structure" src="https://cdn-icons-png.flaticon.com/512/2920/2920277.png" />
                            <h1 className="headings">Malware Analysis</h1>
                        </div>
                    </Link>
                </div>
                <h1 className="heading-course-alignment">Cloud / Security</h1>
                <div className="reactnode">
                    <Link className="text-decor-div" to="/courseDisplay/digitalForensics">
                        <div className="course-div">
                            <img className="image-structure" src="https://cdn-icons-png.flaticon.com/512/1584/1584892.png" />
                            <h1 className="headings">Digital Forensics</h1>
                        </div>
                    </Link>
                    <Link className="text-decor-div" to="/courseDisplay/securityTools">
                        <div className="course-div">
                            <img className="image-structure" src="https://cdn-icons-png.flaticon.com/512/1055/1055687.png" />
                            <h1 className="headings">Security Tools</h1>
                        </div>
                    </Link>
                    <Link className="text-decor-div" to="/courseDisplay/cloudSecurity">
                        <div className="course-div">
                            <img className="image-structure" src="https://cdn-icons-png.flaticon.com/512/4144/4144517.png" />
                            <h1 className="headings">Cloud Security</h1>
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
                <Link to="/subscribe/cyber" >
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



export default CyberCourse


