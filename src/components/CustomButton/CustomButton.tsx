import React from 'react'
interface CustomButtonProps {
    text: string;
    icon: React.ReactNode;
}

const CustomButton: React.FC<CustomButtonProps> = ({ text, icon }) => {
    return (
        <div className={'p-2'}>
            <div  className={'text-center'}>
                {icon}
            </div>
            <div className={'mt-1 text-center'}>
                {text}
            </div>
        </div>
    )
}

export default CustomButton
