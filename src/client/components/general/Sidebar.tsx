import { Recycle, Images, Bell } from 'lucide-react';
import { HiOutlineMenu } from 'react-icons/hi';
import { SidebarItems } from '@/models/sidebarItems.ts';
import { Button } from '../../components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from '../../components/ui/sheet';
import { SidebarButton } from './SidebarButton';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const sidebarItems: SidebarItems = {
  links: [
    { label: 'About Re:Gear', href: '/about-regear', icon: Recycle },
    { label: 'Gallery', href: '/gallery', icon: Images },
    { label: 'Contact me', href: '/contact', icon: Bell },
  ],
};

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
        <SheetHeader className="font-jetbrains text-foreground">
          jaydeMedder: Portfolio
        </SheetHeader>
        <div className="flex flex-col h-full justify-center pt-4">
          <div className="flex flex-col gap-8 w-full">
            {sidebarItems.links.map((link) => (
              <div className="flex flex-col">
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
              </div>
            ))}
          </div>
        </div>
        <SheetFooter>
          <div className="flex gap-3">
            <a href="https://www.linkedin.com/in/jayde-medder/" target="blank">
              <FaLinkedin size={30} className="fill-primary-foreground" />
            </a>
            <a href="https://github.com/jayde-medder" target="blank">
              <FaGithub size={30} className="fill-primary-foreground" />
            </a>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

export default Sidebar;
