import { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import gsap, { CSSPlugin } from 'gsap'

import { breakpoints } from '../../styles/utils/breakpoints'
import { colors } from '../../styles/utils/colors'
import { spaces } from '../../styles/utils/spaces'

interface CursorCircleState {
  cursorCircle: CursorCircle;
}

interface CursorCircle {
  isOnLink: boolean;
  leftPosition: number;
  topPosition: number;
}

const CursorCircle = () => {
  const circleEl = useRef(null)
  const cursorCircle: CursorCircle = useSelector((state: CursorCircleState) => {
    return {
      isOnLink: state.cursorCircle.isOnLink,
      leftPosition: state.cursorCircle.leftPosition,
      topPosition: state.cursorCircle.topPosition,
    }
  })

  useEffect(() => {
    gsap.registerPlugin(CSSPlugin);
  }, [])

  useEffect(() => {
    gsap.to(circleEl.current, {
      css: {
        left: cursorCircle.leftPosition,
        top: cursorCircle.topPosition,
      },
      duration: 0.6,
    })
  }, [cursorCircle])

  return (
    <Circle ref={circleEl} className={!!cursorCircle.isOnLink && 'enlarged'} />
  )
}

const Circle = styled.span`
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

export default CursorCircle
