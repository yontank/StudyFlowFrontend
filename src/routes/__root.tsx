import * as React from 'react'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'

import logoUrl from '@/assets/logo.png'
import ButtonDialog from '@/components/shared/ButtonDialog'
import LoginForm from '@/components/auth/LoginForm'
import SignupForm from '@/components/auth/SignupForm'
import { DropdownMenuAvatar } from '@/components/shared/NavbarAvatar'

export const Route = createRootRoute({
  component: RootComponent
})

function RootComponent() {
  return (
    <React.Fragment>
      <div className='mb-6 flex h-12 w-full items-center justify-between bg-green-300 px-4 shadow-lg'>
        <div className='flex items-center gap-2 '>
          <img src={logoUrl} alt='Logo' />
          <h3 className='text-xl font-bold'>Studyflow</h3>
        </div>

        <DropdownMenuAvatar />

        <div className='flex gap-2'>
          <ButtonDialog
            trigger={
              <Button variant='outline' className='cursor-pointer'>
                Log in
              </Button>
            }
          >
            <LoginForm />
          </ButtonDialog>

          <ButtonDialog
            trigger={
              <Button variant='default' className='cursor-pointer'>
                Sign up
              </Button>
            }
          >
            <SignupForm />
          </ButtonDialog>
        </div>
      </div>
      <div className='mx-auto w-4/5'>
        <Outlet />
      </div>
    </React.Fragment>
  )
}
