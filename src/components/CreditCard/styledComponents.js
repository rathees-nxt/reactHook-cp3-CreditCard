// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
  @media screen and (min-width: 768px) {
    height: 100vh;
    width: 100vw;
  }
`

export const CreditImageContainer = styled.div`
  background-color: #344e7a;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 50px;
  @media screen and (min-width: 768px) {
    width: 50vw;
    height: 100vh;
  }
  @media screen and (max-width: 767px) {
    height: 500px;
  }
`

export const CreditInputContainer = styled.div`
  background-color: #d3d9e0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    width: 50vw;
    height: 100vh;
  }
  @media screen and (max-width: 767px) {
    height: 400px;
  }
`
export const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100px;
`

export const CreditHeading = styled.h1`
  margin: 30px 0px 0px;
  font-family: roboto;
  font-weight: 600;
  font-size: 36px;
  color: #d3d9e0;
`

export const HorizontalRule = styled.hr`
  width: 180px;
  margin: 0px;
  border: 3px solid #ffd773;
  margin-top: 5px;
`
export const ImageContainer = styled.div`
  height: 250px;
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  background-size: cover;
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 30px;
  border-radius: 15px;
  @media screen and (max-width: 767px) {
    padding: 50px;
  }
`

export const CreditDetails = styled.p`
  color: #d3d9e0;
  font-family: roboto;
  font-weight: ${props => (props.font ? '600' : '500')};
  font-size: ${props => (props.font ? '18px' : '18px')};
  margin: ${props => (props.font ? '0px 0px 50px' : '5px 0px 0px')};
`
export const CreditDetailPara = styled.p`
  font-family: roboto;
  font-size: 14px;
  color: #d3d9e0;
  margin: 0px;
`

export const InputHeading = styled.h1`
  font-family: roboto;
  font-weight: 600;
  font-size: 32px;
  color: #475569;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 250px;
  width: 400px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 15px;
  @media screen and (max-width: 767px) {
    height: 300px;
    width: 500px;
  }
`
export const Input = styled.input`
  height: 40px;
  width: 70%;
  border: 2px solid #c3cad9;
  outline: none;
  padding-left: 10px;
  font-family: roboto;
  font-size: 14px;
  color: #475569;
`
