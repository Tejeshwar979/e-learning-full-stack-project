import './index.css'
import { withRouter, Link } from 'react-router-dom'
import Cookies from "js-cookie"



const Header = (props) => {
    const sendWebDev = () => {
        const { history } = props
        history.push('/htmlCourse')
    }

    const ai = () => {
        const { history } = props
        history.push('/aiCourse')
    }
    const returnToHome = () => {
        const { history } = props
        history.push('/Home')
    }
    const logout = () => {
        Cookies.remove("jwtToken")
        const { history } = props
        history.replace('/')
    }
    return (
        <nav className='nav-cont'>
            <h1 onClick={returnToHome} className='AppName'>LearnNova</h1>
            <div className='inner-div-notes-logout'>
                <h1 onClick={sendWebDev} className="AppName">WEB DEV</h1>
                <h1 onClick={ai} className="AppName">AI/ML</h1>
                <Link to="/CyberCourse">
                    <h1 className='AppName' >Cyber</h1>
                </Link>
                <Link to="/DevopsCourse">
                    <h1 className='AppName' >Devops</h1>
                </Link>
                <Link to="/CodeEditor">
                    <h1 className='AppName'>Code Editor</h1>
                </Link>
                <button onClick={logout} className='logout-btn-style'>Logout</button>
            </div>
        </nav>
    )
}


export default withRouter(Header)



/*
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
*/
