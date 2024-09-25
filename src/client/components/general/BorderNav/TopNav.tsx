import Sidebar from '../Sidebar';
import { ModeToggleSwitch } from '../ModeToggleSwitch';

const TopNav = () => {
  return (
    <div className="w-full">
      <div className="flex h-12 border-b border-foreground w-full">
        <div className="flex-none sm:w-12 w-8 border-r-2 border-foreground" />
        <div className="flex-none w-3 border-r border-foreground bg-foreground" />
        <div className="flex-1" />
        <div className="flex-1 flex justify-end">
          <ModeToggleSwitch />
        </div>
        <div className="flex-none w-3 right-0 border-l border-foreground bg-foreground" />
        <div className="flex-none sm:w-12 w-8 right-0 border-l-2 border-foreground" />
      </div>
      <div className="flex h-4 border-b border-foreground w-full">
        <div className="flex-none sm:w-12 w-8 border-r-2 border-foreground" />
        <div className="flex-none w-3 border-r border-foreground" />
        <div className="flex-grow border-r border-foreground"></div>
        <div className="flex-shrink">
          <p className="px-3 font-inter text-xs text-center text-primary-foreground tracking-widest">
            (portfolio)
          </p>
        </div>
        <div className="flex-none w-3 right-0 border-l border-foreground" />
        <div className="flex-none sm:w-12 w-8 right-0 border-l-2 border-foreground">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default TopNav;
