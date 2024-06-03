type Form = {
  userName: string;
  password: string;
};

type SetForm = React.Dispatch<React.SetStateAction<Form>>;

export const handleChange = (e: React.ChangeEvent<HTMLInputElement>, setForm: SetForm, form: Form) => {
  setForm({
    ...form,
    [e.target.name]: e.target.value
  });
}