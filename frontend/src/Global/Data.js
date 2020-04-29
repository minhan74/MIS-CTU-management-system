import React from 'react';

import View from './View';

class Data extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // Users
      users: [
        {
          id: '1234567',
          name: 'Name Có Dấu',
          major: 'Major',
          timeIn: '09:28 AM',
          status: 1,
          equipments: [
            {
              id: 'WH0001',
              name: 'Hand drill',
              time: '09:42 AM',
            },
            {
              id: 'WH0002',
              name: 'Hand drill 2',
              time: '09:42 AM',
            }
          ]
        },
        {
          id: '4342563',
          name: 'Just BCD',
          major: 'Just major',
          timeIn: '',
          status: 0,
          equipments: []
        },
        {
          id: '2345789',
          name: 'Just DEF Name',
          major: 'Just major',
          timeIn: '09:28 AM',
          status: 1,
          equipments: [
            {
              id: 'WH0001',
              name: 'Hand drill',
              time: '09:42 AM',
            },
            {
              id: 'WH0002',
              name: 'Hand drill 2',
              time: '09:42 AM',
            }
          ]
        },
        {
          id: '4252523',
          name: 'Haha Name',
          major: 'Major',
          timeIn: '',
          status: 0,
          equipments: []
        },
        {
          id: '0000000',
          name: 'Expired Name',
          major: 'Major',
          timeIn: '',
          status: -1,
          equipments: []
        }
      ],

      equipments: [
        {
          id: '1234567',
          name: 'This is Equipment',
          description: "Description goes here, very long long long long long long long long long long long long long",
          equipmentSelfs: [
            {
              id: '1',
              condition: 2,
              conditionDescription: 'Good',
              status: 0,
              usingBy: ''
            },
            {
              id: '2',
              condition: 1,
              conditionDescription: 'Normal',
              status: 1,
              usingBy: '1234'
            },
            {
              id: '3',
              condition: 0,
              conditionDescription: "Can not be used",
              status: 0,
              usingBy: ''
            },
            {
              id: '4',
              condition: -1,
              conditionDescription: "Severe",
              status: 0,
              usingBy: ''
            }
          ],
        },
        {
          id: '4342563',
          name: 'Equipment field',
          equipmentSelfs: [
            {
              id: '1',
              condition: -1,
              conditionDescription: 'Severe',
              status: 0,
              usingBy: ''
            },
            {
              id: '2',
              condition: 0,
              conditionDescription: "Can not be used, for real, this is not a reason just a test text",
              status: 0,
              usingBy: ''
            }
          ],
        },
        {
          id: '2345789',
          name: 'This is Equipment 2',
          equipmentSelfs: [
            {
              id: '1',
              condition: 1,
              conditionDescription: 'Good',
              status: 1,
              usingBy: '14224'
            },
            {
              id: '2',
              condition: 0,
              conditionDescription: "Can not be used",
              status: 0,
              usingBy: ''
            }
          ],
        }
      ],

      faculties: [
        {
          id: '1234567',
          name: 'This is Faculty',
          majors: [
            {
              id: '23423',
              name: 'Major name 1'
            }
          ],
        },
        {
          id: '4342563',
          name: 'Faculty field',
          majors: [
            {
              id: '23423',
              name: 'Major name 1'
            },
            {
              id: '23424',
              name: 'Major name 2'
            }
          ],
        },
        {
          id: '2345789',
          name: 'This is Faculty 2',
          majors: [
            {
              id: '23423',
              name: 'Major name 1'
            }
          ],
        }
      ],

      selectedUser: {},
      selectedEquipment: {},
      selectedFaculty: {}
    };
  }

  render() {
    return (
      <View
        users={this.state.users}
        equipments={this.state.equipments}
        faculties={this.state.faculties}
        accessToken={this.props.accessToken}
        />
    );
  }
}

export default Data;