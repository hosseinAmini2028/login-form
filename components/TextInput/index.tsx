"use client"
import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { Controller, FieldValues, RegisterOptions, useFormContext } from 'react-hook-form';
export type TextInputProps = {
  name: string;
  label?: string;
  rules?:
    | Omit<
        RegisterOptions<FieldValues, string>,
        'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
      >
    | undefined;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
export default function TextInput(props: TextInputProps) {
  const { name, rules, label, required, ...allProps } = props;
  const {control , formState : {errors}} = useFormContext()
  return (
    <div className='mb-3 relative'>
      <Controller
        name={name}
        control={control}
        rules={{
          ...rules,
          ...(required
            ? {
                required: {
                  message: `${label ?? 'field'} is required`,
                  value: true
                }
              }
            : null)
        }}
        render={({ field }) => <input className={`rounded-md px-3 py-2 focus:outline-0 text-sm ${errors[name] ? 'border border-solid border-1 border-red-500' : ''}`} {...allProps} {...field}  />}
      />
      <span className='text-xs absolute text-red-500 -bottom-3 left-0 right-0'>{errors[name]?.message ? errors[name]?.message?.toString() : ''}</span>
    </div>
  );
}
