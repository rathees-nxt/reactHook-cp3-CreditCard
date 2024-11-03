// Write your code here
import {useState} from 'react'

import {
  MainContainer,
  CreditImageContainer,
  CreditInputContainer,
  CreditHeading,
  InputHeading,
  InputContainer,
  HeadingContainer,
  HorizontalRule,
  ImageContainer,
  CreditDetails,
  CreditDetailPara,
  Input,
} from './styledComponents'

const CreditCard = () => {
  const [cardNumber, setCardNumber] = useState('')
  const [cardholderName, setName] = useState('')
  const onChangeNumber = event => {
    setCardNumber(event.target.value)
  }
  const onChangeName = event => {
    setName(event.target.value)
  }
  return (
    <MainContainer>
      <CreditImageContainer>
        <HeadingContainer>
          <CreditHeading>CREDIT CARD</CreditHeading>
          <HorizontalRule />
        </HeadingContainer>
        <ImageContainer data-testid="creditCard">
          <CreditDetails font>{cardNumber}</CreditDetails>
          <CreditDetailPara>CARDHOLDER NAME</CreditDetailPara>
          <CreditDetails>{cardholderName.toUpperCase()}</CreditDetails>
        </ImageContainer>
      </CreditImageContainer>
      <CreditInputContainer>
        <InputContainer>
          <InputHeading>Payment Method</InputHeading>
          <Input
            value={cardNumber}
            type="text"
            onChange={onChangeNumber}
            placeholder="Card Number"
          />
          <Input
            value={cardholderName}
            type="text"
            onChange={onChangeName}
            placeholder="Cardholder Name"
          />
        </InputContainer>
      </CreditInputContainer>
    </MainContainer>
  )
}

export default CreditCard
