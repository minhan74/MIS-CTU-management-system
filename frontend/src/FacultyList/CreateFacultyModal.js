import React from 'react';

import CreateFacultyForm from './CreateFacultyForm';

class CreateFacultyModal extends React.Component {
  render() {
    return (
      <div className={`FacultyList-create-faculty-modal ${this.props.modalActive ? 'show' : ''}`}>
        <div onClick={this.props.toggleModal} className="modal-background">
        </div>
        <div className="modal-container FacultyList-modal-container">
          <button onClick={this.props.toggleModal} className="modal-close-btn">✖</button>
          <div className="modal-header">Create</div>
          <div className="modal-body FacultyList-create-faculty-modal-body">
            <CreateFacultyForm
              toggleModal={this.props.toggleModal}
              updateDataLocally={this.props.updateDataLocally}
              faculties={this.props.faculties}
              />
          </div>
        </div>
      </div>
    );
  }
}


export default CreateFacultyModal;