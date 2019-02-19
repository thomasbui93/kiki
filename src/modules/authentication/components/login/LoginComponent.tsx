import React, { SFC, Fragment } from 'react'
import { string, object } from 'yup'
import {
  Form,
  Formik,
  Field,
  FormikProps,
  FormikActions
} from 'formik'

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
  return (<Fragment>
    { externalErrors }
    <Formik
      {...formik}
      validationSchema={loginSchema}
      render={({isSubmitting, errors, touched, isValid}: FormikProps<LoginCredential>) => (
        <Form>
          <Field name="email" type="text"/>
          { errors.email && touched.email ? (<div> {errors.email} </div>) : null}
          <Field
            name="password"
            type="password"
          />
          { errors.password && touched.password ? (<div> {errors.password} </div>) : null}
          <button type="submit" disabled={isSubmitting || isRequesting || !isValid}>
            Submit
          </button>
        </Form>
      )}
    />
  </Fragment>
  )}
