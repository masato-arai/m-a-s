import { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import gsap, { CSSPlugin } from 'gsap'

import { breakpoints } from '../../styles/utils/breakpoints'
import { colors } from '../../styles/utils/colors'
import { spaces } from '../../styles/utils/spaces'

interface MousemoveEvent {
  clientX: number;
  clientY: number;
}

const CursorCircle = () => {
  const circleEl = useRef(null)
  const circleIsOnLink: boolean = useSelector(state => state.isOnLink)

  const mousemoveEventHandler = (event: MousemoveEvent) => {
    gsap.to(circleEl.current, {
      css: {
        left: event.clientX - 12,
        top: event.clientY - 12
      },
      duration: 0.6,
    })
  }

  useEffect(() => {
    gsap.registerPlugin(CSSPlugin);
    window.addEventListener('mousemove', mousemoveEventHandler)

    return () => {
      window.removeEventListener('mousemove', mousemoveEventHandler)
    }
  }, [])

  return (
    <Circle ref={circleEl} className={!!circleIsOnLink && 'enlarged'} />
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
