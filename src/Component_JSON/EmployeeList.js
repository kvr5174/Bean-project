// const employeetableColumns = [
//     {
//       title: 'First Name',
//       dataIndex: 'firstName',
//       key: 'firstName',
//       width: 150,
//       fixed: 'left',
      
//     },
//     {
//       title: 'Last Name',
//       dataIndex: 'lastName',
//       key: 'lastName',
//       width: 150,
//     },
//     {
//       title: 'Email ID',
//       dataIndex: 'email',
//       key: 'email',
//       width: 200,
//     },
//     {
//       title: 'Employee ID',
//       dataIndex: 'employeeID',
//       key: 'employeeID',
//       width: 100,
//       sorter: (a, b) => a.employeeID - b.employeeID,
//     },
//     {
//       title: 'Phone',
//       dataIndex: 'phone',
//       key: 'phone',
//       width: 120,
//     },
//     {
//         title: 'User',
//         dataIndex: 'user',
//         key: 'user',
//         width: 100,
//       },
//       {
//         title: 'Admin',
//         dataIndex: 'admin',
//         key: 'admin',
//         width: 100,
//       },
//       {
//         title: 'User',
//         dataIndex: 'user',
//         key: 'user',
//         width: 100,
//       },
//       {
//         title: 'Admin',
//         dataIndex: 'admin',
//         key: 'admin',
//         width: 100,
//       },
//       {
//         title: 'User',
//         dataIndex: 'user',
//         key: 'user',
//         width: 100,
//       },
//       {
//         title: 'Admin',
//         dataIndex: 'admin',
//         key: 'admin',
//         width: 100,
//       },
//       {
//         title: 'User',
//         dataIndex: 'user',
//         key: 'user',
//         width: 100,
//       },
//       {
//         title: 'Admin',
//         dataIndex: 'admin',
//         key: 'admin',
//         width: 100,
//       },
//     {
//       title: 'Date Of Birth',
//       dataIndex: 'dob',
//       key: 'dob',
//       width: 120,
//     },
//     {
//       title: 'Current Work Status',
//       dataIndex: 'currentWorkStatus',
//       key: 'currentWorkStatus',
//       width: 100,
//       filters: [
//         {
//           text: 'H1B',
//           value: 'H1B',
//         },
//         {
//           text: 'F1',
//           value: 'F1',
//         },
//       ],
//       onFilter: (value, record) => record.currentWorkStatus.indexOf(value) === 0,
//     //   filterMode: 'tree',
//         filterSearch: true,
//     },
//     {
//       title: 'Work Auth Start Date',
//       dataIndex: 'workAuthStartDate',
//       key: 'workAuthStartDate',
//       width: 120,
//       sorter: (a, b) => a.workAuthStartDate > b.workAuthStartDate,
//     },
//     {
//       title: 'Work Auth End Date',
//       dataIndex: 'workAuthEndDate',
//       key: 'workAuthEndDate',
//       width: 120,
//       sorter: (a, b) => a.workAuthEndDate > b.workAuthEndDate,
//     },
//     {
//       title: 'Tax Term',
//       dataIndex: 'taxTerm',
//       key: 'taxTerm',
//       width: 100,
//     },
//     {
//       title: 'SSN',
//       dataIndex: 'ssn',
//       key: 'ssn',
//       width: 150,
//       // filteredValue: filteredInfo.name || null,
//       // onFilter: (value, record) => record.name.includes(value),
//     },
//     {
//       title: 'Gender',
//       dataIndex: 'gender',
//       key: 'gender',
//       width: 100,
//     },
//     {
//       title: 'Actions',
//       dataIndex: 'actions',
//       key: 'actions',
//       width: 100,
//       fixed: 'right',
//       render: () => <a href='/'>Delete</a>,
//     },
//   ];
  
//   export default employeetableColumns;
  
//   // phone: '1234567892',
//   // employeeID: '2',
//   // DOB: '10/11/2000',
//   // currentWorkStatus: 'H1B',
//   // workAuthStartDate: '01/10/1990',
//   // workAuthEndDate: '01/11/2020',
//   // TaxTerm: 'W2',
//   // SSN: 'N/A',
//   // gender: 'Male'


