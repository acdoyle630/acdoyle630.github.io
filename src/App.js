import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setScreenSize } from './actions/screen-size-action'
import NavBarContainer from './modules/NavBar/containers/nav-bar-container'
import Headline from './modules/Headline/components/headline'
import AboutContainer from './modules/About/containers/about-container'
import './App.css'

class App extends Component {

  componentWillMount(){
    this.resize()
    window.addEventListener('resize', this.resize)
  }

  resize = () => {
    this.props.setScreenSize(window.innerWidth)
  }

  scrollToMyRef = (elementId) => {
      if(elementId){
      const el = document.getElementById(elementId)
      el.scrollIntoView({behavior: 'smooth'})
    }
  }
  
  render() {
    return (
      <div>
        <NavBarContainer scrollToMyRef={this.scrollToMyRef} />
        <Headline />
        <AboutContainer />
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
    return {
      screenSize: state.screenSize
    };
  }

  const mapDispatchToProps = dispatch => bindActionCreators(
    {
      setScreenSize,
    },
    dispatch,
  )
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(App);
  