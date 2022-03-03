import React from 'react'
import ShipppingForm from '../../components/Forms components/shipping-component'
import HomeNavbar from '../../components/Navbars/homeNavbar'

export default function ShippingScreen() {
  return (
      <>
      <header>
          <HomeNavbar />
      </header>
      <main><ShipppingForm /></main>
      <footer></footer>
      </>
  )
}
