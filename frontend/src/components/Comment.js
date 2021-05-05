import { useEffect, useState } from "react";
import { MdMoreVert, MdEdit, MdDoNotDisturbAlt } from "react-icons/md";
import { connect } from "react-redux";
import swal from "sweetalert";
import itinerariesActions from "../redux/actions/itinerariesActions";

const Activity = ({commentInfo, userLogged, itinerary, itineraryId, editOrRemoveComment, paramsId, props}) =>{ 

    const[editingComment, setEditComment]= useState({comment: commentInfo.comment , editing : false})
    var commentId = commentInfo._id
    console.log(editingComment)

    useEffect(()=> {
      setEditComment({...editingComment,
        editing:false})
         // eslint-disable-next-line react-hooks/exhaustive-deps
    },[itinerary])


    const editOrRemove = ((editedComment= null , commentId, paramsId, itineraryId) =>{
      var sendInfo = {editedComment, commentId, paramsId} 
      editOrRemoveComment(sendInfo, itineraryId)
    })
    
    const options = (e)=> swal("Want to modify your comment?", {
        buttons: {
          signup: {text: "Edit", value: "edit"},
          login: {text: "Delete", value: "delete"},
          cancel: "Cancel",
        },
      })
      .then((value) => {
        switch (value) {         
          case "delete":
            editOrRemove(null, commentId, paramsId, itineraryId)            
            break      
          case "edit":
            editComment()
            break         
          default:           
        }
      })

    const editComment = (() => {
      setEditComment({...editingComment, editing:true})
    })

    const readComment = ((e) => {
      let field = e.value
      setEditComment({
        ...editingComment,
        comment : field
      })
    })

    const send = (() => {
        if (editingComment.comment !=="") {
          var comment = editingComment.comment
          editOrRemove(comment, commentInfo, paramsId, itineraryId)
        } else { swal("You cannot send empty comment", "Write something!", "error")}

      
      
    })
    

    return(
        <div className="comment" >
            <div className="commentContent">            
                <div className="commentProfileImg" style={{backgroundImage: `url('${commentInfo.img}')`}}/>
                <div className="nameAndComment">
                    <p>{commentInfo.userName}:</p>
                    {!editingComment.editing 
                    ? <h4>{commentInfo.comment}</h4> 
                    : 
                    <div className="divEditCommentInput"> 
                      <input className="editCommentInput" name ="comment" onChange={(e)=> readComment(e.target)} type="text" value={editingComment.comment} ></input>
                      <MdEdit className="iconsEditComment" onClick={() => send()}/>
                      <MdDoNotDisturbAlt className="iconsEditComment"onClick={() => setEditComment({...editingComment, editing:false})} /> 
                    </div> }
                </div>                                    
            </div> 
            {!editingComment.editing && userLogged && userLogged.id === commentInfo.userId ?
            <MdMoreVert className="optionIcons" name={commentInfo.comment} onClick={(e) => options(e.target)}/> : null }
        </div> 
    )
}

const mapStateToProps = state => {
    return {
        userLogged: state.loginReducer.userLogged,
        itineraries: state.cityReducer.itineraries,
    }
  }
const mapDispatchToProps = {
  editOrRemoveComment: itinerariesActions.editOrRemoveComment,
  editComment: itinerariesActions.editComment
}


export default connect(mapStateToProps, mapDispatchToProps)(Activity)
