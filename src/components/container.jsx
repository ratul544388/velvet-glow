import { cn } from '@/lib/utils'
import React from 'react'

const Container = ({children, className = ""}) => {
  return (
    <div className={cn('max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8', className)}>
      {children}
    </div>
  )
}

export default Container
