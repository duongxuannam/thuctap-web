import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import routes from './routes';
import Footer from './components/Footer';
import Header from './components/Header';
import { Helmet } from 'react-helmet'



class App extends Component {
  componentDidMount() {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }
  render() {
    return (
      <React.Fragment>
      <Helmet>
        <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
      </Helmet>
      {/* <div className="ads"> */}
       <ins className="adsbygoogle"
         style={{display:'block'}} 
         data-ad-client="ca-pub-9378724246417115"
         data-ad-format="auto"
         data-full-width-responsive="true"></ins>
      {/* </div> */}

      <Router >
        <React.Fragment>
        <div id="pjWrapper" class="wrapper">
          <Header />
          {this.showContentMenus(routes)}
        </div>
        <Footer />
        </React.Fragment>
      </Router>
      </React.Fragment>

    );
  };

  showContentMenus = (routes) => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        );
      });
    };
    return <Switch>{result}</Switch>;
  }
}

export default App;
