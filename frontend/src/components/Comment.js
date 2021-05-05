import { MdMoreVert } from "react-icons/md";
import { connect } from "react-redux";
import swal from "sweetalert";
import itinerariesActions from "../redux/actions/itinerariesActions";

const Activity = ({commentInfo, userLogged}) =>{ 

    console.log(commentInfo)


    const deleteComment = ((userId, comment) =>{


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
              console.log(e.name)            
            break      
          case "edit":
            break         
          default:           
        }
      })


    return(
        <div className="comment" >
            <div className="commentContent">            
                <div className="commentProfileImg" style={{backgroundImage: `url('${commentInfo.img}')`}}/>
                <div className="nameAndComment">
                    <p>{commentInfo.userName}:</p>
                    <h4>{commentInfo.comment}</h4> 
                </div>                                    
            </div> 
            {userLogged && userLogged.id === commentInfo.userId ?
            <MdMoreVert className="optionIcons" name={commentInfo.comment} onClick={(e) => options(e.target)}/> : null }
        </div> 
    )
}

const mapStateToProps = state => {
    return {
        itineraries: state.cityReducer.itineraries,
        userLogged: state.loginReducer.userLogged,
    }
  }
const mapDispatchToProps = {
  removeComment: itinerariesActions.removeComment,
  editComment: itinerariesActions.editComment
}


export default connect(mapStateToProps, mapDispatchToProps)(Activity)
