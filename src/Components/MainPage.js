import React, {Component} from "react"
import PhotoWall from './PhotoWall'
import AddImage from './AddImage'
import {Route, Link} from 'react-router-dom'
import Single from './Single'

class MainPage extends Component
{
    componentDidMount()
    {
        this.props.startLoadingPost()
        this.props.startLoadingComment()
    }
    render() {
        return <div>
            <h1>
                <Link to="/">Photowall</Link>
            </h1>
            <Route exact path = "/" render={() => (
                <div>
                    <PhotoWall {...this.props} />

        </div>
            )}/>
            <Route exact path = "/navPage" render={({history}) => (

                <AddImage {...this.props} onHistoryPass = {history}/>

            )}/>
            <Route exact path = "/Single/:id" render={(params) => (
                <Single {...this.props} {...params}/>
            )}/>
        </div>
    }

}
export default MainPage