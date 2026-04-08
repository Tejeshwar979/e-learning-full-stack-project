
import { Component } from "react";
import Editor from "@monaco-editor/react"
import './index.css'



class CodeEditor extends Component {
    state = { code: `console.log("Hello Learners")`, language: "javascript", output: "No Output" }
    handleCodeChange = (value) => {
        this.setState({ code: value })
    }

    changeLanguage = (event) => {
        console.log(event.target.value)
        if (event.target.value === 'javascript') {
            this.setState({ code: `console.log("Hello Learners")`, language: event.target.value, output: "No Output" })
        }
        else if (event.target.value === "python") {
            this.setState({ code: `print("Hello Python")`, language: event.target.value, output: "No Output" })
        }
    }

    runTheCode = async () => {
        const { code, language } = this.state
        const options = {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                language: language,
                code: code
            })
        }
        const response = await fetch("http://localhost:3000/run", options)
        const data = await response.json()
        this.setState({ output: data.message })
    }

    clearCode = () => {
        this.setState({ code: `console.log("Hello Learners")` })
    }

    render() {
        const { code, language, output } = this.state
        return (
            <div className="Code-editor-main-cont">

                <div className="code-editor-style" >
                    <Editor
                        height="100%"
                        language={language}
                        value={code}
                        theme="vs-dark"
                        onChange={this.handleCodeChange}
                    />
                </div>


                <div className="button-div">
                    <div>
                        <select onChange={this.changeLanguage}>
                            <option value="python" >python</option>
                            <option value="javascript" selected>javascript</option>
                        </select>
                    </div>
                    <div>
                        <button onClick={this.runTheCode} className="runButton">Run</button>
                        <button onClick={this.clearCode} className="clearButton" >Clear Code</button>
                    </div>
                    <div>
                        <p>OutPut</p>
                        <textarea rows="20" cols="50" value={output} readOnly>
                        </textarea>
                    </div>
                </div>


            </div>
        )
    }
}



export default CodeEditor


