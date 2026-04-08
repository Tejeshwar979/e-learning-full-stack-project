import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './Login'
import htmlCourse from './htmlCourse'
import Register from './Register'
import Home from './Home'
import Course from './htmlCourse'
import courseDisplay from './courseDisplay'
import TopicDisplay from './topicDisplay'
import Subscribe from './Subscribe'
import aiCourse from './aiCourse'
import CodeEditor from './CodeEditor'
import CyberCourse from './CyberCourse'
import DevopsCourse from './DevopsCourse'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/Home" component={Home} />
        <Route exact path="/Register" component={Register} />
        <Route exact path="/Course" component={Course} />
        <Route exact path="/htmlCourse" component={htmlCourse} />
        <Route exact path="/aiCourse" component={aiCourse} />
        <Route exact path="/DevopsCourse" component={DevopsCourse} />
        <Route exact path="/CyberCourse" component={CyberCourse} />
        <Route exact path="/courseDisplay/:topic" component={courseDisplay} />
        <Route exact path="/topicDisplay/:id" component={TopicDisplay} />
        <Route exact path="/subscribe/:topic" component={Subscribe} />
        <Route exact path="/CodeEditor" component={CodeEditor} />
      </Switch>
    </BrowserRouter>
  )
}



export default App


