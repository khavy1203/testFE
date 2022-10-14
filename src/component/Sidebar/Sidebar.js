import './Sidebar.css'
const Sidebar = () => {
    return (
        <>
             <ul>
              <li>
                  <a className='top' href="#">
                      <span></span>
                      Home
                  </a>
              </li>
              <li>
                  <a href="#">
                      <span></span>
                      About
                  </a>
              </li>
              <li>
                  <a href="#">
                      <span></span>
                      Settings
                  </a>
              </li>
              <li>
                  <a href="#">
                      <span></span>
                      Contact
                  </a>
              </li>
              <li>
                  <a href="#">
                      <span></span>
                      Feedback
                  </a>
              </li>
          </ul>
        </>
    )
}
export default Sidebar;
