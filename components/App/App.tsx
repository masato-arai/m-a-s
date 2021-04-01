import { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { useQuery } from '@apollo/client'
import styled from 'styled-components'

import GET_MAIN_NAV_DATA from '../../graphql/query/get-main-nav-data'

import appActions from './appActions'

interface MousemoveEvent {
  clientX: number;
  clientY: number;
  target: HTMLInputElement;
}

const Main = ({ children }) => {
  const container = useRef(null)
  const dispatch = useDispatch()
  const { data: mainNavData } = useQuery(GET_MAIN_NAV_DATA);

  function mousemoveEventHandler(event: MousemoveEvent) {
    const target = event.target
    const mousePositionLeft = event.clientX - 12
    const mousePositionTop = event.clientY - 12

    dispatch(appActions.mousePosition({
      mousePositionLeft,
      mousePositionTop,
    }))

    if (target.tagName !== 'A' && target.tagName !== 'BUTTON') {
      return dispatch(appActions.shrinkCursor())
    }

    dispatch(appActions.enlargeCursor())
  }

  useEffect(() => {
    container.current.addEventListener('mousemove', mousemoveEventHandler, true)
    dispatch(appActions.shrinkCursor())

    return () => {
      if (!container.current) return

      container.current.removeEventListener('mousemove', mousemoveEventHandler, false)
      dispatch(appActions.shrinkCursor())
    }
  }, [])

  useEffect(() => {
    if (!mainNavData || !mainNavData.mainNav) return

    dispatch(appActions.mainNav({
      playgroundVisible: mainNavData.mainNav.playgroundVisible,
    }))
  }, [mainNavData])

  return (
    <Container ref={container}>
      {children}
    </Container>
  )
}

const Container = styled.div`
  height: 100%;
`

export default Main
