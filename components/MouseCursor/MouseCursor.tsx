import { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import gsap, { CSSPlugin } from 'gsap'

import { breakpoints } from '../../styles/utils/breakpoints'
import { colors } from '../../styles/utils/colors'
import { spaces } from '../../styles/utils/spaces'

interface CursorState {
  main: Main,
}

interface Main {
  cursorIsOnLink: boolean;
  mousePositionLeft: number;
  mousePositionTop: number;
}

const MouseCursor = () => {
  const circleEl = useRef(null)
  const cursor = useSelector((state: CursorState) => {
    return {
      cursorIsOnLink: state.main.cursorIsOnLink,
      mousePositionLeft: state.main.mousePositionLeft,
      mousePositionTop: state.main.mousePositionTop,
    }
  })

  useEffect(() => {
    gsap.registerPlugin(CSSPlugin);
  }, [])

  useEffect(() => {
    gsap.to(circleEl.current, {
      css: {
        left: cursor.mousePositionLeft,
        top: cursor.mousePositionTop,
      },
      duration: 0.6,
    })
  }, [cursor])

  return (
    <CircleShape ref={circleEl} className={!!cursor.cursorIsOnLink && 'enlarged'} />
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
