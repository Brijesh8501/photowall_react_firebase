import React, {Component} from 'react'
import Photo from './Photo'
import Comments from './Comments'

class Single extends Component
{
  render()
  {
      const {match, postInfo} = this.props
      const idpass = Number(match.params.id)
      console.log(this.props.commentInfo[idpass])
      const idfind = postInfo.find((idpost) => idpost.id === idpass)
      const commentInfoAccId = this.props.commentInfo[idpass] || []
      const index = this.props.postInfo.findIndex((postindex) => postindex.id === idpass)
      return <div className='single-photo'>
          <Photo eachPost = {idfind} {...this.props} index={index}/>
          <Comments startAddingComment = {this.props.startAddingComment} wholeComment = {commentInfoAccId} id = {idpass}/>

      </div>
  }
}
export default Single