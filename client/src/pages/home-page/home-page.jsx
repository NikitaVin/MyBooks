import React from 'react'
import { Books } from '../../components/books/books'
import { Header } from '../../components/header/header'

export const HomePage = () => {
  return (
    <React.Fragment>
      <Header/>
      <Books/>
    </React.Fragment>
  )
}
