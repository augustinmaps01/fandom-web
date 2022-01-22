import React, { useState } from "react";
import '../../dist/post.css';
import {Form,Button } from 'react-bootstrap';
import imageIcon from '../../img/image-icon.jpg';


export default function Post () {
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
    
        <div className = "post-container">
            <div className = "post-wrapper">
                <div className = "title-post">
                    <h1>New Post</h1>
                </div>
                <Form className = "form-wrapper">
                    <Form.Group>
                        <Form.Control size = "lg" type = "text" placeholder = "Enter a Name" />
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
                    <Button as = "submit" variant="primary">Post</Button>
                </Form>
            </div>
        </div>
    );

}