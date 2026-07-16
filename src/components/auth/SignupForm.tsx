import { GoogleLogin } from '@react-oauth/google'

function SignupForm() {
  return (
    <div className='flex flex-col items-center gap-4'>
      <h1 className='text-xl font-bold'>Create an account</h1>
      <GoogleLogin
        text='continue_with'
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

export default SignupForm
