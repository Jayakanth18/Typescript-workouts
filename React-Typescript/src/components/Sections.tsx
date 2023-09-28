import React, { ReactNode } from 'react'

type SectionProp = {
    title? : string
    children: ReactNode
}
const Sections = ({title, children}: SectionProp) => {
  return (
    <div>
        <h2>{children}</h2>
        <p>{title}</p>
    </div>
  )
}

export default Sections