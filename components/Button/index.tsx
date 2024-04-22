import clsx from "clsx";
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

type Props = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
export default function Button(props : Props){
    const {children , className , ...allProps} = props;
    return (
        <button
         className={clsx(className , 'bg-[#ff6b69] text-white rounded-md p-2 text-sm w-full')}
         {...allProps}
        >
           {children}
        </button>
    )
}