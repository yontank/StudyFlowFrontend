import { GoogleLogin } from '@react-oauth/google'

function LoginForm() {
  return (
    <div className='flex flex-col items-center gap-4'>
      <h1 className='text-xl font-bold'>Welcome back</h1>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          console.log(credentialResponse)
        }}
        onError={() => {
          console.log('Login Failed')
        }}
      />
    </div>
  )
}

export default LoginForm
