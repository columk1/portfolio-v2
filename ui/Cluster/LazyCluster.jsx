'use client'

import dynamic from 'next/dynamic'
import { useEffect, useRef, useState } from 'react'

// const LazyCluster = React.lazy(() => import('./Cluster'))
const LazyCluster = dynamic(() => import('./Cluster'))

const Cluster = () => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          observer.unobserve(ref.current)
          setIsVisible(true)
        }
      }
    })

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return <div ref={ref}>{isVisible && <LazyCluster />}</div>
}

export default Cluster
