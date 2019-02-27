import React from "react"
import {
  EuiFormRow,
  EuiFieldText,
  EuiFieldPassword,
  CommonProps,
  EuiFieldPasswordProps,
  EuiFieldTextProps
} from "@elastic/eui"

type TextInputProps = {
  label: string,
  type: string,
  id: string,
  error?: string,
  touched: boolean,
  value: string,
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  onBlur: (event:  React.ChangeEvent<HTMLInputElement>) => void,
  className?: string
}

type GenericInputProps = CommonProps & React.InputHTMLAttributes<HTMLInputElement>
& (EuiFieldPasswordProps | EuiFieldTextProps)

const getInputType = (type: string): React.FunctionComponent<GenericInputProps> => {
  switch (type) {
    case 'password':
      return EuiFieldPassword
    default:
      return EuiFieldText
  }
}

const TextInput: React.SFC<TextInputProps> = ({ type, id, label, touched, error, value, onChange, onBlur, className, ...props }) => {
  const isValid = !!error
  const classes = `input-group ${ isValid ? 'animated shake error': ''} ${className ? className: ''}`
  const Input = getInputType(type)
  const errorMessage = error ? error.charAt(0).toUpperCase() + error.slice(1) : error
  return (
    <EuiFormRow label={label}
      isInvalid={isValid}
      error={errorMessage}
      className={classes}>
      <Input value={value}
        onChange={onChange}
        onBlur={onBlur}
        name={id}
        isInvalid={!!error} />
    </EuiFormRow>
  )
}

export default TextInput
