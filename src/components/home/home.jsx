import Logout from './logout/logout';
import TimeMangement from './timeMangement/timeMangement';

const Home = ()=>{
    return(
        <div className="container">
            <div className="home">
                <div className="row">
                    <Logout/>
                    <TimeMangement/>
                </div>
            </div>
        </div>
    )
}
export default Home;