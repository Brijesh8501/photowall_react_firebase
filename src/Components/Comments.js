import React, {Component} from 'react'

class Comments extends Component
{
    constructor()
    {
        super()
        this.handleSubmitData = this.handleSubmitData.bind(this)
    }
    handleSubmitData(event)
    {
        event.preventDefault()
        const commentData = event.target.elements.comment.value
        this.props.startAddingComment(commentData, this.props.id)
    }
    render()
    {
        return <div className='comment'>
            {

                this.props.wholeComment.map((comm,index) =>
                {
                    return <p key={index}>{comm}</p>
                })

            }
            <form className='comment-form' onSubmit={this.handleSubmitData}>
           <input type="text" placeholder="comment" name="comment"/>
           <input type="submit" hidden/>
            </form>
        </div>
    }
}
export default Comments