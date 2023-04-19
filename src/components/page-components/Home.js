import Slider from '../slider/Slider';
import classes from './Home.module.css'

const Home = () => {
    return ( 
        <div className={classes.home}>
            <h1>This is The HomePage</h1>
            <Slider />
        </div>
     );
}
 
export default Home;