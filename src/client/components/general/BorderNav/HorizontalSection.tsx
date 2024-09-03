import { Link } from 'react-router-dom';

const HorizontalSection = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-1 w-full overflow-hidden">
      <div className="fixed sm:-ml-[100px] sm:mt-32 -ml-[58px] mt-20 w-fit">
        <Link to="/" className="fixed -rotate-90 w-fit block">
          <h4 className="sm:text-6xl text-4xl">Jayde Medder</h4>
        </Link>
      </div>
      <div className="flex-none min-h-full sm:w-12 w-8 border-r-2 border-foreground" />
      <div className="flex-none min-h-full w-3 border-r border-foreground" />
      <section className="flex-1 w-full max-w-full p-8 overflow-y-auto">
        {children}
      </section>
      <div className="flex-none min-h-full w-3 min-w-3 right-0 border-l border-foreground" />
      <div className="flex-none min-h-full sm:w-12 w-8 min-w-8 right-0 border-l-2 border-foreground" />
    </div>
  );
};

export default HorizontalSection;
