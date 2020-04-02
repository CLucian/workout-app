import React from 'react';
import ReactDOM from 'react-dom';


class Modal extends React.Component {
  constructor(props){
    super(props);
    
    this.el = document.getElementById('modal-root');

  }



   render() {

    const props = this.props

    if(!props.isVisible) {
      return null
    }

     return ReactDOM.createPortal(
       <div className="modal-container">
         <div className="modal-bg" onClick={props.closeModal}></div>
         <div className="modal-info-container">
           {props.children}
         </div>
       </div>,
       this.el
     );
   }
}

export default Modal;