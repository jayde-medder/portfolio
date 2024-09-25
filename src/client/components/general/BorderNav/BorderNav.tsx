import { ReactNode } from 'react';
import TopNav from './TopNav';
import HorizontalSection from './HorizontalSection';

interface BorderNavProps {
  children: ReactNode;
}

const BorderNav: React.FC<BorderNavProps> = ({ children }) => {
  return (
    <div className="sm:fixed inset-0 flex flex-col overflow-auto">
      <TopNav />
      <HorizontalSection>{children}</HorizontalSection>
    </div>
  );
};

export default BorderNav;
