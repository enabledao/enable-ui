import React from 'react'
import { ButtonWrapper } from './styled'
import { ButtonProps } from './interface'
import { formatBN } from '../../../utils/formatters'

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
        color={'Blue'}
        disabled={disabled}
        outline={true}
    >
        {formatBN(value.toString())}
    </ButtonWrapper>
)

export default RowButton
