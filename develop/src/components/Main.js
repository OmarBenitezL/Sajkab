import React from 'react';
import { Navbar, Container, Row, Col, Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../img/logo.png';
import fb from '../img/fb.png';
import bgg from '../img/bgg.png';
import discord from '../img/discord.png';
import yt2 from '../img/yt.svg';

export default class Main extends React.Component {
    render() {
      return <div style={{background:"white"}}>
     
        <Container style={{background:"white"}}>
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">
              <img alt="" src={logo} width="120" height="60"className="d-inline-block align-top" />{' '}
            </Navbar.Brand>
            <Navbar.Brand href="https://facebook.com/sajkab">
              <img alt="" src={fb} width="65" height="35" className="d-inline-block align-top" />{' '}
              Facebook
            </Navbar.Brand>
            <Navbar.Brand href="https://boardgamegeek.com/boardgame/313460/sajkab">
              <img alt="" src={bgg} width="35" height="35" className="d-inline-block align-top" />{' '}
              Board Game Geek
            </Navbar.Brand>
            <Navbar.Brand href="https://www.youtube.com/channel/UCNZZmf4urlnsl2QWOTP1Fj">
              <img alt="" src={yt2} width="35" height="35" className="d-inline-block align-top" />{' '}
              Canal Youtube
            </Navbar.Brand>
            <Navbar.Brand href="https://discord.gg/xZjUBu8">
              <img alt="" src={discord} width="35" height="35" className="d-inline-block align-top" />{' '}
              Discord Server
            </Navbar.Brand>
          </Navbar>
          <Row>
            <Col sm={3}>
             <div style={{margin:"5%"}}>
                <h3>¡Bienvenido al nuevo mundo!</h3>
                <p>Sajkab es un juego de cartas y tablero de 2 a 4 jugadores, cada jugador controlará a una facción de entre Mexicas, Espartanos, Samurais o Vikingos en este
                  primer juego base. El objetivo es eliminar los portales de los demas jugadores u obtener los puntos de victoria necesarios para ganar la partida. Cuenta con
                  mecánicas de puntos de acción, control de área, movimiento en área, gestion de mano, tira dado y take that.
                </p>
              </div>
            </Col>
            <Col sm={9} style={{background:"white"}}>
              <Carousel>
               <Carousel.Item>
                  <img className="d-block w-100" src="https://i.imgur.com/U2MDZiz.jpg" alt="First slide"/> 
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100" src="https://i.imgur.com/dYYmEnF.jpg" alt="First slide"/>
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100" src="https://i.imgur.com/ERPVoan.jpg" alt="First slide"/>
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100" src="https://i.imgur.com/qiMg1Sd.jpg" alt="First slide"/> 
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </div>;
    }
}