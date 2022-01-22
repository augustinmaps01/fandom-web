import React, { useState } from 'react';
import { Carousel,Modal,Button,Form} from 'react-bootstrap';
import '../../dist/index.css';
import '../../dist/post.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faCalendarAlt,faComment } from '@fortawesome/free-regular-svg-icons'
import baeSuzy from '../../img/suzybz_1___B_K67hLpfsT___.jpg';
import IU from '../../img/iu_leejieun516___CFRfERRhK62___.jpg';
import parkMin from '../../img/rachel_mypark___BkT0jmnlGr5___.jpg';
import bleach from '../../img/images (15).jpg';
import natsu from '../../img/fairy_tail__natsu_dragneel_by_kawaii_smilez-d3d5bt4 (1).jpg';
import luffy from '../../img/Luffy-One-Piece-monkey-d-luffy-37712150-380-500.jpg';
import jennie from '../../img/jennierubyjaner_2___B_Am_qbJB-p___.jpg';
import lisa from '../../img/lisa.jpg';
import jisoo from '../../img/sooyaaa__jisooo_1___BraBHDEFK8o___.jpg';
import imageIcon from '../../img/image-icon.jpg';
import CarouselImage  from "../Carouselimage.js";

export default function LandingPage () {
    // const [smShow, setSmShow] = useState(false);
  
    const [lgShow, setLgShow] = useState(false);
    const [image, setImage] = useState({ preview: "", raw: "" });
    const handleChange = e => {
        if (e.target.files.length) {
          setImage({
            preview: URL.createObjectURL(e.target.files[0]),
            raw: e.target.files[0]
          });
        }
      };



    return (
        <div className = "home-container">
           <CarouselImage />
        
            <Modal size = "lg" show={lgShow} onHide={() => setLgShow(false)}>
            <Modal.Header closeButton>
            <Modal.Title>New Post</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form>
            <Form.Group>
                <Form.Control  type = "text" placeholder = "Enter a Name" />
            </Form.Group>
            <Form.Group>
                <Form.Control placeholder = "Write A Caption" as = "textarea"   rows = {3} />
            </Form.Group>
            <Form.Group>
                <div class="image-upload">
                <label for="file-input">
                {image.preview ? (
                    <img  className = "img-prev" src = {image.preview} />
                ) : (
                    <img  className = "img-upload" src={imageIcon} />
                )}
            
                </label>
        
                <input id="file-input" type="file" onChange={handleChange}  />
            </div>
            </Form.Group>
        </Form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="primary">
                Post
            </Button>
            </Modal.Footer>
        </Modal>




            <div className= "section-box">
                <div className = "title-home">
                    <h1>News Feed</h1>
                </div>
                <div className = "btn-post">
                    <Button variant = "primary" as = "button" onClick = {() => setLgShow(true)}>Create Post</Button>
                </div>
                <div className = "rows">
                    <div className = "box-wrapper">
                        <div className = "box">
                            <img src = {baeSuzy} alt = "Bae Suzy" />
                        </div>
                        <div className = "box-content">
                            <div className = "box-title">
                                <h3 className = "txt-box">Bae Suzy</h3>
                            </div>
                            <div className = "txt-icons">
                                <p className = "txt-box1"> <FontAwesomeIcon icon = {faCalendarAlt} /> 15 January 2020</p>
                                <p className = "txt-box1"><FontAwesomeIcon icon={faThumbsUp } /> 3 likes</p>
                                <p className = "txt-box1">  <FontAwesomeIcon icon = {faComment} /> 8 comments</p>
                            </div>
                            <div className = "txt-content">
                                <h3 className = "txt-box2">Singer-turned-actress Suzy said she doesn’t trust people easily in an interview during a recent photo shoot for the Taiwanese edition of a local magazine.

                                “I don’t trust people easily. I always have doubts and am wary of people. But once they gain my trust, I trust in them for real,” she said.
                                
                                Some photos showed Suzy clad in a matching washed denim jacket and skirt with her long black hair let down.
                                
                                Having expanded into acting, Suzy also assessed her acting career.</h3>
                            </div>
                        </div>
                    </div>
                    <div className = "box-wrapper">
                        <div className = "box">
                            <img src = {IU} alt = "IU" />
                        </div>
                        <div className = "box-content">
                            <div class = "box-title">
                                <h3 className = "txt-box">IU</h3>
                            </div>
                            <div className = "txt-icons">
                                <p className = "txt-box1"> <FontAwesomeIcon icon = {faCalendarAlt} /> 15 January 2020</p>
                                <p className = "txt-box1"><FontAwesomeIcon icon={faThumbsUp } /> 3 likes</p>
                                <p className = "txt-box1">  <FontAwesomeIcon icon = {faComment} /> 8 comments</p>
                            </div>
                            <div className ="txt-content">
                                <h3 className = "txt-box2">
                                    Lee Ji Eun also Known us IU is a South Korean solo singer and actress. She debuted on September 18, 2008 under Kakao M (formerly LOEN Entertainment). On January 6th 2020, it was announced that IU has now signed a contract with EDAM Entertainment.
                                    She’s really the best. She often gets misunderstood due to her shy and quiet personality, but once you get to know her more, you’ll find that she’s really a genuine and honest person.
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className = "box-wrapper">
                        <div className = "box">
                            <img src = {parkMin} alt = "Park Min-young" />
                        </div>
                        <div className = "box-content">
                            <div class = "box-title">
                                <h3 className = "txt-box">Park Min-young</h3>
                            </div>
                            <div className = "txt-icons">
                                <p className = "txt-box1"> <FontAwesomeIcon icon = {faCalendarAlt} /> 15 January 2020</p>
                                <p className = "txt-box1"><FontAwesomeIcon icon={faThumbsUp } /> 3 likes</p>
                                <p className = "txt-box1">  <FontAwesomeIcon icon = {faComment} /> 8 comments</p>
                            </div>
                        <div className = "txt-content">
                                <h3 className = "txt-box2">
                                    She's traveled light years from her beginnings from 2006's K-Drama High Kick! to make it to her breakthrough
                                     roles in coming of age shows, drama Sungkyunkwan Scandal and manga adaptation City Hunter, the latter of 
                                     which had her star alongside top Hallyu star, Lee Min-ho. The fact that she's had projects pour in every 
                                     year since 2006, with each succeeding one bigger than the last mirrors her career's trajectory of only 
                                     going upwards and forward.            
                                </h3>
                        </div>
                        </div>
                    </div>
                    <div className = "box-wrapper">
                        <div className = "box">
                            <img src = {bleach } alt = "bleach" />
                        </div>
                        <div className = "box-content">
                            <div className = "box-title">
                                <h3 className = "txt-box">Kurosaki Ichigo</h3>
                            </div>
                            <div className = "txt-icons">
                                <p className = "txt-box1"> <FontAwesomeIcon icon = {faCalendarAlt} /> 15 January 2020</p>
                                <p className = "txt-box1"><FontAwesomeIcon icon={faThumbsUp } /> 3 likes</p>
                                <p className = "txt-box1">  <FontAwesomeIcon icon = {faComment} /> 8 comments</p>
                            </div>
                            <div className = "txt-content">
                                <h3 className = "txt-box2">
                                    Ichigo's most distinguishing feature is his spiky orange hair, a trait he has been ridiculed about for years on end. He is a fairly tall, lean-built young man with peach skin and brown eyes. He likes to wear slim fitting clothes.
                                    He has a tendency to wear shirts patterned with the number 15 because his name is a homonym for the number.
                                    Since becoming a Shinigami, he has become noticeably more muscular, as noted by his sister Karin.
                                    When in his spiritual form, Ichigo wears the standard Shinigami attire, with the addition of a strap across his chest. 
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className = "box-wrapper">
                        <div className = "box">
                            <img src = {natsu} alt = "natsu" />
                        </div>
                        <div className ="box-content">
                            <div className = "box-title">
                                <h3 className = "txt-box">Natsu Dragneel</h3>
                            </div>
                            <div className = "txt-icons">
                                <p className = "txt-box1"> <FontAwesomeIcon icon = {faCalendarAlt} /> 15 January 2020</p>
                                <p className = "txt-box1"><FontAwesomeIcon icon={faThumbsUp } /> 3 likes</p>
                                <p className = "txt-box1">  <FontAwesomeIcon icon = {faComment} /> 8 comments</p>
                            </div>
                            <div className = "txt-content">
                                <h3 className = "txt-box2">
                                    Natsu is a lean, muscular young man of average height with a slightly tan skin tone, black eyes, spiky pink-colored hair, and has abnormal sharp canines;
                                    Natsu has a scar on the right side of his neck, hidden by his scarf.Following his intense battle with the Rogue Cheney of the future, Natsu gains a cross-shaped scar on the left side of his abdomen, a result of the two fatal wounds the man dealt to him during their altercations.He later attains a new scar, this one being a jagged blemish on his right cheek, which he gained following his battle with Zeref.
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className = "box-wrapper">
                        <div className = "box">
                            <img src = {luffy } alt = "Monkey Luffy" />
                        </div>
                        <div className = "box-content">
                            <div className = "box-title">
                                <h3 className = "txt-box">Monkey D. Luffy</h3>
                            </div>
                            <div className = "txt-icons">
                                <p className = "txt-box1"> <FontAwesomeIcon icon = {faCalendarAlt} /> 15 January 2020</p>
                                <p className = "txt-box1"><FontAwesomeIcon icon={faThumbsUp } /> 3 likes</p>
                                <p className = "txt-box1">  <FontAwesomeIcon icon = {faComment} /> 8 comments</p>
                            </div>
                            <div className = "txt-content">
                                <h3 className = "txt-box2">
                                    Luffy has black shaggy hair, round black eyes, and a slim muscular build.
                                    He is renowned for his trademark straw hat (from which he gets his nickname "Straw Hat 
                                    Luffy"), which was lent to him when he was young by the legendary pirate captain, 
                                    "Red-Haired" Shanks, who in turn received it from Gol D. Roger. He wears short,
                                    blue trousers with cuffs, sandals, and a sleeveless red vest. Luffy also has a scar 
                                    with two stitches underneath his left eye, which he earned by stabbing a knife under 
                                    his eye to show Shanks that he was tough and not afraid of pain, and short, messy 
                                    black hair. He was severely wounded by Akainu in the Battle of Marineford, leaving a 
                                    large X-shaped scar on his chest.
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className = "box-wrapper">
                        <div className = "box">
                            <img src = {jennie } alt = "Jennie Kim" />
                        </div>
                        <div className = "box-content">
                            <div className = "box-title">
                                <h3 className = "txt-box">Jennie Kim</h3>
                            </div>
                            <div className = "txt-icons">
                                <p className = "txt-box1"> <FontAwesomeIcon icon = {faCalendarAlt} /> 15 January 2020</p>
                                <p className = "txt-box1"><FontAwesomeIcon icon={faThumbsUp } /> 3 likes</p>
                                <p className = "txt-box1">  <FontAwesomeIcon icon = {faComment} /> 8 comments</p>
                            </div>
                            <div className = "txt-content">
                                <h3 className = "txt-box2">
                                    She has a gummy smile that is as soft as cotton candy! Another side of Jennie that you
                                    probably didn't know about is her warm, bubbly, and adorably cute personality.
                                    When cute Jennie is activated, she will melt your heart in an instant. 
                                    She will tease you with a charming aegyo and with her childish talk
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className = "box-wrapper">
                        <div className = "box">
                            <img src = {lisa } alt = "lisa monoban" />
                        </div>
                        <div className = "box-content">
                            <div className = "box-title">
                                <h3 className = "txt-box">Lisa Manoban</h3>
                            </div>
                            <div className = "txt-icons">
                                <p className = "txt-box1"> <FontAwesomeIcon icon = {faCalendarAlt} /> 15 January 2020</p>
                                <p className = "txt-box1"><FontAwesomeIcon icon={faThumbsUp } /> 3 likes</p>
                                <p className = "txt-box1">  <FontAwesomeIcon icon = {faComment} /> 8 comments</p>
                            </div>
                            <div className = "txt-content">
                                <h3 className = "txt-box2">
                                    Living up to her maknae name, Lisa is very mischievous and playful off stage 
                                    the furthest departure of all the girls when it comes to on stage presence, because 
                                    it is not an understatement to say that Lisa has swag.
                                    And Lisa can speak Korean, Japanese, English, and Thai.
                                    The language skills for all of the BLACKPINK members is nothing short of impressive.
                                    Lisa also appeared in BIG BANG Taeyang’s “Ringa Linga” MV and was incredible, 
                                    as always.
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className = "box-wrapper">
                        <div className = "box">
                            <img src = {jisoo} alt = "jisoo" />
                        </div>
                        <div className = "box-content">
                            <div className = "box-title">
                                <h3 className = "txt-box">Kim Jisoo</h3>
                            </div>
                            <div className = "txt-icons">
                                <p className = "txt-box1"> <FontAwesomeIcon icon = {faCalendarAlt} /> 15 January 2020</p>
                                <p className = "txt-box1"><FontAwesomeIcon icon={faThumbsUp } /> 3 likes</p>
                                <p className = "txt-box1">  <FontAwesomeIcon icon = {faComment} /> 8 comments</p>
                            </div>
                            <div className = "txt-content">
                                <h3 className = "txt-box2">
                                    She has what is known as a 4D personality, which is Korean slang for being quirky 
                                    and thinking outside of the box. Most often this can be seen in her balancing 
                                    everything from banana milk, to bottles of water, on her body — in fact, it has
                                    become something of a game amongst Blinks to catch Jisoo in the act in the background 
                                    trying to get away with this.
            
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>     
    </div>
    
    );
}
