import { Wrapper, Label, Field, ErrorMessage } from './Input.styled';

type InputProps = {
  id: string;
  name: string;
  autoComplete?: string;
  type?: string;
  label: string;
  placeholder?: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?: string;
  touched?: boolean;
};

export const Input: React.FC<InputProps> = ({
  id,
  name,
  autoComplete,
  type = 'text',
  label,
  placeholder,
  value,
  onChange,
  onBlur,
  error,
  touched,
}) => {
  const hasError = Boolean(error && touched);
  const ErrorId = hasError ? `${id}-error` : undefined;

  return (
    <Wrapper>
      <Label htmlFor={id}>{label}</Label>
      <Field
        id={id}
        name={name}
        autoComplete={autoComplete}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        aria-invalid={hasError}
        aria-describedby={ErrorId}
      ></Field>

      <ErrorMessage data-visible={hasError}>{error || ''}</ErrorMessage>
    </Wrapper>
  );
};
