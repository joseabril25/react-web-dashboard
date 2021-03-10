const fields = [
  {
    id: 0,
    type: 'email',
    label: 'Email Address *',
    name: 'email',
    placeholder: 'Email Address*',
    validation: {
      required: {
        value: true,
        message: 'Email is required',
      },
    },
  },
  {
    id: 1,
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
  email: '',
  password: '',
};

export default fields;