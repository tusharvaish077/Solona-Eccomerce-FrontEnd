import React from 'react'
import HomepageRenderer from '../../components/renderer/HomepageRenderer'
import SearchBar from '../../../customer/components/SearchBar'

const Home = () => {
  return (
    <div>
      <SearchBar/>
      <HomepageRenderer/>
    </div>
  )
}

export default Home
