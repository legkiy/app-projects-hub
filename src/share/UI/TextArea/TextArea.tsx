import { DetailedHTMLProps, FC, TextareaHTMLAttributes, memo } from 'react';
import style from './textArea.module.scss';
import { useFormContext } from 'react-hook-form';
import clsx from 'clsx';

interface TextAreaProps {
  label?: string;
  name: string;
  inLine?: boolean;
  inputProps?: DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  >;
}

const TextArea: FC<TextAreaProps> = ({ label, name, inLine, inputProps }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const error = errors[name]?.message as string | undefined;

  return (
    <div className={clsx(style['text-area'], { [style.inline]: inLine })}>
      {label && <label htmlFor={label}>{label}</label>}
      <textarea
        id={label}
        rows={inputProps?.rows || 4}
        {...inputProps}
        {...register(name)}
      />
      {error && <p>{error}</p>}
    </div>
  );
};
export default memo(TextArea);
