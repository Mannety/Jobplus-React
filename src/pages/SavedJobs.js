import React from 'react'
import PageTitle from '../components/PageTitle'
import ListingFilter from '../components/ListingFilter'
import Listing from '../components/Listing';



export default function SavedJobs() {
  const listings = [<Listing />]

  return (
    <>
      <PageTitle title='Saved Jobs' />
      <ListingFilter components={listings} />
    </>
  )
}
