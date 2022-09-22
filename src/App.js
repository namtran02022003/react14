import './App.css';


function App(){
    return(
        <div className="app">
        <div className="header">
          <i style={{fontSize: '34px', float: 'left'}} className="w3-xlarge fa fa-bars" />
        </div>
        <div className="menu-float">
          <div className="menu-float-small">
            <h1 style={{fontSize: '36px', color: '#f1f1f1'}}>Hello</h1>
            <h1 style={{fontSize: '36px', color: '#757575'}}> We are</h1>
            <h1 style={{fontSize: '64px'}}>InShock</h1>
          </div>
          <div className="menu-float-small">
            <p style={{fontSize: '24px', color: '#757575'}}>We build design teams - we break things down and build it
              better - we deliver the best of solutions
            </p>
            <p style={{fontSize: '24px', color: '#757575'}}>InShock means powerfull simplicity
            </p>
          </div>
        </div>
        <div className="header">
          <h4 style={{fontSize: '20px', color: '#757575'}}>MOST RECENT WORK:</h4>
        </div>
        <div className="menu-float">
          <div className="menu-float-small">
            <img src="https://www.w3schools.com/w3images/house1.jpg" width="100%" />
          </div>
          <div className="menu-float-small">
            <img src="https://www.w3schools.com/w3images/house_arch.jpg" width="100%" />
            <p style={{fontSize: '24px', color: '#757575'}}>Demos, Logos, Reports, Names, Events, Media, Wordpress, Google,
              Books, Optimisations</p>
          </div>
        </div>
        <div style={{padding: 0}} className="menu-float">
          <div style={{backgroundColor: 'black'}} className="menu-float-small2 padding">
            <h2>Contact Info</h2>
            <p><i className="fa fa-map-marker" style={{width: '30px'}} /> Chicago, US</p>
            <p><i className="fa fa-phone" style={{width: '30px'}} /> Phone: +00 151515</p>
            <p><i className="fa fa-envelope" style={{width: '30px'}}> </i> Email: mail@mail.com</p>
          </div>
          <div style={{backgroundColor: '#616161'}} className="menu-float-small2 center ">
            <h2>Contact Us</h2>
            <p>If you have an idea.</p>
            <p>What are you waiting for?</p>
          </div>
          <div style={{backgroundColor: '#9e9e9e'}} className="menu-float-small2 center">
            <h2>Like Us</h2>
            <i style={{fontSize: '24px'}} className=" fa fa-facebook-official" />
            <br />
            <i style={{fontSize: '24px'}} className=" fa fa-pinterest-p" />
            <br />
            <i style={{fontSize: '24px'}} className=" fa fa-twitter" />
            <br />
            <i style={{fontSize: '24px'}} className=" fa fa-flickr" />
            <br />
            <i style={{fontSize: '24px'}} className=" fa fa-linkedin" />
          </div>
        </div>
        <div className="padding">
          <p>Powered by <a href="#">w3.css</a></p>
        </div>
      </div>
    )
}
export default App;