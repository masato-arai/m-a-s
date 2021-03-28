import { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import gsap, { CSSPlugin } from 'gsap'

import { breakpoints } from '../../styles/utils/breakpoints'
import { colors } from '../../styles/utils/colors'
import { spaces } from '../../styles/utils/spaces'

interface AppState {
  app: App,
}

interface App {
  cursorIsOnLink: boolean;
  mousePositionLeft: number;
  mousePositionTop: number;
}

const MouseCursor = () => {
  const circleEl = useRef(null)
  const app = useSelector((state: AppState) => {
    return {
      cursorIsOnLink: state.app.cursorIsOnLink,
      mousePositionLeft: state.app.mousePositionLeft,
      mousePositionTop: state.app.mousePositionTop,
    }
  })

  useEffect(() => {
    gsap.registerPlugin(CSSPlugin);
  }, [])

  useEffect(() => {
    gsap.to(circleEl.current, {
      css: {
        left: app.mousePositionLeft,
        top: app.mousePositionTop,
      },
      duration: 0.6,
    })
  }, [app])

  return (
    <CircleShape
      className={!!app.cursorIsOnLink && 'enlarged'}
      ref={circleEl} />
  )
}

const CircleShape = styled.span`
  backface-visibility: hidden;
  background-color: ${colors.white};
  border-radius: 50%;
  bottom: ${spaces.medium};
  display: none;
  height: 24px;
  mix-blend-mode: difference;
  pointer-events: none;
  position: absolute;
  right: ${spaces.medium};
  transform: scale(0);
  transition: transform 0.3s ease-in-out;
  width: 24px;
  z-index: 1000;

  &.enlarged {
    transform: scale(3);
  }

  @media ${breakpoints.laptop} {
    display: block;
  }
`

export default MouseCursor
