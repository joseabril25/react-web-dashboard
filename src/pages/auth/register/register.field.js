const fields = [
  {
    id: 0,
    type: 'text',
    label: 'First Name *',
    name: 'firstName',
    placeholder: 'First Name*',
    validation: {
      required: {
        value: true,
        message: 'First Name is required',
      },
    },
  },
  {
    id: 1,
    type: 'text',
    label: 'Middle Name *',
    name: 'middleName',
    placeholder: 'Middle Name*',
    validation: {
      required: {
        value: true,
        message: 'Middle Name is required',
      },
    },
  },
  {
    id: 2,
    type: 'text',
    label: 'Last Name *',
    name: 'lastName',
    placeholder: 'Last Name*',
    validation: {
      required: {
        value: true,
        message: 'Last Name is required',
      },
    },
  },
  {
    id: 3,
    type: 'date',
    label: 'Birth Date *',
    name: 'bday',
    placeholder: '',
    validation: {
      required: {
        value: true,
        message: 'Birth Date is required',
      },
    },
  },
  {
    id: 4,
    type: 'email',
    label: 'Email Address *',
    name: 'email',
    placeholder: 'Email Address*',
    validation: {
      required: {
        value: true,
        message: 'Email Address is required',
      },
    },
  },
  {
    id: 5,
    type: 'select',
    label: 'Gender *',
    name: 'gender',
    placeholder: 'Gender *',
    options: ['Male', 'Female'],
    validation: {
      required: {
        value: true,
        message: 'Gender is required',
      },
    },
  },
  {
    id: 6,
    type: 'password',
    label: 'Password*',
    name: 'password',
    placeholder: 'Password *',
    validation: {
      required: {
        value: true,
        message: 'Password is required',
      },
    },
  },
]
export const defaultValues = {
  firstName: '',
  middleName: '',
  lastName: '',
  email: '',
  bday: '',
  gender: '',
  password: '',
};

export default fields;