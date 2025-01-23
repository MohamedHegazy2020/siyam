import { useEffect, useState } from "react"

const useScrollProgress = () => {
  const [completion, setCompletion] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const scrollHeight = document.documentElement.scrollHeight
      const clientHeight = document.documentElement.clientHeight
      const scrollPercent = (scrollY / (scrollHeight - clientHeight)) * 100
      setCompletion(scrollPercent)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return completion
}

export default useScrollProgress