// const columns = [
//   {
//       headerName: 'First Name', field: 'firstName', sortable: true, editable: true, filter: true, suppressStickyLabel:true
//   },
//   {
//       headerName: 'Last Name', field: 'lastName', sortable: true, editable: true, filter: true
//   },
//   {
//       headerName: 'Email', field: 'email', sortable: true, editable: true, filter: true
//   },
//   {
//       headerName: 'Phone', field: 'phone', sortable: true, editable: true, filter: true
//   },
//   {
//       headerName: 'Employee ID', field: 'employeeID', sortable: true, editable: true, filter: true
//   },
//   {
//       headerName: 'Date of Birth', field: 'dob', sortable: true, editable: true, filter: true
//   },
//   {
//       headerName: 'Current Work Status', field: 'currentWorkStatus', sortable: true, editable: true, filter: true
//   },
//   {
//       headerName: 'Work Auth Start Date', field: 'workAuthStartDate', sortable: true, editable: true, filter: true
//   },
//   {
//       headerName: 'Work Auth End Date', field: 'workAuthEndDate', sortable: true, editable: true, filter: true
//   },
//   {
//       headerName: 'Tax Term', field: 'taxTerm', sortable: true, editable: true, filter: true
//   },
//   {
//       headerName: 'SSN', field: 'ssn', sortable: true, editable: true, filter: true
//   },
//   {
//       headerName: 'Gender', field: 'gender', sortable: true, editable: true, filter: true,
//   }
// ];

const data = [{
    firstName: 'First Name - 1',
    lastName: 'Last name - 1 tayjdbc bscij1',
    email: 'test@gmail.com',
    phone: '1234567891',
    employeeID: '0',
    dateofBirth: '10/09/2000',
    currentWorkStatus: 'H1B',
    workAuthStartDate: '11/10/1990',
    workAuthEndDate: '21/11/2020',
    taxTerm: 'W2',
    ssn: 'N/A',
    gender: 'Female',
    render: () => <a href='/'>Delete</a>,
},
{
    firstName: 'F2 -asbh -dhsauf -sbfh',
    lastName: 'L2',
    email: 'test@gmail.com',
    phone: '1234567890',
    employeeID: '1',
    dateofBirth: '1/09/2000',
    currentWorkStatus: 'H1B',
    workAuthStartDate: '15/10/1990',
    workAuthEndDate: '01/12/2020',
    taxTerm: 'W2',
    ssn: 'N/A',
    gender: 'Male',
    render: () => <a href='/'>Delete</a>,
},
{
    firstName: 'F2 -asbh -dhsauf -sbfh',
    lastName: 'L2',
    email: 'test@gmail.com',
    phone: '1234567890',
    employeeID: '1',
    dateofBirth: '1/09/2000',
    currentWorkStatus: 'H1B',
    workAuthStartDate: '15/10/1990',
    workAuthEndDate: '01/12/2020',
    taxTerm: 'W2',
    ssn: 'N/A',
    gender: 'Male',
    render: () => <a href='/'>Delete</a>,
},
{
    firstName: 'F2 -asbh -dhsauf -sbfh',
    lastName: 'L2',
    email: 'test@gmail.com',
    phone: '1234567890',
    employeeID: '1',
    dateofBirth: '1/09/2000',
    currentWorkStatus: 'H1B',
    workAuthStartDate: '15/10/1990',
    workAuthEndDate: '01/12/2020',
    taxTerm: 'W2',
    ssn: 'N/A',
    gender: 'Male',
    render: () => <a href='/'>Delete</a>,
},
{
    firstName: 'F3',
    lastName: 'L3',
    email: 'test@gmail.com',
    phone: '1234567892',
    employeeID: '2',
    dateofBirth: '10/11/2000',
    currentWorkStatus: 'F1',
    workAuthStartDate: '01/10/1990',
    workAuthEndDate: '01/11/2020',
    taxTerm: 'W2',
    ssn: 'N/A',
    gender: 'Male',
    render: () => <a href='/'>Delete</a>,
},
{
    firstName: 'F4',
    lastName: 'L4',
    email: 'test@gmail.com',
    phone: '1234567893',
    employeeID: '3',
    dateofBirth: '20/09/2000',
    currentWorkStatus: 'F1',
    workAuthStartDate: '01/01/1990',
    workAuthEndDate: '01/01/2020',
    taxTerm: 'W2',
    ssn: 'N/A',
    gender: 'Male',
    render: () => <a href='/'>Delete</a>,
},
{
    firstName: 'F5',
    lastName: 'L5',
    email: 'test@gmail.com',
    phone: '1234567893',
    employeeID: '5',
    dateofBirth: '20/09/2000',
    currentWorkStatus: 'H1B',
    workAuthStartDate: '01/01/1990',
    workAuthEndDate: '01/01/2020',
    taxTerm: 'W2',
    ssn: 'N/A',
    gender: 'Female',
    render: () => <a href='/'>Delete</a>,
},
{
    firstName: 'F6',
    lastName: 'L6',
    email: 'test@gmail.com',
    phone: '1234567893',
    employeeID: '6',
    dateofBirth: '20/09/2000',
    currentWorkStatus: 'H1B',
    workAuthStartDate: '01/01/1990',
    workAuthEndDate: '01/01/2020',
    taxTerm: 'W2',
    ssn: 'N/A',
    gender: 'Male',
}];


export default data;
