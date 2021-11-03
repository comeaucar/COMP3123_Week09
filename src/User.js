function User(props){
    return(
        <div>
            <h3>{props.studentId}</h3>
            <h4>{props.firstName} {props.lastName}</h4>
        </div>
    )
}

export default User