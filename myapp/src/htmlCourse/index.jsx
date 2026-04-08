import { Component } from "react";
import { Link } from "react-router-dom"
import './index.css'
import Cookies from 'js-cookie'



class htmlCourse extends Component {
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
        const response = await fetch(`http://localhost:3000/subscribed?course=web`, options)
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
                <h1 className="heading-course-alignment">Full Stack Fundamentals</h1>
                <div className="htmlcssjavascript">
                    <Link className="text-decor-div" to="/courseDisplay/html">
                        <div className="course-div">
                            <img className="image-structure" src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" />
                            <h1 className="headings">HTML</h1>
                        </div>
                    </Link>
                    <Link className="text-decor-div" to="/courseDisplay/css">
                        <div className="course-div">
                            <img className="image-structure" src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" />
                            <h1 className="headings">CSS</h1>
                        </div>
                    </Link>
                    <Link className="text-decor-div" to="/courseDisplay/javascript">
                        <div className="course-div">
                            <img className="image-structure" src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" />
                            <h1 className="headings">Java Script</h1>
                        </div>
                    </Link>
                </div>
                <h1 className="heading-course-alignment">DataBases</h1>
                <div className="sqlmongo">
                    <Link className="text-decor-div" to="/courseDisplay/mongodb">
                        <div className="course-div">
                            <img className="image-structure" src="https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg" />
                            <h1 className="headings">mongo</h1>
                        </div>
                    </Link>
                    <Link className="text-decor-div" to="/courseDisplay/sql">
                        <div className="course-div">
                            <img className="image-structure" src="https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg" />
                            <h1 className="headings">sql</h1>
                        </div>
                    </Link>
                </div>
                <h1 className="heading-course-alignment">FrameWorks</h1>
                <div className="reactnode">
                    <Link className="text-decor-div" to="/courseDisplay/react">
                        <div className="course-div">
                            <img className="image-structure" src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" />
                            <h1 className="headings">react</h1>
                        </div>
                    </Link>
                    <Link className="text-decor-div" to="/courseDisplay/nodejs">
                        <div className="course-div">
                            <img className="image-structure" src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" />
                            <h1 className="headings">node</h1>
                        </div>
                    </Link>
                </div>
            </div>
        )
    }



    notSubscribed = () => {
        return (
            <div className="contianer-subs">
                <img src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png" />
                <h1>Subscribe Chesukondi</h1>
                <Link to="/subscribe/web" >
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



export default htmlCourse


