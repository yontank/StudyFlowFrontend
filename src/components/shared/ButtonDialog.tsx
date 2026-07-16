import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'

interface ButtonDialogProps {
  trigger: React.ReactNode
  children: React.ReactNode
}

function ButtonDialog({ trigger, children }: Readonly<ButtonDialogProps>) {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>{trigger}</DialogTrigger>
        <DialogContent>{children}</DialogContent>
      </Dialog>
    </div>
  )
}

export default ButtonDialog
