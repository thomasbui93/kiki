import * as React from 'react'

export type HamburgerMenuProps = {
  isActive: boolean,
  onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void | undefined,
  className: string
}

export const HamburgerMenu = (props: HamburgerMenuProps) => (
  <div className={`${props.className} hamburger ${props.isActive ? 'is-active' : ''}`}
    onClick={props.onClick}>
    <div className='hamburger__box'>
      <div className='hamburger__inner' />
    </div>
  </div>
)
