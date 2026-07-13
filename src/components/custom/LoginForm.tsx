import { GoogleLogin } from '@react-oauth/google'

function LoginForm() {
  return (
    <div>
      <h3>Welcome to StudyFlow</h3>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          console.log(credentialResponse)
        }}
        onError={() => {
          console.log('Login Failed')
        }}
      />
      ;
    </div>
  )
}

export default LoginForm
