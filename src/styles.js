import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowRight, faStar } from '@fortawesome/free-solid-svg-icons'

export const Header = styled.header
`
    padding: 30px 0;
    width: 100%;
    background-color: #006557;
`

export const Searchbar = styled.input
`
    font-size: 14px;
    color: #6D7A78; 
    padding-left: 30px;
    width: 80%;
    height: 35px;
    border-radius: 7px;
    border: none;
    background-image: url('https://www.svgrepo.com/show/64147/magnifying-glass.svg');
    background-size: 3.5%;
    background-repeat: no-repeat;
    background-position: 10px center;
    font-weight: 500;

    @media (min-width: 1024px) {
        font-size: 18px;
        width: 50%;
        height: 45px;
        background-size: 2.5%;
        padding-left: 40px;
    }
`

export const Body = styled.div
`
    padding: 22px;
`

export const Alert = styled.div
`
    color: #8b6421;
    padding: 0px 20px;
    font-size: 14px;
    background-color: #f8f4c4;
    border-radius: 7px;
    border: 1px solid #8b6421;
    display: flex;
    flex-direction: row;
    text-align: left;
    font-weight: 400;

    @media (min-width: 1024px) {
        font-size: 18px;
        width: 44%;
        padding-right: 0px;
    }
`

export const AlertIcon = styled.div
`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
`

export const Profile = styled.div
`
    color: #424F4D;
    text-align: left;
    font-size: 18px;
    margin: 30px 0;
    font-weight: 600;

    @media (min-width: 1024px) {
        font-size: 22px;
    }
`

export const UserIcon = styled.div
`   
    background-color: #D3D3D3;
    color: #5D5D5D;
    border-radius: 100%;
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 15px;

    @media (min-width: 1024px) {
        width: 100px;
        height: 100px;
    }
`

export const UserInfo = styled.div
`   
    display: flex;
    flex-direction: row;
    font-weight: 200;
`

export const UserRanking = styled.div
`   
    margin-top: 15px;
    color: #D3D3D3;
    font-size: 12px;
    font-weight: 400;

    @media (min-width: 1024px) {
        font-size: 16px;
    }
`

export const UserLocation = styled.p
`   
    color: #6D7A78;
    font-size: 12px;
    line-height: 0;
    font-weight: 400;

    @media (min-width: 1024px) {
        font-size: 18px;
    }
`

export const HorizontalRuler = styled.hr
`   
    height: 1px;
    background-color: #D3D3D3;
    border: none;
    margin-top: 20px;
`

const StyledIcon = styled(FontAwesomeIcon)
`   
    margin-right: 5px;
`

export const StarIcon = () => <StyledIcon icon={faStar} size="lg"/>

const StyledIconArrow = styled(FontAwesomeIcon)
`   
    margin-left: 12px;
`

export const ArrowIcon = () => <StyledIconArrow icon={faLongArrowRight} size="lg"/>

export const BlueText = styled.p
`   
    font-weight: 600;
    color: #07689F;
    font-size: 18px;
`

export const MoreContent = styled.div
`
    color: #424F4D;
    text-align: left;
    font-size: 18px;
    margin-top: 20px;
    font-weight: 600;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`