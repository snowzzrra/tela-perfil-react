import './App.css';
import {Alert, AlertIcon, Body, Header, Searchbar, Profile, UserIcon, UserInfo, UserRanking, UserLocation, HorizontalRuler, StarIcon, BlueText, ArrowIcon, MoreContent} from './styles';
import Cards from './Card';
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
        <div>
          <Swiper
            breakpoints={{
              320: {
                spaceBetween: 25,
                slidesPerView: 1.75,
              },
              1024: {
                spaceBetween: 5,
                slidesPerView: 1.9,
              },
            }}
          >
            <SwiperSlide><Cards src="https://spdm.org.br/wp-content/uploads/2016/05/k2_items_src_a994012531a064cee191b71c491599f4.jpg" 
            title="Parceiros" description="Diabetes: alimentos para evitar." bgColor="#d48a04"/></SwiperSlide>

            <SwiperSlide><Cards src="https://www.santos.sp.gov.br/static/files_www/styles/newspagemodal/public/field/image/pexels-rfstudio-3825529.jpg" 
            title="Capacitações" description="Como ministrar doses" bgColor="#3b2d72"/></SwiperSlide>

            <SwiperSlide><Cards src="https://cdn.palmbeachillustrated.com/wp-content/uploads/sites/78/2023/03/Dr.-Jean-Monice-caring-for-a-pediatric-patient-in-Palm-Beach-County.-Photo-by-CBS12-News-photographer-Jackson-Morris-1024x768.jpg" 
            title="Capacitações" description="Cuidado infantil básico ao avançado." bgColor="#3b2d72"/></SwiperSlide>
          </Swiper>
        </div>
      </Body>
    </div>
  );
}

export default App;
