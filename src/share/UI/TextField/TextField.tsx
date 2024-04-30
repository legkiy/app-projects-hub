import { DetailedHTMLProps, FC, InputHTMLAttributes, memo } from 'react';
import style from './textField.module.scss';
import { useFormContext } from 'react-hook-form';
import clsx from 'clsx';

interface TextFieldProps {
  label?: string;
  name: string;
  inLine?: boolean;
  inputProps?: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
}

const TextField: FC<TextFieldProps> = ({ label, name, inLine, inputProps }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const error = errors[name]?.message as string | undefined;

  return (
    <div className={clsx(style['text-field'], { [style.inline]: inLine })}>
      {label && <label htmlFor={label}>{label}</label>}
      <input id={label} {...inputProps} {...register(name)} />
      {error && <p>{error}</p>}
    </div>
  );
};
export default memo(TextField);
