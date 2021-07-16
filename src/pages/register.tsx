import { FormEvent, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Axios from 'axios'
import { useRouter } from 'next/router'

import InputGroup from '../components/InputGroup'
import { useAuthState } from '../context/auth'

export default function Register() {
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [agreement, setAgreement] = useState(false)
  const [errors, setErrors] = useState<any>({})

  const { authenticated } = useAuthState()

  const router = useRouter()
  if (authenticated) router.push('/')

  const submitForm = async (event: FormEvent) => {
    event.preventDefault()

    if (!agreement) {
      setErrors({ ...errors, agreement: 'You must agree to T&Cs' })
      return
    }

    try {
      await Axios.post('/auth/register', {
        email,
        password,
        username,
      })

      router.push('/login')
    } catch (err) {
      setErrors(err.response.data)
    }
  }

  return (
    <div className="flex bg-space-700">
      <Head>
        <title>Register</title>
      </Head>

      <div
        className="h-screen bg-center bg-cover w-36"
      
      ></div>
      <div className="flex flex-col justify-center p-6 border-2 border-olight-500">
        <div className="w-70">
          <h1 className="mb-2 text-lg font-medium">Register</h1>
          <p className="mb-10 text-xs">
            By continuing, you agree to our User Agreement and Privacy Policy
          </p>
          <form onSubmit={submitForm}>
            <div className="mb-6">
              <input
                type="checkbox"
                className="mr-1 cursor-pointer"
                id="agreement"
                checked={agreement}
                onChange={(e) => setAgreement(e.target.checked)}
              />
              <label htmlFor="agreement" className="text-xs cursor-pointer">
                I agree to get on this exciting ride with eduversity
              </label>
              <small className="block font-medium text-red-600">
                {errors.agreement}
              </small>
            </div>
            <InputGroup
              className="mb-2"
              type="email"
              value={email}
              setValue={setEmail}
              placeholder="EMAIL"
              error={errors.email}
            />
            <InputGroup
              className="mb-2"
              type="text"
              value={username}
              setValue={setUsername}
              placeholder="USERNAME"
              error={errors.username}
            />
            <InputGroup
              className="mb-4"
              type="password"
              value={password}
              setValue={setPassword}
              placeholder="PASSWORD"
              error={errors.password}
            />

            <button className="w-full py-2 mb-4 text-xs font-bold text-white uppercase border rounded bg-space-500 border-olight-500">
              Register
            </button>
          </form>
          <small>
            Already registered?
            <Link href="/login">
              <a className="ml-1 uppercase text-olight-500">Log In</a>
            </Link>
          </small>
        </div>
      </div>
    </div>
  )
}
