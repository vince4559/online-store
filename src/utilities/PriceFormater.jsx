import React from 'react'

const formater = new Intl.NumberFormat(undefined, {
    currency: "USD",
    style: 'currency'
})
const PriceFormater = (number) => {
  return formater.format(number)
}

export default PriceFormater
