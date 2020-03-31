import React from 'react';
import ReactDOM from 'react-dom';

// const modalRoot= document.getElementById('modal-root')

class Modal extends React.Component {
  constructor(props){
    super(props);
    // this.el = document.createElement("div");
    this.el = document.getElementById('modal-root')
  }

   render() {
     const props = this.props

     if (!props.isVisible){
      return null
     }

     return ReactDOM.createPortal(
       <div className="modal-container">
         <div className="modal-bg" onClick={props.closeModal}></div>
         <div className="modal-info-container">
            {props.children}

            {/* <h1>{this.props.exerciseTitle}</h1>
            <p>{this.props.steps}</p> */}
         </div>
       </div>,
        this.el
     );
   }
}

export default Modal;