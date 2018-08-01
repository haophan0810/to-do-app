import React, { Component } from 'react'

export default class Content extends Component {
    constructor(props) {
        super(props);
        
    }
    
  render() {
      
    return (     
       
        
        <div className="col-lg-4">
        
          <div className="row align-items-center">
            <div className={'col-lg-7 '+ this.props.order}>
              <div className="p-4">
                <img className="img-fluid rounded-circle" src={this.props.srcImg} alt='' />
              </div>
            </div>
            <div className="col-lg-5 order-lg-1">
              <div className="p-4">
                <h3 className="display-5">{ this.props.title }</h3>
                <p>{ this.props.description }</p>
              </div>   
              <div className='row'>
            <div className='btn btn-group'>
                <div className='btn btn-info'>Edit</div>
                <div className='btn btn-warning'>Delete</div>

            </div>
            </div>           
            </div>
            
         
        </div>
        </div>
    )
  }
}
