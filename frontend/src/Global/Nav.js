import React from 'react';

class Nav extends React.Component {
	render() {
    return (
      <div className="Nav-navbar">
        <div className="Nav-top">
          <img className="Nav-top-logo" src={require("../images/logo.jpg")} alt="Logo" />
          <svg tabIndex="0" className="Nav-top-item" viewBox="0 0 512 512"><path d="m499.953125 197.703125-39.351563-8.554687c-3.421874-10.476563-7.660156-20.695313-12.664062-30.539063l21.785156-33.886719c3.890625-6.054687 3.035156-14.003906-2.050781-19.089844l-61.304687-61.304687c-5.085938-5.085937-13.035157-5.941406-19.089844-2.050781l-33.886719 21.785156c-9.84375-5.003906-20.0625-9.242188-30.539063-12.664062l-8.554687-39.351563c-1.527344-7.03125-7.753906-12.046875-14.949219-12.046875h-86.695312c-7.195313 0-13.421875 5.015625-14.949219 12.046875l-8.554687 39.351563c-10.476563 3.421874-20.695313 7.660156-30.539063 12.664062l-33.886719-21.785156c-6.054687-3.890625-14.003906-3.035156-19.089844 2.050781l-61.304687 61.304687c-5.085937 5.085938-5.941406 13.035157-2.050781 19.089844l21.785156 33.886719c-5.003906 9.84375-9.242188 20.0625-12.664062 30.539063l-39.351563 8.554687c-7.03125 1.53125-12.046875 7.753906-12.046875 14.949219v86.695312c0 7.195313 5.015625 13.417969 12.046875 14.949219l39.351563 8.554687c3.421874 10.476563 7.660156 20.695313 12.664062 30.539063l-21.785156 33.886719c-3.890625 6.054687-3.035156 14.003906 2.050781 19.089844l61.304687 61.304687c5.085938 5.085937 13.035157 5.941406 19.089844 2.050781l33.886719-21.785156c9.84375 5.003906 20.0625 9.242188 30.539063 12.664062l8.554687 39.351563c1.527344 7.03125 7.753906 12.046875 14.949219 12.046875h86.695312c7.195313 0 13.421875-5.015625 14.949219-12.046875l8.554687-39.351563c10.476563-3.421874 20.695313-7.660156 30.539063-12.664062l33.886719 21.785156c6.054687 3.890625 14.003906 3.039063 19.089844-2.050781l61.304687-61.304687c5.085937-5.085938 5.941406-13.035157 2.050781-19.089844l-21.785156-33.886719c5.003906-9.84375 9.242188-20.0625 12.664062-30.539063l39.351563-8.554687c7.03125-1.53125 12.046875-7.753906 12.046875-14.949219v-86.695312c0-7.195313-5.015625-13.417969-12.046875-14.949219zm-152.160156 58.296875c0 50.613281-41.179688 91.792969-91.792969 91.792969s-91.792969-41.179688-91.792969-91.792969 41.179688-91.792969 91.792969-91.792969 91.792969 41.179688 91.792969 91.792969zm0 0"/></svg>
        </div>
        <div className="Nav-item-group">
          <div className="Nav-item-group-header">
            ADMIN
          </div>
          <div
            onClick={this.props.updateSelectedView} tabIndex="0"
            className={"Nav-item " + (this.props.selectedView === 'Users' ? 'active' : '')}>
            <svg className="Nav-item-icon" viewBox="0 0 492.255 492.255"><g><g><polygon points="436.216,336.692 374.909,398.005 347.736,370.827 333.813,384.75 374.909,425.851 450.139,350.615"/></g></g><g><g><path d="M217.712,14.178c-59.529,0-107.957,48.428-107.957,107.957c0,59.529,48.428,107.962,107.957,107.962 c59.524,0,107.957-48.433,107.957-107.962C325.668,62.606,277.236,14.178,217.712,14.178z M217.712,210.404 c-48.668,0-88.264-39.596-88.264-88.269c0-48.668,39.596-88.264,88.264-88.264s88.264,39.596,88.264,88.264 C305.976,170.808,266.38,210.404,217.712,210.404z"/></g></g><g><g><path d="M462.918,306.846c-19.502-19.502-45.103-29.27-70.722-29.326c-14.567-19.539-32.032-36.499-52.249-50.241 c-1.596-1.082-4.798-3.168-4.798-3.168l-7.865-5.13l-5.5,7.625c-24.106,33.462-63.01,53.437-104.072,53.437 c-41.072,0-79.981-19.981-104.077-53.447l-5.495-7.63l-11.913,7.803C35.971,267.356,0,334.904,0,407.457v31.644h312.671 c2.578,3.331,5.308,6.58,8.362,9.635c19.558,19.558,45.25,29.341,70.942,29.341s51.385-9.784,70.942-29.341 C502.034,409.615,502.034,345.966,462.918,306.846z M19.692,419.409v-11.952c0-64.476,31.24-124.606,83.798-161.774 c28.005,34.01,70.024,54.053,114.221,54.053c44.188,0,86.207-20.043,114.216-54.053c13.98,9.88,26.511,21.443,37.458,34.493 c-17.725,4.071-34.572,12.891-48.352,26.671c-30.392,30.396-37.058,75.561-20.221,112.563H19.692z M448.995,434.813 c-31.442,31.442-82.596,31.442-114.038,0s-31.442-82.601,0-114.043c15.721-15.721,36.365-23.577,57.019-23.577 s41.298,7.856,57.019,23.577C480.438,352.212,480.438,403.37,448.995,434.813z"/></g></g></svg>
            <div className="Nav-item-label">Users</div>
          </div>
          <div
            onClick={this.props.updateSelectedView} tabIndex="0"
            className={"Nav-item " + (this.props.selectedView === 'Equipments' ? 'active' : '')}>
            <svg className="Nav-item-icon" viewBox="0 0 288 288"><path d="M122 25l15-21c4-5 10-5 14 0l16 22c4 5 2 10-5 10h-12v118c0 3 3 3 5 1l25-25c4-4 6-10 6-16V90c-7 0-12-5-12-12V66c0-6 5-12 12-12h12c7 0 12 5 12 12v12c0 7-5 12-12 12v24c0 10-3 18-10 25l-31 31c-4 4-7 6-7 16v49c12 3 21 13 21 26 0 15-12 27-27 27s-27-12-27-27c0-13 9-23 21-26v-13c0-10-3-13-7-17l-31-31c-6-6-10-14-10-24v-25c-7-2-12-9-12-17 0-10 8-18 18-18s18 8 18 18c0 8-5 15-12 17v25c0 7 3 12 7 16l25 25c2 2 4 2 4-1V36h-12c-7 0-9-5-4-11z"/></svg>
            <div className="Nav-item-label">Equipments</div>
          </div>
          <div
            onClick={this.props.updateSelectedView} tabIndex="0"
            className={"Nav-item " + (this.props.selectedView === 'Faculties' ? 'active' : '')}>
            <svg className="Nav-item-icon" viewBox="0 0 377.64 377.64"> <path d="M369.64,347.132H8c-4.418,0-8-3.582-8-8s3.582-8,8-8h361.64c4.418,0,8,3.582,8,8S374.058,347.132,369.64,347.132z M354.968,310.669c-4.418,0-8-3.582-8-8V125.884h-53.882c-4.418,0-8-3.582-8-8s3.582-8,8-8h61.884c4.418,0,8,3.582,8,8 c0,0.059,0,0.118-0.002,0.176v184.609C362.968,307.087,359.387,310.669,354.968,310.669z M285.566,310.669c-4.418,0-8-3.582-8-8 v-90.367c0-4.418,3.582-8,8-8s8,3.582,8,8v90.367C293.566,307.087,289.984,310.669,285.566,310.669z M221.069,310.669 c-4.418,0-8-3.582-8-8v-90.367c0-4.418,3.582-8,8-8s8,3.582,8,8v90.367C229.069,307.087,225.487,310.669,221.069,310.669z M156.572,310.669c-4.418,0-8-3.582-8-8v-90.367c0-4.418,3.582-8,8-8s8,3.582,8,8v90.367 C164.572,307.087,160.99,310.669,156.572,310.669z M92.075,310.669c-4.418,0-8-3.582-8-8v-90.367c0-4.418,3.582-8,8-8s8,3.582,8,8 v90.367C100.075,307.087,96.493,310.669,92.075,310.669z M22.673,310.669c-4.418,0-8-3.582-8-8V118.118 c-0.002-0.078-0.003-0.156-0.003-0.234c0-4.418,3.582-8,8-8h61.886c4.418,0,8,3.582,8,8s-3.582,8-8,8H30.673v176.785 C30.673,307.087,27.091,310.669,22.673,310.669z M321.05,235.857c-4.418,0-8-3.582-8-8v-15.555c0-4.418,3.582-8,8-8s8,3.582,8,8 v15.555C329.05,232.276,325.468,235.857,321.05,235.857z M56.604,235.857c-4.418,0-8-3.582-8-8v-15.555c0-4.418,3.582-8,8-8 s8,3.582,8,8v15.555C64.604,232.276,61.023,235.857,56.604,235.857z M321.05,187.071c-4.418,0-8-3.582-8-8v-15.555 c0-4.418,3.582-8,8-8s8,3.582,8,8v15.555C329.05,183.489,325.468,187.071,321.05,187.071z M56.604,187.071c-4.418,0-8-3.582-8-8 v-15.555c0-4.418,3.582-8,8-8s8,3.582,8,8v15.555C64.604,183.489,61.023,187.071,56.604,187.071z M285.566,187.069H92.075 c-4.418,0-8-3.582-8-8s3.582-8,8-8h193.492c4.418,0,8,3.582,8,8S289.985,187.069,285.566,187.069z M285.562,159.805 c-1.193,0-2.404-0.268-3.546-0.833l-94.058-46.601l-92.28,46.575c-3.945,1.989-8.755,0.407-10.747-3.538 c-1.991-3.944-0.407-8.756,3.538-10.747l92.351-46.61V38.507c0-4.418,3.582-8,8-8h57.83c4.418,0,8,3.582,8,8v30.224 c0,4.418-3.582,8-8,8h-49.83v22.174l92.299,45.729c3.959,1.961,5.578,6.761,3.617,10.72 C291.34,158.172,288.506,159.805,285.562,159.805z M196.82,60.731h41.83V46.507h-41.83V60.731z"/><g></g><g></g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg>
            <div className="Nav-item-label">Faculties</div>
          </div>
        </div>
        <div className="Nav-bottom">
          <div className="Nav-bottom-item">
            Log out
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;