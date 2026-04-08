import { Link } from 'react-router-dom'
import './index.css'

const DataDisplay = (props) => {
    const { item } = props
    const { _id, courseName, thumbnailUrl } = item
    return (
        <Link className="div-underline-style" to={`/topicDisplay/${_id}`} >
            <img src={thumbnailUrl} className='image-style' />
            <p className='topic-heading'>{courseName}</p>
        </Link >
    )
}

export default DataDisplay



/* 
{_id: '69a53d97e8c956a844a2aff3', topic: 'node js', videoUrl: 'https://www.youtube.com/watch?v=L72_61', courseName: 'Express JS Framework'}
*/




