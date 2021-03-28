import { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import mainActions from './mainActions'

interface MousemoveEvent {
  clientX: number;
  clientY: number;
  target: HTMLInputElement;
}

const Main = ({ children }) => {
  const container = useRef(null)
  const dispatch = useDispatch()

  function mousemoveEventHandler(event: MousemoveEvent) {
    const target = event.target
    const mousePositionLeft = event.clientX - 12
    const mousePositionTop = event.clientY - 12

    dispatch(mainActions.mousePosition({
      mousePositionLeft,
      mousePositionTop,
    }))

    if (target.tagName !== 'A' && target.tagName !== 'BUTTON') {
      return dispatch(mainActions.shrinkCursor({ cursorIsOnLink: false }))
    }

    dispatch(mainActions.enlargeCursor({ cursorIsOnLink: true }))
  }

  useEffect(() => {
    container.current.addEventListener('mousemove', mousemoveEventHandler, true)

    return () => {
      if (!container.current) return

      container.current.removeEventListener('mousemove', mousemoveEventHandler, false)
    }
  }, [])

  return (
    <Container ref={container}>
      {children}
    </Container>
  )
}

const Container = styled.main`
  height: 100%;
`

export default Main