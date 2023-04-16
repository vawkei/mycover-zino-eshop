const ErrorModal = (props) => {
    return ( 
        <div>
            <h1 style={{color:'red'}}>{props.error}</h1>
        </div>
     );
}
 
export default ErrorModal;