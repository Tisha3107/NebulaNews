import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default class App extends Component {
  pagesize = 6;
  render() {
    return (
      <div>
        {
          <Router>
            <Navbar />
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <News
                    key="general"
                    pagesize={this.pagesize}
                    country="in"
                    category="general"
                  />
                }
              ></Route>
              <Route
                exact
                path="/business"
                element={
                  <News
                    key="business"
                    pagesize={this.pagesize}
                    country="in"
                    category="business"
                  />
                }
              ></Route>
              <Route
                exact
                path="/entertainment"
                element={
                  <News
                    key="entertainment"
                    pagesize={this.pagesize}
                    country="in"
                    category="entertainment"
                  />
                }
              ></Route>
              <Route
                exact
                path="/general"
                element={
                  <News
                    key="general"
                    pagesize={this.pagesize}
                    country="in"
                    category="general"
                  />
                }
              ></Route>
              <Route
                exact
                path="/health"
                element={
                  <News
                    key="health"
                    pagesize={this.pagesize}
                    country="in"
                    category="health"
                  />
                }
              ></Route>
              <Route
                exact
                path="/science"
                element={
                  <News
                    key="science"
                    pagesize={this.pagesize}
                    country="in"
                    category="science"
                  />
                }
              ></Route>
              <Route
                exact
                path="/sports"
                element={
                  <News
                    key="sports"
                    pagesize={this.pagesize}
                    country="in"
                    category="sports"
                  />
                }
              ></Route>
              <Route
                exact
                path="/technology"
                element={
                  <News
                    key="technology"
                    pagesize={this.pagesize}
                    country="in"
                    category="technology"
                  />
                }
              ></Route>
              <Route exact path="/contact" element={<Contact />}></Route>
            </Routes>
          </Router>
        }
      </div>
    );
  }
}
