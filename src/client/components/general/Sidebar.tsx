import { Recycle, Images, Bell } from 'lucide-react'
import { HiOutlineMenu } from 'react-icons/hi'
import { SidebarItems } from '@/models/sidebarItems.ts'
import { Button } from '../../components/ui/button'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from '../../components/ui/sheet'
import { SidebarButton } from './SidebarButton'
import { Link } from 'react-router-dom'

const sidebarItems: SidebarItems = {
  links: [
    { label: 'About Re:Gear', href: '/about-regear', icon: Recycle },
    { label: 'Gallery', href: '/gallery', icon: Images },
    { label: 'Contact me', href: '/contact', icon: Bell },
  ],
}

export function Sidebar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          size="icon"
          variant="outline"
          className="fixed top-[5px] right-[6px]"
        >
          <HiOutlineMenu size={20} />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="text-primary-foreground">
          Jayde Medder: Portfolio<hr className="border-primary-forground"></hr>
        </SheetHeader>
        <div className="flex flex-col h-full justify-between pt-4">
          <div className="flex flex-col gap-8 w-full">
            {sidebarItems.links.map((link) => (
              <SheetClose asChild>
                <Link to={link.href}>
                  <SidebarButton
                    variant="custom"
                    size="default"
                    icon={link.icon}
                    className="w-full"
                  >
                    {link.label}
                  </SidebarButton>
                </Link>
              </SheetClose>
            ))}
          </div>
          <SheetFooter>
            <div className="max-w-20 flex-1 p-3 flex items-center justify-center hover:scale-[105%]">
              <img src="/li-mark-blue.png" className="object-contain" />
            </div>
            <div className="max-w-20 flex-1 p-3 flex items-center justify-center hover:scale-[105%]">
              <img src="/github-mark.png" className="object-contain" />
            </div>
          </SheetFooter>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default Sidebar
