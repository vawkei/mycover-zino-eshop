const ErrorModal = (props) => {
    return ( 
        <div>
            <p style={{color:'red'}}>{props.error}</p>
        </div>
     );
}
 
export default ErrorModal;