import React from 'react'
import HomeNavbar from '../../components/Navbars/homeNavbar'
import OrderReview from '../../components/placeorder Components/orderReview'

export default function UserProfileScreen() {
  return (
    <>
    <header>
      <HomeNavbar />
    </header>
    <main>
      <OrderReview />
    </main>
  </>
  )
}
