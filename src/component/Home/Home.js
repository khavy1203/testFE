import './Home.css';
import Content from '../Content/Content';
import Footer from '../Footer/Footer';
import Sidebar from '../Sidebar/Sidebar';
const Home = () => {
    return (
        <>
         <div className="container">
            <div className="sidebar">
                <Sidebar/>
            </div>
            <div className="content">
                <Content/>
                <hr />
                <Footer/>
            </div>
        </div>
        </>
    )
}
export default Home;
