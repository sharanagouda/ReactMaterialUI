import React, { Component } from "react";
import { BrowserRouter as Router, Route,Switch, Link } from "react-router-dom";
import Home from "../container/Home";
import SignUp from "../container/SignUp";
import Login from "../container/Login";
import MainHome from "../container/MainHome";
import AxiosSubscriber from "../RxJS_Test";


class Routes extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
          <Route path ="/" exact component={MainHome} />
          <Route path="/main" exact component={Home}/>
          <Route path="/login" exact component={Login}/>
          <Route path="/signup" exact component={SignUp}/>
          <Route path="/axiosSubscriber" exact component={AxiosSubscriber} />
          <Route component={PageNotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const PageNotFound =()=>(<div style={{marginTop:'75px'}}>
    <section className="section content has-text-centered" style={{minHeight:'750px'}}>
      <h1 style={{textAlign:"center", color:"#8B0000"}}> #404 Page not found</h1>
      <p className='is-size-5' style={{borderTop:'1px solid #222', paddingTop:'20px', textAlign:"center"}}>Looks like you found a page that doesn't exist!</p>
      <p style={{textAlign:"center"}}>You can go back home by clicking <Link to='/'>here</Link>.</p>
    </section>
  </div>)

export default Routes;