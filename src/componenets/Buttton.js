import React from 'react'
import Base from '../base/Base'

import { SocialIcon } from 'react-social-icons';

const Buttton = () => {
  return (
    <Base
    title = "Buttons"
    >
    <div className="row">
        <div className="col-lg-6">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Circle Buttons</h6>
                </div>
                <div className="card-body">
                    <p>Use Font Awesome Icons (included with this theme package) along with the circle
                        buttons as shown in the examples below!</p>
               

                <div className="mb-2">
                    <code>.btn-circle</code>
                </div>
                
                <SocialIcon network="twitter"  style={{ height: 40, width: 40 }}/>
                <SocialIcon network="facebook" style={{ height: 40, width: 40 }}/>
                <SocialIcon network="whatsapp" style={{ height: 40, width: 40 }}/>
                <SocialIcon network="telegram" style={{ height: 40, width: 40 }}/>
                <SocialIcon network="instagram"style={{ height: 40, width: 40 }} />
            

                <div className="mt-4 mb-2">
                    <code>.btn-circle .btn-sm</code>
                </div>
                
                <SocialIcon network="twitter"  style={{ height: 25, width: 25 }}/>
                <SocialIcon network="facebook" style={{ height: 25, width: 25 }}/>
                <SocialIcon network="whatsapp" style={{ height: 25, width: 25 }}/>
                <SocialIcon network="telegram" style={{ height: 25, width: 25 }}/>
                <SocialIcon network="instagram"style={{ height: 25, width: 25 }} />

                <div className="mt-4 mb-2">
                    <code>.btn-circle .btn-lg</code>
                </div>
                
                <SocialIcon network="twitter" />
                <SocialIcon network="facebook" />
                <SocialIcon network="whatsapp" />
                <SocialIcon network="telegram" />
                <SocialIcon network="instagram" />
            </div>
        </div>

        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Brand Buttons</h6>
            </div>
            <div className="card-body">
                <p>Google and Facebook buttons are available featuring each company's respective
                    brand color. They are used on the user login and registration pages.</p>
                <p>You can create more custom buttons by adding a new color variable in the
                    file and then using the Bootstrap button variant
                    mixin to create a new style, as demonstrated in the 
                    file.</p>
                    
                <button className="btn btn-google btn-block"><SocialIcon network="facebook" style={{ height: 25, width: 25 }}/>
                .btn-facebook</button>
                <button className="btn btn-google btn-block"><SocialIcon network="google" style={{ height: 25, width: 25 }}/>
                .btn-facebook</button>

            </div>
        </div>

    </div>

    <div className="col-lg-6">

        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Split Buttons with Icon</h6>
            </div>
            <div className="card-body">
                <p>Works with any button colors, just use the <code>.btn-icon-split</code> class and
                    the markup in the examples below. The examples below also use the
                    <code>.text-white-50</code> helper class on the icons for additional styling,
                    but it is not required.</p>
                <button className="btn btn-primary btn-icon-split">
                    <span className="icon text-white-50">
                        <i className="fas fa-flag"></i>
                    </span>
                    <span className="text">Split Button Primary</span>
                </button>
                <div className="my-2"></div>
                <button className="btn btn-success btn-icon-split">
                    <span className="icon text-white-50">
                        <i className="fas fa-check"></i>
                    </span>
                    <span className="text">Split Button Success</span>
                </button>
                <div className="my-2"></div>
                <button  className="btn btn-info btn-icon-split">
                    <span className="icon text-white-50">
                        <i className="fas fa-info-circle"></i>
                    </span>
                    <span className="text">Split Button Info</span>
                </button>
                <div className="my-2"></div>
                <button className="btn btn-warning btn-icon-split">
                    <span className="icon text-white-50">
                        <i className="fas fa-exclamation-triangle"></i>
                    </span>
                    <span className="text">Split Button Warning</span>
                </button>
                <div className="my-2"></div>
                <button  className="btn btn-danger btn-icon-split">
                    <span className="icon text-white-50">
                        <i className="fas fa-trash"></i>
                    </span>
                    <span className="text">Split Button Danger</span>
                </button>
                <div className="my-2"></div>
                <button  className="btn btn-secondary btn-icon-split">
                    <span className="icon text-white-50">
                        <i className="fas fa-arrow-right"></i>
                    </span>
                    <span className="text">Split Button Secondary</span>
                </button>
                <div className="my-2"></div>
                <button className="btn btn-light btn-icon-split">
                    <span className="icon text-gray-600">
                        <i className="fas fa-arrow-right"></i>
                    </span>
                    <span className="text">Split Button Light</span>
                </button>
                <div className="mb-4"></div>
                <p>Also works with small and large button classes!</p>
                <button  className="btn btn-primary btn-icon-split btn-sm">
                    <span className="icon text-white-50">
                        <i className="fas fa-flag"></i>
                    </span>
                    <span className="text">Split Button Small</span>
                </button>
                <div className="my-2"></div>
                <button className="btn btn-primary btn-icon-split btn-lg">
                    <span className="icon text-white-50">
                    </span>
                    <span className="text">Split Button Large</span>
                </button>
            </div>
        </div>

    </div>

</div>


    </Base>
  )
}

export default Buttton