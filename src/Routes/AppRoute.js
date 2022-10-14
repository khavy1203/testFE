import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from "../component/Home/Home";

const AppRoutes = (props) => {
    return (
    <>  
    <Router>
      
        <Routes>
        <Route exact path="/" element= {<Home/>}/>
        <Route exact path="/Service" element={"Service"}/>
        <Route exact path="/News" element={"Blogs"}/>
        <Route exact path="/Contact" element={"Contact"}/>
        <Route path="*" element={"404"}/>
        </Routes>
  
    </Router>
    </>
    )

}
export default AppRoutes;