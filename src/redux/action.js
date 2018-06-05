import database from '../database/config'
export function startAddingPost(postdata)
{
    return (dispatch) =>
    {
        return database.ref('postInfo').update({[postdata.id]:postdata}).then(() =>
        {
            dispatch(AddPost(postdata))
        }).catch((error) => {
          console.log(error)
        })
    }

}
export function startAddingComment(postcomment, postid)
{
    return (dispatch)=>
    {
        return database.ref(`commentInfo/${postid}`).push(postcomment).then(()=>
        {
            dispatch(AddComment(postcomment,postid))
        })
    }
}
export function startLoadingPost()
{
    return (dispatch) =>
    {
        return database.ref('postInfo').once('value').then((alldata) =>
        {
            let postDataArray = []
            alldata.forEach((childalldata)=>{
                postDataArray.push(childalldata.val())

            })
            dispatch(LoadingPost(postDataArray))
        })
    }
}
export function startLoadingComment()
{
    return (dispatch) =>
    {
        return database.ref('commentInfo').once('value').then((alldata) =>
        {
          let comments = {}
          alldata.forEach((childalldata)=>
          {
            comments[childalldata.key] = Object.values(childalldata.val())
          })
            dispatch(LoadingComment(comments))
        })

    }
}
export function startRemovingPost(index, id)
{
    return (dispatch) =>
    {
        return database.ref(`postInfo/${id}`).remove().then(()=>{
            dispatch(RemovePost(index))
        })
    }
}

//remove
export function RemovePost(postindex)
{
    return {
        type:"REMOVE_POST",
        index:postindex
    }
}
export function AddPost(postFromAddImage)
{
    return {
        type:"ADDING_POST",
        post:postFromAddImage
    }
}
export function AddComment(commentpass,postid)
{
    return {
        type : 'ADDING_COMMENT',
        commentpass,
        postid
    }
}
export function LoadingPost(postfirebase)
{
    return{
        type:'LOADING_POST',
        postfirebase
    }
}
export function LoadingComment(commentfirebase)
{
    return{
        type:'LOADING_COMMENT',
        commentfirebase
    }
}