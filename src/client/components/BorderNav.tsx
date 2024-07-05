import { ReactNode } from 'react'
import Sidebar from './Sidebar'

interface BorderNavProps {
  children: ReactNode
}

const BorderNav: React.FC<BorderNavProps> = ({ children }) => {
  return (
    <>
      <div id="topNav" className="w-full">
        <div id="topNavLine1" className="flex h-12 border-b border-black">
          <div className="flex-none sm:w-12 w-8 border-r border-black" />
          <div className="flex-none w-3 border-r border-black bg-black" />
          <div className="flex-1"></div>
          <div className="flex-none w-3 right-0 border-l border-black bg-black" />
          <div className="flex-none sm:w-12 w-8 right-0 border-l border-black" />
        </div>
        <div id="topNavLine2" className="flex h-4 border-b border-black">
          <div className="flex-none sm:w-12 w-8 border-r border-black" />
          <div className="flex-none w-3 border-r border-black" />
          <div className="flex-grow border-r border-black"></div>
          <div className="flex-shrink">
            <p className="px-3 font-azeret text-xs text-center text-blue-500">
              (portfolio)
            </p>
          </div>
          <div className="flex-none w-3 right-0 border-l border-black" />
          <div className="flex-none sm:w-12 w-8 right-0 border-l border-black">
            <Sidebar />
          </div>
        </div>
      </div>
      <div id="horizontalDivs" className="flex">
        <div className="flex-none h-screen sm:w-12 w-8 border-r border-black" />
        <div className="flex-none h-screen w-3 border-r border-black" />
        <div className="flex-1 p-5">{children}</div>
        <div className="flex-none h-screen w-3 right-0 border-l border-black" />
        <div className="flex-none h-screen sm:w-12 w-8 right-0 border-l border-black" />
      </div>
    </>
  )
}

export default BorderNav
