import { ReactNode } from 'react'
import Sidebar from './Sidebar'
import { Link } from 'react-router-dom'

interface BorderNavProps {
  children: ReactNode
}

const BorderNav: React.FC<BorderNavProps> = ({ children }) => {
  return (
    <div className="w-full max-w-full">
      <div id="topNav" className="w-full max-w-full">
        <div
          id="topNavLine1"
          className="flex h-12 border-b border-foreground w-full max-w-full"
        >
          <div className="flex-none sm:w-12 w-8 border-r-2 border-foreground" />
          <div className="flex-none w-3 border-r border-foreground bg-foreground" />
          <div className="flex-1" />
          <div className="flex-none w-3 right-0 border-l border-foreground bg-foreground" />
          <div className="flex-none sm:w-12 w-8 right-0 border-l-2 border-foreground" />
        </div>
        <div
          id="topNavLine2"
          className="flex h-4 border-b border-foreground w-full max-w-full"
        >
          <div className="flex-none sm:w-12 w-8 border-r-2 border-foreground" />
          <div className="flex-none w-3 border-r border-foreground" />
          <div className="flex-grow border-r border-foreground"></div>
          <div className="flex-shrink">
            <p className="px-3 font-inter text-xs text-center text-primary-foreground">
              (portfolio)
            </p>
          </div>
          <div className="flex-none w-3 right-0 border-l border-foreground" />
          <div className="flex-none sm:w-12 w-8 right-0 border-l-2 border-foreground">
            <Sidebar />
          </div>
        </div>
      </div>
      <div id="horizontalDivs" className="flex w-full max-w-full">
        <div className="fixed sm:-ml-[100px] sm:mt-32 -ml-[58px] mt-20 w-fit">
          <Link to="/" className="fixed -rotate-90 w-fit block">
            <h4 className="sm:text-6xl text-4xl">Jayde Medder</h4>
          </Link>
        </div>
        <div className="flex-none min-h-screen sm:w-12 w-8 border-r-2 border-foreground" />
        <div className="flex-none min-h-screen w-3 border-r border-foreground" />
        <section className="flex-1 sm:p-10 p-6 w-full max-w-full overflow-hidden">
          {children}
        </section>
        <div className="flex-none min-h-screen w-3 min-w-3 right-0 border-l border-foreground" />
        <div className="flex-none min-h-screen sm:w-12 w-8 min-w-8 right-0 border-l-2 border-foreground" />
      </div>
    </div>
  )
}

export default BorderNav
