import React from 'react';

import InputFilled from '../Global/InputFilled';

class CreateUserPersonalSection extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      facultyList: [],
      majorLists: {},
      currentMajorList: []
    };

    this.handleChangeFaculty = this.handleChangeFaculty.bind(this);
  }

  componentDidMount() {
    const requestOptions = {
      method: 'GET',
      headers: {
        Authorization: localStorage.getItem("accessToken"),
        'Content-Type': 'application/json'
      },
    }

    fetch(localStorage.getItem("apiHost") + '/schools/', requestOptions).then(
      res => res.json()
    ).then(
      data => {
        let facultyList = [];
        let majorLists = {};

        for (let i = 0; i < data.length; i++) {
          facultyList.push(data[i]);

          fetch(localStorage.getItem("apiHost") + '/schools/' + data[i].id, requestOptions).then(
            res => res.json()
          ).then(
            data => {
              majorLists[facultyList[i].school_id] = data.majors;
              
              this.setState({
                majorLists: majorLists,
                currentMajorList: majorLists[facultyList[0].school_id]
              });
            }
          );
        }

        this.setState({
          facultyList: facultyList
        });
      }
    );
  }

  handleChangeFaculty(e) {
    // this.props.handleChange(e);

    this.setState({
      currentMajorList: this.state.majorLists[e.target.value]
    });
  }

  render() {

    const facultyList = this.state.facultyList.map(
      faculty => <option key={faculty.school_id} value={faculty.school_id}>{faculty.school_name}</option>
    )

    let currentMajorList = [];
    try {
      currentMajorList = this.state.currentMajorList.map(
        major => <option key={major.id} value={major.id}>{major.major_name}</option>
      );
      currentMajorList.unshift(<option key="0" value="">-- Select a major --</option>);
    }
    catch(e) {
      currentMajorList = [];
    }

    var studentInfoSection = (
      <div>
        <div className="UserList-create-user-inp-container col-12-sm">
          <InputFilled
            type="text"
            name="studentID"
            label="Student ID"
            value={this.props.studentID}
            handleChange={this.props.handleChange}
            />
        </div>
        <div className="UserList-create-user-inp-container col-12-sm">
          <InputFilled
              type="text"
              name="classID"
              label="Class ID"
              value={this.props.classID}
              handleChange={this.props.handleChange}
              />
        </div>
        <div className="UserList-create-user-inp-container col-12-sm">
          <div className="inp-filled-container">
            <label>
              <select name="faculty" onChange={this.handleChangeFaculty} className="inp-filled">
                {facultyList}
              </select>
              <span className="inp-filled-label inp-has-content">Faculty</span>
            </label>
          </div>
        </div>
        <div className="UserList-create-user-inp-container col-12-sm">
          <div className="inp-filled-container">
            <label>
              <select value={this.props.major} name="major" onChange={this.props.handleChange} className="inp-filled">
                {currentMajorList}
              </select>
              <span className="inp-filled-label inp-has-content">Major</span>
            </label>
          </div>
        </div>
      </div>
    );

    var otherInfoSection = (
      <div className="col-12-sm">
        {
          this.props.workPlace !== 'ctu' &&
          <div className="UserList-create-user-inp-container col-12-sm">
            <InputFilled
              type="text"
              name="organization"
              label="Organization"
              value={this.props.organization}
              handleChange={this.props.handleChange}
              />
          </div>
        }
        
        <div className="UserList-create-user-inp-container col-12-sm">
          <InputFilled
            type="number"
            name="identityCard"
            label="Identity ID"
            value={this.props.identityCard}
            handleChange={this.props.handleChange}
            />
        </div>
      </div>
    );

    return (
      <div className="col-12-sm col-6-md UserList-create-user-section">
        <div className="UserList-create-user-section-title">
          Personal information
        </div>
        <div className="UserList-create-user-inp-container col-12-sm">
          <InputFilled
            type="text"
            name="firstName"
            label="First name"
            value={this.props.firstName}
            handleChange={this.props.handleChange}
            />
        </div>
        <div className="UserList-create-user-inp-container col-12-sm">
          <InputFilled
            type="text"
            name="lastName"
            label="Last name"
            value={this.props.lastName}
            handleChange={this.props.handleChange}
            />
        </div>
        <div className="UserList-create-user-inp-container col-8-sm">
          <InputFilled
            type="date"
            name="dob"
            label="Date of birth"
            value={this.props.dob}
            handleChange={this.props.handleChange}
            />
        </div>
        <div className="UserList-create-user-inp-container col-4-sm">
          <div className="inp-filled-container">
            <label>
              <select value={this.props.gender} name="gender" onChange={this.props.handleChange} className="inp-filled">
                <option value="M">Male</option>
                <option value="F">Female</option>
              </select>
              <span className="inp-filled-label inp-has-content">Gender</span>
            </label>
          </div>
        </div>
        <div className="UserList-create-user-inp-container col-12-sm">
          <InputFilled
            type="text"
            maxLength="12"
            name="phone"
            label="Phone number"
            value={this.props.phone}
            handleChange={this.props.handleChange}
            />
        </div>
        <div className="UserList-create-user-inp-container col-12-sm">
          <div className="inp-filled-container">
            <label>
              <select value={this.props.workPlace} name="workPlace" onChange={this.props.handleChange} className="inp-filled">
                <option value="ctu">Can Tho University</option>
                <option value="other">Other</option>
              </select>
              <span className="inp-filled-label inp-has-content">Work place</span>
            </label>
          </div>
        </div>
        { this.props.workPlace === "ctu" && studentInfoSection }
        { otherInfoSection }
      </div>
    );
  }
}

export default CreateUserPersonalSection;