import { Recycle, Images, Bell, Menu } from 'lucide-react'
import { SidebarItems } from '@/models/sidebarItems.ts'
import { Button } from '../../components/ui/button'
import {
  Sheet,
  SheetClose,
  SheetContent,
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
          <Menu size={20} />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <div className="h-full px-1 py-4">
          <div className="mt-5">
            <div className="flex flex-col gap-8 w-full">
              {sidebarItems.links.map((link) => (
                <SheetClose asChild>
                  <Link to={link.href}>
                    <SidebarButton
                      variant="custom"
                      size="sm"
                      icon={link.icon}
                      className="w-full"
                    >
                      {link.label}
                    </SidebarButton>
                  </Link>
                </SheetClose>
              ))}
              {sidebarItems.extras}
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default Sidebar
