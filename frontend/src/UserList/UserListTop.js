import React from 'react';

import UserListAdduserModal from './UserListAdduserModal';

class UserListTop extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      adduserModalActive: false,  // Whether or not the create user modal should show
    }

    this.toggleAdduserModal = this.toggleAdduserModal.bind(this);
  }

  // Show/hide the create new user modal
  toggleAdduserModal(e) {
    this.setState({
      adduserModalActive: !this.state.adduserModalActive
    });
  }

  render() {
    return (
      <div>
        <UserListAdduserModal
          modalActive={this.state.adduserModalActive}
          toggleModal={this.toggleAdduserModal}
          accessToken={this.props.accessToken} />

        <div className="UserList-top">
          <div className="UserList-top-search-section">
            <form>
              <input
                className="UserList-top-search-text-input"
                type="text"
                placeholder="Search"
                value={this.props.idFilter}
                onChange={this.props.handleFilterChange}
                />
              <input type="submit" value="Search" />
              <svg onClick={this.toggleAdduserModal} tabIndex="0" className="UserList-top-search-button" viewBox="-1 0 136 136.21852"><g id="surface1"><path d="M 93.148438 80.832031 C 109.5 57.742188 104.03125 25.769531 80.941406 9.421875 C 57.851562 -6.925781 25.878906 -1.460938 9.53125 21.632812 C -6.816406 44.722656 -1.351562 76.691406 21.742188 93.039062 C 38.222656 104.707031 60.011719 105.605469 77.394531 95.339844 L 115.164062 132.882812 C 119.242188 137.175781 126.027344 137.347656 130.320312 133.269531 C 134.613281 129.195312 134.785156 122.410156 130.710938 118.117188 C 130.582031 117.980469 130.457031 117.855469 130.320312 117.726562 Z M 51.308594 84.332031 C 33.0625 84.335938 18.269531 69.554688 18.257812 51.308594 C 18.253906 33.0625 33.035156 18.269531 51.285156 18.261719 C 69.507812 18.253906 84.292969 33.011719 84.328125 51.234375 C 84.359375 69.484375 69.585938 84.300781 51.332031 84.332031 C 51.324219 84.332031 51.320312 84.332031 51.308594 84.332031 Z M 51.308594 84.332031 " /></g></svg>
            </form>
          </div>
          <div className="UserList-top-filter-section">
            <div
              className={'UserList-top-filter-switch' + (this.props.inlabFilter ? '' : ' active')}
              onClick={this.props.toggleInlabFilter}>
              <div className="UserList-top-filter-switch-half">
                LAB
              </div>
              <div className="UserList-top-filter-switch-slider">
              </div>
              <div className="UserList-top-filter-switch-half">
                ALL
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserListTop;