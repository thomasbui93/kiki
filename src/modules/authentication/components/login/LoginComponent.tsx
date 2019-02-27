import React, { SFC, Fragment } from 'react'
import {
  EuiButton,
  EuiForm
} from '@elastic/eui'
import { string, object } from 'yup'
import {
  Form,
  Formik,
  FormikProps,
  FormikActions
} from 'formik'
import TextInput from '../../../common/components/core/form/TextInput'

export type LoginCredential = {
  email: string,
  password: string
}

export type LoginComponentProps = {
  submitAction: (credential: LoginCredential) => void,
  initialData: LoginCredential,
  externalErrors: string[],
  isRequesting: boolean
}

export const submitFormActionFactory = (submitAction: any) =>
  (values: LoginCredential, {setSubmitting}: FormikActions<LoginCredential>) => {
    submitAction(values)
    setSubmitting(false)
  }

export const loginSchema = object().shape({
  email: string().email().required(),
  password: string().min(6).required()
})

export const LoginComponent : SFC<LoginComponentProps> =
  ({ initialData, submitAction, externalErrors, isRequesting }: LoginComponentProps) => {
  const formik = {
    initialValues: initialData,
    onSubmit: submitFormActionFactory(submitAction),
  }
  const formErrors = externalErrors.filter(error => !!error && error.length > 0)
  return (<Fragment>
    <Formik
      {...formik}
      validationSchema={loginSchema}
      render={({isSubmitting, errors, touched, isValid, values, handleChange, handleBlur}: FormikProps<LoginCredential>) => (
        <EuiForm
          isInvalid={formErrors.length > 0}
          error={externalErrors}>
          <Form>
            <TextInput
              type="text"
              id="email"
              label="Your Email"
              touched={!!touched.email}
              error={errors.email}
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              />
            <TextInput
              type="password"
              id="password"
              label="Your Password"
              touched={!!touched.password}
              error={errors.password}
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              />
            <EuiButton type="submit" fill={true} isLoading={isRequesting} disabled={isSubmitting || !isValid}>
              Submit
            </EuiButton>
        </Form>
        </EuiForm>
      )}
    />
  </Fragment>
  )}
