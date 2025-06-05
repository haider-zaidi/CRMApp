import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Menu } from 'lucide-react'

const Topbar = ({ onToggleSidebar }) => {
  const [userPicture, setUserPicture] = useState('')
  const location = useLocation()

  useEffect(() => {
    const picture = localStorage.getItem('userPicture')
    if (picture) setUserPicture(picture)
  }, [])

  const pageTitleMap = {
    '/': 'Dashboard',
    '/dashboard': 'Dashboard',
    '/customers': 'Customers',
    '/orders': 'Orders',
    '/segments': 'Segments',
    '/campaigns': 'Campaigns',
    '/stats': 'Stats',
  }

  const pageTitle = pageTitleMap[location.pathname] || 'CRMApp'

  return (
    <div className="sticky top-0 z-30 w-full bg-white shadow-md p-4 flex justify-between items-center">
      <div className="flex items-center">
        {/* Hamburger menu button - only visible on mobile */}
        <button
          onClick={onToggleSidebar}
          className="lg:hidden mr-3 p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
        >
          <Menu size={20} />
        </button>
        <h1 className="text-xl font-bold">{pageTitle}</h1>
      </div>
      <div className="flex items-center">
        {userPicture ? (
          <img src={userPicture} alt="Profile" className="w-8 h-8 rounded-full mr-2" />
        ) : (
          <div className="w-8 h-8 rounded-full bg-gray-300 mr-2"></div>
        )}
      </div>
    </div>
  )
}

export default Topbar