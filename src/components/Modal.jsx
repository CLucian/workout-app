import React from 'react';
import ReactDOM from 'react-dom';

const modalRoot= document.getElementById('modal-root')


class Modal extends React.Component {
  constructor(props){
    super(props);
    this.el = document.createElement("div");
  }
  

  componentDidMount() {
    modalRoot.appendChild(this.el)
  }
  
  componentWillUnmount() {
    modalRoot.removeChild(this.el)
  }

   render() {
     return ReactDOM.createPortal(
       <div className="modal-container">
         <div className="modal-info-container">
            <h1>{this.props.exerciseTitle}</h1>
            <p>{this.props.steps}</p>
         </div>
       </div>,
       this.el
     );
   }
}

export default Modal;