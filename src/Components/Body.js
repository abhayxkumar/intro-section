import React, { Component } from 'react'
import img from '../images/image-hero-desktop.png'
import audiophile from '../images/client-audiophile.svg'
import databiz from '../images/client-databiz.svg'
import maker from '../images/client-maker.svg'
import meet from '../images/client-meet.svg'
import './styles/body.css'


export default class Body extends Component {
  render() {
    return (
      <div>
        <div className="body-container">
            <div className="body-container-left">
                <h1>Make remote work</h1>
                <p>Get your team in sync, no matter your location.<br></br>
                    Streamline processes, create team rituals, and<br></br>
                    watch productivity soar.
                </p>
                <button>Learn more</button>
                <div className='logo-div'>
                <img className='client-logo' src={audiophile} alt="audiophile" />
                <img className='client-logo' src={databiz} alt="databiz" />
                <img className='client-logo' src={maker} alt="maker" />
                <img className='client-logo' src={meet} alt="meet" />
                </div>
                
            </div>
            <div className="body-container-right">
                <img className='body-img' src={img} alt="img" />
            </div>
        </div>
      </div>
    )
  }
}

