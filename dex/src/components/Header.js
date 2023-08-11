import React from 'react'
import Logo from '../moralis-logo.svg'
import ETH from '../eth.svg'

function Header() {
  return (
    <header>
      <div className='leftH'>
          <img src={Logo} alt='logo' className='logo' />
          <div className='headerItem'>Swap</div>
          <div className='headerItem'>Tokens</div>
      </div>
      <div className='rightH'>
        <div className='headerItem'>
          <img src={ETH} alt='eth' className='eth' />
          Ethereum
        </div>
        <div className='connectButton'>
          Connect
        </div>
      </div>
    </header>
  )
}

export default Header