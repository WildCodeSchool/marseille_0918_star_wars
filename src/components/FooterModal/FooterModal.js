import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import ContactForm from './ContactForm';
import './FooterModal.scss';


const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    width                 : '50vw',
    height                : '63vh'
  }
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root')

export default class FooterModal extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = 'white';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <div>
        <img src={require('./Stormtrooper.png')} className="IconContact" alt="Contact us" onClick={this.openModal}/>

        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

          <h2 ref={subtitle => this.subtitle = subtitle}>Join the Empire</h2>
          <ContactForm />
          <div >
          <img src={require('./Icone_Planet.png')} className="IconClose" alt="Close button" onClick={this.closeModal}/>
          </div>
        </Modal>

      </div>
    );
  }
}


