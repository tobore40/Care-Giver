import React from 'react'
import { CropSquareOutlined } from '@material-ui/icons'

import './Main.css'

function Main() {
  return (
      <div className='main'>
             <section id="featured-services" className="featured-services">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
              <div className="icon-box">
                <div className="icon"><CropSquareOutlined className='icon-box' /></div>
                <h4 className="title"> Normal checkup</h4>
                <p className="description">Voluptatum deleniti atque corrupti 2 times per month quas molestias excepturi</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
              <div className="icon-box">
                <div className="icon"><CropSquareOutlined className='icon-box' /></div>
                <h4 className="title">Blood Test</h4>
                <p className="description">At vero eos et accusamus et 1 week odio dignissimos ducimus qui blanditiis</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
              <div className="icon-box">
                <div className="icon"><CropSquareOutlined className='icon-box' /></div>
                <h4 className="title">Body temperature</h4>
                <p className="description">Excepteur sint occaecat 37.6 non proident, 98.6 sunt in culpa qui officia</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
              <div className="icon-box">
                <div className="icon"><CropSquareOutlined className='icon-box'/></div>
                <h4 className="title">Medicine use</h4>
                <p className="description">Duis aute dolor 10-12 in reprehenderit in voluptate 8-12 velit esse cillum dolore</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Main