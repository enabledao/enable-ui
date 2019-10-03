import React from 'react'
import { ButtonWrapper } from './styled'
import { ButtonProps } from './interface'

const RowButton: React.FC<ButtonProps> = ({
    type,
    onClick,
    color,
    children,
    disabled,
    value,
}) => (
    <ButtonWrapper
        type={type ? type : 'button'}
        onClick={() => onClick(value)}
        color={color}
        disabled={disabled}
        outline={true}
    >
        {value}
    </ButtonWrapper>
)

export default RowButton
