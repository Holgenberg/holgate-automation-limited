import { Outlet, Link } from "react-router-dom";
import React from 'react';
import { slide as Menu } from 'react-burger-menu'
import './BurgerMenu.css'

export class Layout extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
        menuOpen: false,
    }
  }

  openMenu() {
    this.setState({ menuOpen: true })
  }

  closeMenu() {
    this.setState({ menuOpen: false })
  }

  render(){

    var styles = {
      bmBurgerButton: {
        position: 'fixed',
        width: '36px',
        height: '30px',
        left: '36px',
        top: '36px'
      },
      bmBurgerBars: {
        background: '#373a47'
      },
      bmBurgerBarsHover: {
        background: '#a90000'
      },
      bmCrossButton: {
        height: '24px',
        width: '24px'
      },
      bmCross: {
        background: 'black'
      },
      bmMenuWrap: {
        position: 'fixed',
        height: '100%'
      },
      bmMenu: {
        background: 'white',
        padding: '2.5em 1.5em 0',
        fontSize: '1.15em'
      },
      bmMorphShape: {
        fill: '#373a47'
      },
      bmItemList: {
        color: '#b8b7ad',
        padding: '0.8em'
      },
      bmItem: {
        display: 'inline-block'
      },
      bmOverlay: {
        background: 'rgba(0, 0, 0, 0.3)'
      }
    }

    return (
      <>
        <Menu styles={ styles }
          isOpen={this.state.menuOpen}
          closeCallback={this.closeMenu.bind(this)}>
          <a id="home" href="/">Home</a>
        </Menu>
        <Outlet />
      </>
    )
  }
};

export default Layout;
