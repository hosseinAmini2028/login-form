'use client';
import TextInput, { TextInputProps } from 'components/TextInput';
import IconEye from 'components/icons/IconEye';
import IconEyeOff from 'components/icons/IconEyeOff';
import { useState } from 'react';

export default function PasswordInput(props: TextInputProps) {
  const { type, ...allProps } = props;
  const [inputType, setInputType] = useState<'password' | 'text'>('password');

  const handleClick = () => {
    inputType === 'password' ? setInputType('text') : setInputType('password');
  };
  return (
    <div className="relative">
      <TextInput {...allProps} type={inputType}/>
      <span onClick={handleClick} className="absolute right-2 top-3 text-gray-300 cursor-pointer">
        {inputType === 'password' ? <IconEye /> : <IconEyeOff />}
      </span>
    </div>
  );
}
