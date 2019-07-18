// interface of texfield component
export interface TextFieldProps {
  placeholder?: string;
  type?: string;
  label?: string;
  id?: string;
  name?: string;
  autoFocus?: boolean;
  error?: string;
  touched?: boolean;
  value?: string | number;
  onChange?: any;
}
