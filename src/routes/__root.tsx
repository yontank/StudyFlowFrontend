import * as React from 'react'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'

import logoUrl from '@/assets/logo.png'

export const Route = createRootRoute({
  component: RootComponent
})

function RootComponent() {
  return (
    <React.Fragment>
      <div className='mb-6 flex h-12 w-full items-center justify-between bg-gray-200 px-4'>
        <img src={logoUrl} alt='Logo' />

        <div className='flex gap-2'>
          <Button variant='outline' className='cursor-pointer'>
            Log in
          </Button>
          <Button variant='default' className='cursor-pointer'>
            Sign up
          </Button>
        </div>
      </div>
      <div className='mx-auto w-4/5'>
        <Outlet />
      </div>
    </React.Fragment>
  )
}
