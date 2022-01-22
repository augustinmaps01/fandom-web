import React from 'react';
import '../../dist/main.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from 'react-bootstrap';
import parkShinHye from '../../img/parkshinhye.jpg';
import baeSuzy from '../../img/wp2133302.jpg';
import parkMinYoung from '../../img/parkminyoung.jpg';
import kimyouJung from '../../img/kimyoojung.jpg';
import yooIna from '../../img/YOOnm.jpg';
import kjw from '../../img/kim_ji_won-actress-korean.jpg';
import lsk from '../../img/lsk.jpg';
import syj from '../../img/syj.jpg';
import seoyiji from '../../img/seo.jpg';
import shiMinAh from '../../img/shin min ah 345.jpg';
import leeJiEun from '../../img/lee ji.jpg';
import songhyekyo from '../../img/images.jpg';
//? import list of image gallery
import LeejiEun from '../../img/dlwlrma_3___BrbbMcAHv4A___1.jpg';
import yoInNa from '../../img/yooinna065-___BTLe8afjq-T___-.jpg';
import rachelPark from '../../img/rachel_mypark___Bj4EbKjFI_N___.jpg';
import suzy from '../../img/bb3ecfe32f42f537d99f4c4b80f1b9a4.jpg';
import shinHye from '../../img/a1d5ab6ae9ed967aa35d80af9fd69bb8.jpg';
import KimYooJung from '../../img/FB_IMG_1604224575322.jpg';
import shinMinAhh from '../../img/shin-min-ah-wallpaper-8.jpg';
import leeSungKyung from '../../img/heybiblee_2-___CEtakVsgPTK___-.jpg';
import kimJiwon  from '../../img/geewonii-___BIRcsf0gehS___-.jpg';
import SonHyeJin from '../../img/yejincow_2-___CI5Np1JJYTp___-.jpg';


export default function koreanDrama () {
    return (
        <div className = "site-container">
            <Carousel>
                <Carousel.Item interval = {1000}>
                    <img className = "d-block w-100" src = {parkShinHye} alt = "slider1" />
                    <Carousel.Caption>
                        <h3 className = "caption-title">Park Shin Hye</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval = {1000}>
                    <img className = "d-block w-100" src = {baeSuzy} alt = "slider2" />
                    <Carousel.Caption>
                        <h3 className = "caption-title">Bae Suzy</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval = {1000}>
                    <img className = "d-block w-100" src = {parkMinYoung} alt = "slider3" />
                    <Carousel.Caption>
                        <h3 className = "caption-title">Park Min Young</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval = {1000}>
                    <img className = "d-block w-100" src = {kimyouJung} alt = "slider4" />
                    <Carousel.Caption>
                        <h3 className = "caption-title">Kim Yoo Jung</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval = {1000}>
                    <img className = "d-block w-100" src = {yooIna} alt = "slider5" />
                    <Carousel.Caption>
                        <h3 className = "caption-title">Yoo In Na</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval = {1000}>
                    <img className = "d-block w-100" src = {kjw} alt = "slider6" />
                    <Carousel.Caption>
                        <h3 className = "caption-title">Kim Ji Won</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval = {1000}>
                    <img className = "d-block w-100" src = {lsk} alt = "slider7" />
                    <Carousel.Caption>
                        <h3 className = "caption-title">Lee Sung Kyung</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval = {1000}>
                    <img className = "d-block w-100" src = {syj} alt = "slider8" />
                    <Carousel.Caption>
                        <h3 className = "caption-title">Son Ye Jin</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval = {1000}>
                    <img className = "d-block w-100" src = {seoyiji} alt = "slider9" />
                    <Carousel.Caption>
                        <h3 className = "caption-title">Seo Ye Ji</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval = {1000}>
                    <img className = "d-block w-100" src = {shiMinAh} alt = "slider10" />
                    <Carousel.Caption>
                        <h3 className = "caption-title">Shin Min Ah</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval = {1000}>
                    <img className = "d-block w-100" src = {leeJiEun} alt = "slider10" />
                    <Carousel.Caption>
                        <h3 className = "caption-title">IU</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval = {1000}>
                    <img className = "d-block w-100" src = {songhyekyo} alt = "slider11" />
                    <Carousel.Caption>
                        <h3 className = "caption-title">Song Hye Kyo</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
                <div className = "container-wrapper">
                    <div className = "header-row">
                        <div className = "title-header">
                            <a className = "album-title">Korean Actress Album</a>
                        </div>
                        <div className = "title-header">
                            <a className = "link-title">New Album</a>
                        </div>
                    </div>
                    <div className = "row-flex">
                        <div className = "gallery-col">
                            <img src = {LeejiEun } alt = "IU" /> 
                            <div className = "gallery-header">
                                <a  className = "gallery-name">IU</a>
                            </div>
                        </div>
                        <div className = "gallery-col">
                            <img src = {yoInNa} alt = "Yo in Na" />
                            <div className = "gallery-header">
                                <a className = "gallery-name">Yoo in-Na</a>
                            </div>
                        </div>
                        <div className = "gallery-col">
                            <img src = {rachelPark } alt = "Park min young" />
                            <div className = "gallery-header">
                                <a className = "gallery-name">Park Min young</a>
                            </div>
                        </div>
                        <div className = "gallery-col">
                            <img src ={suzy} alt = "Bae Suzy" />
                            <div className = "gallery-header">
                                <a className = "gallery-name">Bae Suzy</a>
                            </div>
                        </div>
                        <div className = "gallery-col">
                            <img src = {shinHye} alt ="park shin hye" /> 
                            <div className = "gallery-header">
                                <a className = "gallery-name">Park Shin hye</a>
                            </div>
                        </div>
                        <div className = "gallery-col">
                            <img src = {KimYooJung} alt = "Kim Yoo Jung" />
                            <div className = "gallery-header">
                                <a className = "gallery-name">Kim Yoo Jung</a>
                            </div>
                        </div>
                        <div className = "gallery-col">
                            <img src = {shinMinAhh} alt = "Shin Min AH" />
                            <div className = "gallery-header">
                                <a className = "gallery-name">Shin Min ah</a>
                            </div>
                        </div>
                        <div className = "gallery-col">
                            <img src = {leeSungKyung} alt = "Lee Sung Kyung" />
                            <div className = "gallery-header">
                                <a className = "gallery-name">Lee Sung Kyung</a>
                            </div>
                        </div>
                        <div className = "gallery-col">
                            <img src = {kimJiwon} alt = "Kim Ji Won" />
                            <div className = "gallery-header">
                                <a className = "gallery-name">Kim Ji Won</a>
                            </div>
                        </div>
                        <div className = "gallery-col">
                            <img src = {SonHyeJin} alt = "Son Ye Jin" />
                            <div className = "gallery-header">
                                <a className = "gallery-name">Son Ye Jin</a>
                            </div>
                        </div>
                    </div>
                    
                </div>
        </div>


    );
}