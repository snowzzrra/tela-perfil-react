import logo from './logo.svg';
import './App.css';
import {Alert, AlertIcon, Body, Header, Searchbar, Profile, UserIcon, UserInfo, UserRanking, UserLocation, HorizontalRuler, StarIcon, BlueText, ArrowIcon, MoreContent} from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTriangleExclamation, faUser } from '@fortawesome/free-solid-svg-icons'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function App() {
  return (
    <div className="App">
      <Header>
        <Searchbar type="text" placeholder="Buscar capacitações, profissionais..." />
      </Header>

      <Body>
        <Alert> 
          <AlertIcon><FontAwesomeIcon icon={faTriangleExclamation} size="xl"/></AlertIcon>
          <p><strong>Completar perfil:</strong> Preencha suas informações para encontrar pacientes.</p>
        </Alert>

        <Profile>
          <p>Seu perfil</p>
          <UserInfo>
            <UserIcon><FontAwesomeIcon icon={faUser} size="2xl"/></UserIcon>
            <div>
              <strong>Carolina Magalhães</strong>
              <UserLocation>São Paulo - SP</UserLocation>
              <UserRanking>
                <StarIcon></StarIcon>
                <StarIcon></StarIcon>
                <StarIcon></StarIcon>
                <StarIcon></StarIcon>
                <StarIcon></StarIcon>
                (0) 
              </UserRanking>
            </div>
          </UserInfo>
          
        </Profile>
        <HorizontalRuler></HorizontalRuler>
        
        <BlueText>
          Completar perfil<ArrowIcon></ArrowIcon>
        </BlueText>

        <MoreContent>
          <p>Capacitações profissionais</p>
          <BlueText>
            Ver mais
          </BlueText>
          
        </MoreContent>
        <Swiper 
            spaceBetween={50}
            slidesPerView={1.75}
          >
            <SwiperSlide><img src='https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-3foodgroups_fruits_detailfeature.jpg?sfvrsn=64942d53_4'></img></SwiperSlide>
            <SwiperSlide><img src='https://s5.static.brasilescola.uol.com.br/be/2023/01/diversas-frutas-em-fundo-branco.jpg'></img></SwiperSlide>
          </Swiper>
      </Body>
    </div>
  );
}

export default App;
