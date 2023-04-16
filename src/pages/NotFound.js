import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div style={{margin:'6rem auto'}}>
            <h1>Page Not Found</h1>
            <Link to={'/'}><p>Click here to go Home</p></Link>
        </div>
     );
}
 
export default NotFound;