import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Main/Profile";
import Music from "./components/Navbar/Music/Music";
import News from "./components/Navbar/News/News";
import Settings from "./components/Navbar/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = (props) => {
  return (
    <div className="app_wrapper">
      <Header />
      <Navbar />
      <div className="app_wrapper_content">
        {/* <Route path='/dialogs' component={Dialogs} /> */}

        <Route
          path="/dialogs"
          render={() => <DialogsContainer store={props.store} />}
        />
        <Route path="/profile" render={() => <Profile store={props.store} />} />
        <Route path="/music" render={() => <Music />} />
        <Route path="/news" render={() => <News />} />
        <Route path="/settings" render={() => <Settings />} />
      </div>
    </div>
  );
};

export default App;
