import React from 'react';
import { Navbar, Container, Row, Col, Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../img/logo.png';
import fb from '../img/fb.png';
import bgg from '../img/bgg.png';
import discord from '../img/discord.png';
import yt2 from '../img/yt.svg';
import tabt from '../img/tabt.png';
import ks from '../img/ks.png';
export default class Main extends React.Component {
    render() {
      return <div >
     
        <Container fluid style={{background:"black"}}>
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home" >
              <img alt="" src={logo} width="145" height="60"className="d-inline-block align-top" />{' '}
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
              Canal de Youtube
            </Navbar.Brand>
            <Navbar.Brand href="https://discord.gg/xZjUBu8">
              <img alt="" src={discord} width="35" height="35" className="d-inline-block align-top" />{' '}
              Server en Discord
            </Navbar.Brand>
            <Navbar.Brand href="https://tabletopia.com/playground/sajkab-aeuw8p/play-now">
              <img alt="" src={tabt} width="35" height="35" className="d-inline-block align-top" />{' '}
              Juega en Tabletopia
            </Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">
              <img alt="" src={ks} width="170" height="60" className="d-inline-block align-top" />{' '}
            </Navbar.Collapse>
          </Navbar>
          <Row>
            <Col sm={12}>
             <div style={{margin:"2%", color:"white"}}>
                <h3>¡Bienvenido al nuevo mundo!</h3>
                <p>Sajkab es un juego de cartas y tablero de 2 a 4 jugadores, cada jugador controlará a una facción de entre Mexicas, Espartanos, Samurais o Vikingos en este
                  primer juego base. El objetivo es eliminar los portales de los demas jugadores u obtener los puntos de victoria necesarios para ganar la partida. Cuenta con
                  mecánicas de puntos de acción, control de área, movimiento en área, gestion de mano, tira dado y take that.
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={{ span: 10, offset: 2 }}>
              <iframe width="1008" height="567" src="https://www.youtube.com/embed/bx0Fe1eZ7Ww" frameborder="0"  title="video"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
              </iframe>
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
             <div style={{margin:"2%", color:"white"}}>
                <h3>¡Conoce a las facciones!</h3>
                <p>Cada una de las facciones en Sajkab cuenta con 8 unidades y 2 deidades. Dentro del mazo de unidades encontrarás 16 cartas en total, cada unidad dos veces.
                  Entre ellas se encuentra unidades tipo <span style={{color:"red"}}>Porta-Estandarte</span>, <span style={{color:"blue"}}>Sacerdote, </span>
                  <span style={{color:"#804000"}}>Guerrero</span> y <span style={{color:"green"}}>Sirales</span>.
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm={{ span: 8, offset: 2 }}>
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
          <Row>
            <Col sm={12}>
              <div style={{margin:"2%", color:"white"}}>
                <img alt="" src='https://i.imgur.com/5JetRrK.jpg' width="100%" height="600"  />{' '}                
              </div>
            </Col>
          </Row>
        </Container>
      </div>;
    }
}