import React, {Component} from 'react'

import 'header.less'

class Header extends Component {
  render () {
    return (
      <header className='main-header'>
	<nav>
	  <ul className='main-menu'>
	    <li className='logo'><a href='#'>Home</a></li>
	    <li><a href='#'>Store</a></li>
	  </ul>
	</nav>
      </header>
    ) 
  }
}

export default Header
