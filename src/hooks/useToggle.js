import { useState } from 'react'
import useEffectonUpdate from './useEffectonUpdate'

export default function useToggle ({
  initialValue = false,
  onToggle = () => { }
}) {
  
  const [on, setOn] = useState(initialValue)

  function toggle () {
    setOn(prevOn => !prevOn)
  }

  useEffectonUpdate(onToggle, [on])

  return [on, toggle]
}