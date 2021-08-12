import React from 'react'
import ListingFilter from '../components/ListingFilter';
import Hero from '../components/Hero';
import Listing from '../components/Listing';

export default function ListingDetails() {
  const listings = [<Listing detailed={true} />]
  return (
    <>
      <Hero heroType='plain' />
      <ListingFilter components={listings} />
    </>
  )
}
