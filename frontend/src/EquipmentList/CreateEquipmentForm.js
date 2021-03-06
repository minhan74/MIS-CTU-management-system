import React from 'react';

import PhotoInput from './PhotoInput';
import InputFilled from '../Global/InputFilled';
import GeneralPurposeModal from '../Global/GeneralPurposeModal';

import imgBtn from '../images/image.png';

class CreateEquipmentForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      id: '',
      name: '',
      description: '',
      photo: imgBtn,

      errorModalMessage: '',
      errorModalActive: false,
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.toggleErrorModal = this.toggleErrorModal.bind(this);
  }

  componentDidMount() {
    if (this.props.equipment) {
      this.setState({
        id: this.props.equipment.equipment_id,
        name: this.props.equipment.equipment_name,
      });
    }
  }

  toggleErrorModal() {
    this.setState({
      errorModalActive: !this.state.errorModalActive
    });
  }

  handleInputChange(e) {
    // SEARCH FOR "file upload image preview react" or "filereader image react" (StackOverflow)
    if (e.target.type === "file") {
      var file = e.target.files[0];

      if (file && file.type.match('image.*')) {
        var reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onloadend = function(e) {
          this.setState({
            photo: [reader.result]
          });

        }.bind(this);
      }
    } else {
      this.setState({
        [e.target.name]: e.target.value
      });
    }
  }

  handleFormSubmit(e) {
    e.preventDefault();
    
    const requestOptions = {
      method: this.props.equipment ? 'PATCH' : 'POST',
      headers: {
        'Authorization': localStorage.getItem("accessToken"),
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        equipment_id: this.state.id,
        equipment_name: this.state.name
      })
    };

    const requestUrl = localStorage.getItem("apiHost") + /equipments/ + (this.props.equipment ? this.props.equipment.id + '/': ''); // The final '/' is required by django rules (urls end with /)
    fetch(requestUrl, requestOptions).then(
      res => {
        if (res.status === 401) {
          console.log("No permission.");
          // alert("You have no permission to do that");
          this.setState({
            errorModalMessage: "You have no permission to do that",
            errorModalActive: true,
          });
          return '';
        } else if (res.status === 400) {
          console.log(res.status + " Bad request error.");
          // alert("Bad request. The equipment id or equipment name might already existed or a field is empty.");
          this.setState({
            errorModalMessage: "Bad request. The equipment id or equipment name might already existed or a field is empty.",
            errorModalActive: true,
          });
          return '';
        } else if (res.status === 404) {
          console.log(res.status + " Not found.");
          // alert("Bad request. The equipment id or equipment name might already existed or a field is empty.");
          this.setState({
            errorModalMessage: "Not found.",
            errorModalActive: true,
          });
          return '';
        } else if (Math.floor(res.status/100) !== 2) {
          console.log(res.status + " Unexpected error.");
          // alert("Unexpected error happened");
          this.setState({
            errorModalMessage: "Unexpected error happened.",
            errorModalActive: true,
          });
          return '';
        } else {
          console.log("Success");
          return res.json();
        }
      }
    ).then(
      equipment => {
        if (equipment) {
            // Turn off the create modal
            this.props.toggleModal();

            // Modify the state directly (NOT RECOMMENDED)
            if (this.props.equipment) {
              equipment.arrayIndex = this.props.equipment.arrayIndex;
              this.props.equipments[this.props.equipment.arrayIndex] = equipment;
            } else {
              equipment.arrayIndex = this.props.equipments.length;
              this.props.equipments.push(equipment);
            }

            // Update the list locally by calling the setState in the props function
            this.props.updateDataLocally();

            // Update detail pannel in case of editing equipment from detail pannel
            if (this.props.updateSelectedEquipment) {
              this.props.updateSelectedEquipment(equipment);
            }

            // Only clear the state if the modal is spawned from Top
            // The one from Top will stay mounted, as opposed to the on from DetailPannel will get unmounted
            // so we don't need to update the state of the one from DetailPannel
            // (will get error for update state of unmounted component)
            if (!this.props.equipment) {
              this.setState({
                id: '',
                name: '',
                description: '',
                photo: imgBtn,
              });
            }
          }
        }
    );
  }

  render() {
    return (
      <div>

        <GeneralPurposeModal
          active={this.state.errorModalActive}
          toggle={this.toggleErrorModal}
          header="Error"
          message={this.state.errorModalMessage}
          ok="Return"
          okClick={this.toggleErrorModal}
          />

        <form className="EquipmentList-create-equipment-form" onSubmit={this.handleFormSubmit}>
          <PhotoInput
              handleChange={this.handleInputChange}
              img={this.state.photo} />

          <div className="EquipmentList-create-equipment-inp-container col-8-sm">
            <InputFilled
              type="text"
              name="id"
              label="ID"
              value={this.state.id}
              handleChange={this.handleInputChange} />
          </div>
          <div className="EquipmentList-create-equipment-inp-container col-8-sm">
            <InputFilled
              type="text"
              name="name"
              label="Equipment name"
              value={this.state.name}
              handleChange={this.handleInputChange} />
          </div>
          <div className="EquipmentList-create-equipment-inp-container col-8-sm">
            <InputFilled
              type="text"
              name="description"
              label="Equipment description"
              value={this.state.description}
              handleChange={this.handleInputChange} />
          </div>
          
          <div className="EquipmentList-create-equipment-btn-group">
            <input
              className="btn EquipmentList-create-equipment-modal-btn"
              type="submit"
              value={this.props.equipment ? "Update" : "Add"}
              onClick={this.handleFormSubmit} />
          </div>
        </form>
      </div>
    );
  }

}

export default CreateEquipmentForm;