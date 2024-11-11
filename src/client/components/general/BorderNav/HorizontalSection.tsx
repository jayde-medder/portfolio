import { FaLinkedin, FaGithub } from 'react-icons/fa';

const HorizontalSection = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-1 w-full overflow-hidden">
      <div className="flex-none min-h-full sm:w-12 w-8 border-r-2 border-foreground">
        <div className="flex-col gap-4 hidden md:flex overflow-hidden items-center pt-6">
          <a href="https://www.linkedin.com/in/jayde-medder/" target="blank">
            <FaLinkedin size={25} className="fill-primary-foreground" />
          </a>
          <a href="https://github.com/jayde-medder" target="blank">
            <FaGithub size={25} className="fill-primary-foreground" />
          </a>
        </div>
      </div>

      <div className="flex-none min-h-full w-3 border-r border-foreground" />
      <section className="flex-1 w-full m-1 overflow-hidden sm:max-lg:overflow-y-auto sm:scrollbar-thin sm:max-lg:scrollbar-thumb-primary-foreground scrollbar-track-background scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
        {children}
      </section>
      <div className="flex-none min-h-full w-3 min-w-3 right-0 border-l border-foreground" />
      <div className="flex-none min-h-full sm:w-12 w-8 min-w-8 right-0 border-l-2 border-foreground" />
    </div>
  );
};

export default HorizontalSection;
