import React, {Component} from 'react'

import 'header.less'

class Header extends Component {
  render () {
    return (
      <header className='main-header'>
	<nav>
	  <ul className='main-menu'>
	    <li><a href='#'>Store</a></li>
	  </ul>
	</nav>
      </header>
    ) 
  }
}

export default Header
