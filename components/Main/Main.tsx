import { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import cursorCircleActions from '../CursorCircle/cursorCircleActions'

import { breakpoints } from '../../styles/utils/breakpoints'
import { colors } from '../../styles/utils/colors'
import { heights } from '../../styles/utils/variables'

interface MousemoveEvent {
  target: HTMLInputElement;
}

const Main = ({ children }) => {
  const container = useRef(null)
  const dispatch = useDispatch()

  function mousemoveEventHandler(event: MousemoveEvent) {
    const target = event.target

    if (!target.classList.contains('link')) {
      dispatch(cursorCircleActions.shrinkCircle({ isOnLink: false }))

      return
    }

    dispatch(cursorCircleActions.enlargeCircle({ isOnLink: true }))
  }

  useEffect(() => {
    container.current.addEventListener('mousemove', mousemoveEventHandler, true)

    return () => {
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
  color: ${colors.white};
  height: calc(100% - ${heights.headerHeightMobile});
  position: relative;
  z-index: 1;

  @media ${breakpoints.laptop} {
    height: calc(100% - ${heights.headerHeight});
  }
`

export default Main