import Sidebar from '../Sidebar';
import { ModeToggleSwitch } from '../ModeToggleSwitch';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const TopNav = () => {
  return (
    <div className="w-full">
      <div className="flex h-12 border-b border-foreground w-full">
        <div className="flex-none sm:w-12 w-8 border-r-2 border-foreground" />
        <div className="flex-none w-3 border-r border-foreground bg-foreground" />
        <div className="flex-1 flex justify-between">
          <div className="flex px-4 items-center">
            <Link to="/">
              <h6>
                <span className="initial">
                  j<span className="first-name">ayde</span>
                </span>
                <span className="initial-2">
                  M<span className="last-name">edder</span>
                </span>
              </h6>
            </Link>
          </div>
          <div className="flex justify-center gap-6 items-center">
            <div className="flex gap-3 md:hidden">
              <FaLinkedin size={25} className="fill-primary-foreground" />
              <FaGithub size={25} className="fill-primary-foreground" />
            </div>
            <ModeToggleSwitch />
          </div>
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
