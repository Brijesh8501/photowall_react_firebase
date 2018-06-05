import React from 'react'
import PropTypes from "prop-types"
import {Link} from 'react-router-dom'

function Photo(props)
{
    const eachData = props.eachPost
    return <figure className="figure">
        <Link to={`Single/${eachData.id}`}><img src={eachData.imageLink} alt={eachData.description} className="photo"/></Link>
        <figcaption><p>{eachData.description}</p></figcaption>
        <div className="btnContainer">
            <button className="btn" onClick={() => {
                props.startRemovingPost(props.index, eachData.id)
                props.history.push('/')
            }}>Remove
            </button>
            <Link className="btn" to={`Single/${eachData.id}`}>
                <div className="comment-count">
                    <div className="speech-bubble"></div>
                    {props.commentInfo[eachData.id] ? props.commentInfo[eachData.id].length : 0}
                </div>
            </Link>
        </div>
    </figure>;
}
Photo.propTypes = {
    eachPost : PropTypes.object.isRequired,

}

export default Photo