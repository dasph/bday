import React, { FunctionComponent } from 'react'

type Props = {
  className?: string;
}

export const Center: FunctionComponent<Props> = ({ children, className }) => {
  return (
    <section className={`flex flex-col flex-grow justify-center items-center${className ? ` ${className}` : ''}`}>
      {children}
    </section>
  )
}
