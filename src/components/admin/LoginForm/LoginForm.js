import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { toast } from 'react-toastify'
import { loginApi } from '../../../api/user'
import { useAuth } from '../../../hooks'
import './LoginForm.scss'


export function LoginForm() {
  const { login } = useAuth()

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {

        const response = await loginApi(formValue)
        const { access } = response
        login(access)
      } catch (error) {
        toast.error(error.message)
      }
    }
  })

  return (
    <Form className='login-form-admin' onSubmit={formik.handleSubmit}>
      <Form.Input
        name='email'
        placeholder='correo electronico'
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.errors.email}
      />

      <Form.Input
        name='password'
        type='password'
        placeholder='contraseña'
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.errors.password}
      />

      <Button
        type='submit'
        content='iniciar sesion'
        primary
        fluid
      />

    </Form>
  )
}

function initialValues() {
  return {
    email: '',
    password: ''
  }
}

function validationSchema() {
  return Yup.object({
    email: Yup.string().email('correo mal').required("Valor requerido"),
    password: Yup.string().required("Valor requerido")
  })
}