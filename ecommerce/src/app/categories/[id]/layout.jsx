import Category_Side_Bar from '@/components/Sidebars/Category_Side_Bar/page'

import React from 'react'

const layout = ({children}) => {
  return (
    <div>
      <div className='flex'>
        <div className='w-1/4'><Category_Side_Bar/></div>
        <div className='w-3/4'>{children}</div>
      </div>
    </div>
  )
}

export default layout
