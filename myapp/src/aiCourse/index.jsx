import { Component } from "react";
import { Link } from "react-router-dom"
import './index.css'
import Cookies from 'js-cookie'



class aiCourse extends Component {
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
        const response = await fetch(`http://localhost:3000/subscribed?course=ai`, options)
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
                <h1 className="heading-course-alignment">Fundamentals of AI/ML</h1>
                <div className="htmlcssjavascript">
                    <Link className="text-decor-div" to="/courseDisplay/pythonForAI">
                        <div className="course-div">
                            <img className="image-structure" src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" />
                            <h1 className="headings">Python</h1>
                        </div>
                    </Link>
                    <Link className="text-decor-div" to="/courseDisplay/mathForML">
                        <div className="course-div">
                            <img className="image-structure" src="https://upload.wikimedia.org/wikipedia/commons/2/2e/Pi-symbol.svg" />
                            <h1 className="headings">Math fundamentals</h1>
                        </div>
                    </Link>
                </div>
                <h1 className="heading-course-alignment">Data/ML/DL</h1>
                <div className="sqlmongo">
                    <Link className="text-decor-div" to="/courseDisplay/dataAnalysis">
                        <div className="course-div">
                            <img className="image-structure" src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png" />
                            <h1 className="headings">dataAnalysis</h1>
                        </div>
                    </Link>
                    <Link className="text-decor-div" to="/courseDisplay/machineLearning">
                        <div className="course-div">
                            <img className="image-structure" src="https://cdn-icons-png.flaticon.com/512/4149/4149675.png" />
                            <h1 className="headings">Machine Learning</h1>
                        </div>
                    </Link>
                    <Link className="text-decor-div" to="/courseDisplay/deepLearning">
                        <div className="course-div">
                            <img className="image-structure" src="https://cdn-icons-png.flaticon.com/512/2103/2103633.png" />
                            <h1 className="headings">Deep Learning</h1>
                        </div>
                    </Link>
                </div>
                <h1 className="heading-course-alignment">NLP/ComputerVision</h1>
                <div className="reactnode">
                    <Link className="text-decor-div" to="/courseDisplay/nlp">
                        <div className="course-div">
                            <img className="image-structure" src="https://cdn-icons-png.flaticon.com/512/4712/4712100.png" />
                            <h1 className="headings">NLP</h1>
                        </div>
                    </Link>
                    <Link className="text-decor-div" to="/courseDisplay/computerVision">
                        <div className="course-div">
                            <img className="image-structure" src="https://cdn-icons-png.flaticon.com/512/2881/2881142.png" />
                            <h1 className="headings">Computer Vision</h1>
                        </div>
                    </Link>
                </div>
                <h1 className="heading-course-alignment">GenAI/AIprojects</h1>
                <div className="reactnode">
                    <Link className="text-decor-div" to="/courseDisplay/generativeAI">
                        <div className="course-div">
                            <img className="image-structure" src="https://cdn-icons-png.flaticon.com/512/8637/8637093.png" />
                            <h1 className="headings">GenerativeAI</h1>
                        </div>
                    </Link>
                    <Link className="text-decor-div" to="/courseDisplay/mlops">
                        <div className="course-div">
                            <img className="image-structure" src="https://cdn-icons-png.flaticon.com/512/9068/9068756.png" />
                            <h1 className="headings">Mlops</h1>
                        </div>
                    </Link>
                    <Link className="text-decor-div" to="/courseDisplay/aiProjects">
                        <div className="course-div">
                            <img className="image-structure" src="https://cdn-icons-png.flaticon.com/512/4149/4149657.png" />
                            <h1 className="headings">aiProjects</h1>
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
                <Link to="/subscribe/ai" >
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



export default aiCourse


