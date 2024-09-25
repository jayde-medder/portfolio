const HorizontalSection = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-1 w-full overflow-hidden">
      <div className="flex-none min-h-full sm:w-12 w-8 border-r-2 border-foreground" />
      <div className="flex-none min-h-full w-3 border-r border-foreground" />
      <section className="flex-1 w-full p-8 m-1 overflow-hidden sm:overflow-y-auto sm:scrollbar-thin sm:scrollbar-thumb-primary-foreground scrollbar-track-background scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
        {children}
      </section>
      <div className="flex-none min-h-full w-3 min-w-3 right-0 border-l border-foreground" />
      <div className="flex-none min-h-full sm:w-12 w-8 min-w-8 right-0 border-l-2 border-foreground" />
    </div>
  );
};

export default HorizontalSection;
