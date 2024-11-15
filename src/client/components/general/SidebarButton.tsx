import { LucideIcon } from 'lucide-react';
import { Button, ButtonProps } from '../ui/button';
import { cn } from '@/lib/utils';
import { SheetClose } from '../ui/sheet';

interface SidebarButtonProps extends ButtonProps {
  icon?: LucideIcon;
}

export function SidebarButton({
  icon: Icon,
  className,
  children,
  ...props
}: SidebarButtonProps) {
  return (
    <Button
      variant="custom"
      size="lg"
      className={cn('gap-6 justify-end text-wrap', className)}
      {...props}
    >
      {Icon && <Icon size={20} />}
      <h6>{children}</h6>
    </Button>
  );
}

export function SidebarButtonSheet(props: SidebarButtonProps) {
  return (
    <SheetClose asChild>
      <SidebarButton {...props} />
    </SheetClose>
  );
}
