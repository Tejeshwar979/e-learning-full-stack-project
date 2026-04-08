import { Component } from "react";
// import { Redirect } from 'react-router-dom'  
import Header from "../Header";
import './index.css'



class Home extends Component {

    sendWebDev = () => {
        this.props.history.push('/htmlCourse')
    }

    ai = () => {
        this.props.history.push('/aiCourse')
    }

    render() {
        return (
            <div className="total-cont">
                <Header />
                <div className="home-page-cont">

                    <div className="div-home-page">
                        <div className="div-cont-man-box">
                            <h1>Master Your Future with Expert-Led Courses</h1>
                            <p>Learn from industry professionals and gain the skills you need to succeed in the modern digital landscape.</p>
                        </div>
                        <img className="main-image" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwlhQ8mdhTbJLHQI5q8oQRqIv6U35A4xyN_OfBhMf9IkD6PHKgLJOZVYnDmnLxXB0SYeDX5eY1k3qKwbZWWnmgaWTv5KwpVhNAnuPKHZnL7HHwVfyLb-S_oMWAiDVnS4RutMaXVsd9reSgup-0WgRu5tVtnu7aWSG7gnPIbZgmrTJDdxyDz2lr1pTEYio6Sv-G4GkiaWMrXKR37eETCHsqB5QgkjEMm43UXgVvEaiDtDgMavUh_PJE0AStYaExA4wh6f5hr2t3QII" />
                    </div>

                    <div className="footer-content-cont">
                        <div className="div-cont-learnNova-text">
                            <h1>Why Choose LearnNova ?? </h1>
                            <p className="home-para">
                                Discover the advantages of learning with our premium pltform designed for your success
                            </p>
                        </div>

                        <div className="div-main-cont-footer">

                            <div className="footer-cont-style">
                                <img src="" className="clock-img" alt="expert" />
                                <h1 className="footer-headings">Expert Instructors </h1>
                                <p className="footer-para">Learn from hand-picked industry professionals with decades of real-world experience at top global companies</p>
                            </div>

                            <div className="footer-cont-style">
                                <img src="" alt="clock" />
                                <h1 className="footer-headings">Flexible Learning</h1>
                                <p className="footer-para">Study on Your own schedule with lifetime access to course across all your mobile and desktop devices</p>
                            </div>

                            <div className="footer-cont-style">
                                <img src="" alt="right" />
                                <h1 className="footer-headings">Certificate of Completion</h1>
                                <p className="footer-para">Earn a recogized digital certificate to showcase your new skills and boost your professional LinkedIn profile</p>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        )
    }
}



export default Home



// https://lh3.googleusercontent.com/aida-public/AB6AXuAwlhQ8mdhTbJLHQI5q8oQRqIv6U35A4xyN_OfBhMf9IkD6PHKgLJOZVYnDmnLxXB0SYeDX5eY1k3qKwbZWWnmgaWTv5KwpVhNAnuPKHZnL7HHwVfyLb-S_oMWAiDVnS4RutMaXVsd9reSgup-0WgRu5tVtnu7aWSG7gnPIbZgmrTJDdxyDz2lr1pTEYio6Sv-G4GkiaWMrXKR37eETCHsqB5QgkjEMm43UXgVvEaiDtDgMavUh_PJE0AStYaExA4wh6f5hr2t3QII

/* 

<div className="courses-cont">
                        <h1 className="course-heading">Courses We Offer</h1>
                        <div className="courses-offered">
                            <div className="individual-cont" onClick={this.sendWebDev} >
                                <img className="logo-image" src="https://logowik.com/content/uploads/images/webdev5489.jpg" />
                                <h1 className="course-names">WEB DEV</h1>
                            </div>
                            <div className="individual-cont" onClick={this.ai}>
                                <img className="logo-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpF-slU6bu5PAIJw0Aw0GAigJ8qmdQGy7YFw&s" />
                                <h1 className="course-names">AI/ML</h1>
                            </div>
                        </div>
                    </div>


*/




