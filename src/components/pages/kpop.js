import React from 'react';
import '../../dist/App.css';
import '../../dist/kpop.css';
import '../../dist/main.css';
import {Carousel} from 'react-bootstrap';
import redVelvet from '../../img/Red Velvet Power Up.jpg';
import BLACKPINK from '../../img/cd6787aed01de723495dbbd0f74ba925.jpg';
import Twice from '../../img/twice_wake_me_up.jpg';
import Aespa from '../../img/wp8007038.jpg';
import jisooKim from '../../img/jisoo blackpink.jpg';
import kimJennie from '../../img/jennieokie_4___CBLpAjqFZy5___.jpg';
import lisaM from '../../img/lisablackspink___CB0HnxVHnl3___.jpg';
import karina from '../../img/aespa_karina__1-___CIITnLVgJ8Z___-.jpg';
import Rose from '../../img/Rose.jpeg';
import Tzuyu from '../../img/queentzuyu___B4_rfw5FvnZ___.jpg';
import Nayeon from '../../img/nayeon.jpg';
import dahyun from '../../img/dahyun2.jpg';
import irene from '../../img/irene.jpg';
import joy from '../../img/joy.jpg';
export default function Kpop () {
    return (
        <div>
            <div className = "site-container">
                <Carousel>
                    <Carousel.Item interval = {1000}>
                        <img className = "d-block w-100" src = {BLACKPINK} alt = "slide1" />
                        <Carousel.Caption>
                            <h3 className = "blackpink">BLACKPINK</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval = {1000}>
                        <img className = "d-block w-100" src = {Twice} alt = "slide2" />
                        <Carousel.Caption>
                            <h3 className = "twice">TWICE</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval = {1000}>
                        <img className = "d-block w-100" src = {redVelvet} alt = "slide3" />
                        <Carousel.Caption>
                            <h3 className = "redvelvet">Red Velvet</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval = {1000}>
                        <img className = "d-block w-100" src = {Aespa} alt = "slide5" />
                        <Carousel.Caption>
                            <h3 className = "aespa">Aespa</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <div className = "container-wrapper">
                    <div className = "header-row">
                        <div className = "title-header">
                            <a className = "album-title" href = "#">Kpop Idols Album</a>
                        </div>
                        <div className = "title-header">
                            <a className = "link-title">New Album</a>
                        </div>
                    </div>
                    <div className = "row-flex">
                        <div className = "gallery-col">
                            <img src = {jisooKim} alt = "Jisoo" />
                            <div className = "gallery-header">
                                <a href = "#" className = "gallery-name">Kim Jisoo</a>
                            </div>
                        </div>
                        <div className = "gallery-col">
                            <img src = {kimJennie} alt = "Jennie Kim" />
                            <div className = "gallery-header">
                                <a href = "#" className = "gallery-name">Jennie Kim</a>
                            </div>
                        </div>
                        <div className = "gallery-col">
                            <img src = {lisaM} alt = "Lisa Manoban" />
                            <div className = "gallery-header">
                                <a href = "#" className = "gallery-name">Lisa Manoban</a>
                            </div>
                        </div>
                        <div className = "gallery-col">
                            <img src = {Rose} alt = "lisa Manoban" />
                            <div className = "gallery-header">
                                <a href = "#" className = "gallery-name">Park Chae-young (Rose)</a>
                            </div>
                        </div>
                        <div className = "gallery-col">
                            <img src = {karina} alt = "Karina" />
                            <div className = "gallery-header">
                                <a href = "#" className = "gallery-name">Karina</a>
                            </div>
                        </div>
                        <div className = "gallery-col">
                            <img src = {Tzuyu} alt = "Tzuyu" />
                            <div className = "gallery-header">
                                <a href = "#" className = "gallery-name">Tzuyu</a>
                            </div>
                        </div>
                        <div className = "gallery-col">
                            <img src = {Nayeon} alt = "Nayeon" />
                            <div className = "gallery-header">
                                <a href = "#" className = "gallery-name">Nayeon</a>
                            </div>
                        </div>
                        <div className = "gallery-col">
                            <img src = {dahyun} alt = "Dahyun" />
                            <div className = "gallery-header">
                                <a href = "#" className = "gallery-name">Dahyun</a>
                            </div>
                        </div>
                        <div className = "gallery-col">
                            <img src= {irene} alt = "irene" />
                            <div className = "gallery-header">
                                <a href= "#" className = "gallery-name">Irene</a>
                            </div>
                        </div>
                        <div className = "gallery-col">
                            <img src= {joy} alt = "joy" />
                            <div className = "gallery-header">
                                <a href= "#" className = "gallery-name">Joy</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        
        
        
        </div>
    );
}