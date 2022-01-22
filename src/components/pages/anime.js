import React from 'react';
import '../../dist/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Bleach from '../../img/40451.jpg';
import Naruto from '../../img/naruto-shippuden_00011445.jpg';
import Fairytail from '../../img/fairytail.jpg';
import OnePiece from '../../img/ecb3e2a645133b1d043121e728711caa.jpg';
import dbz from '../../img/dbz.jpg';
import kuroko from '../../img/kuroko.jpg';
import slamdunk from '../../img/slamdunk.jpg';
import haikyu from '../../img/haikyu.jpg';
import demonslayer from '../../img/demon slayer.jpg';
import sao from '../../img/sao.jpg';
export default function Anime () {
    return (
        <div class = "site-container">
            <div className = "banner-wrap">
                <h1 className = "banner-title">Anime Gallery</h1>
                <div className = "overlay"></div>
            </div>
            <div className = "container-wrapper">
                <div className = "header-row">
                    <div className = "title-header">
                        <a className = "album-title">Anime Album</a>
                    </div>
                    <div className = "title-header">
                        <a className = "link-title">New Album</a>
                    </div>
                   
                </div>
                <div className = "row-flex">
                    <div class = "gallery-col">
                        <img src = {Bleach} alt = "bleach" />
                        <div className = "gallery-header">
                            <a className = "gallery-name" href = "#">Bleach</a>
                        </div>
                    </div>
                    <div class = "gallery-col">
                        <img src = {Naruto} alt = "bleach" />
                        <div className = "gallery-header">
                            <a className = "gallery-name" href = "#">Naruto Shippuden</a>   
                        </div>
                    </div>
                    <div class = "gallery-col">
                        <img src = {Fairytail} alt = "bleach" />
                        <div className = "gallery-header">
                            <a className = "gallery-name" href = "#">Fairytail</a>   
                        </div>
                    </div>
                    <div class = "gallery-col">
                        <img src = {OnePiece} alt = "One Piece" />
                        <div className = "gallery-header">
                            <a className = "gallery-name" href = "#">One Piece</a>   
                        </div>
                    </div>
                    <div class = "gallery-col">
                        <img src = {dbz} alt = "Dragon Ball" />
                        <div className = "gallery-header">
                            <a className = "gallery-name" href = "#">Dragon Ball</a>   
                        </div>
                    </div>
                    <div class = "gallery-col">
                        <img src = {slamdunk} alt = "slamdunk" />
                        <div className = "gallery-header">
                            <a className = "gallery-name" href = "#">Slam Dunk</a>   
                        </div>
                    </div>
                    <div class = "gallery-col">
                        <img src = {haikyu} alt = "bleach" />
                        <div className = "gallery-header">
                            <a className = "gallery-name" href = "#">Haikyuu</a>   
                        </div>
                    </div>
                    <div class = "gallery-col">
                        <img src = {kuroko} alt = "bleach" />
                        <div className = "gallery-header">
                            <a className = "gallery-name" href = "#">Kuroko Basketball</a>   
                        </div>
                    </div>
                    <div class = "gallery-col">
                        <img src = {sao} alt = "bleach" />
                        <div className = "gallery-header">
                            <a className = "gallery-name" href = "#">Sword Art Online</a>   
                        </div>
                    </div>
                    <div class = "gallery-col">
                        <img src = {demonslayer} alt = "bleach" />
                        <div className = "gallery-header">
                            <a className = "gallery-name" href = "#">demon Slayer</a>   
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
