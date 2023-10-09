
import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

import './Galary.css'
// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const Galary = () => {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    }; 
    return (
        <div className='w-11/12 mx-auto pt-20'>
          <div className="App">
            <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
            >
                <a  href="https://i.ibb.co/qdB0nrW/Birthday.jpg">
                <LazyLoadImage className='images '  alt="img1" src="https://i.ibb.co/qdB0nrW/Birthday.jpg" />

                </a>
                <a href="https://i.ibb.co/cc5QWQ6/Weddings.jpg">
                    <LazyLoadImage className='images' alt="img1" src="https://i.ibb.co/cc5QWQ6/Weddings.jpg" />
                </a>
                
                <a href="https://i.ibb.co/JjhLgtT/Baby-1.jpg">
                    <LazyLoadImage className='images' alt="img2" src="https://i.ibb.co/JjhLgtT/Baby-1.jpg" />
                </a>
                <a href="https://i.ibb.co/GQCMWkW/Birthaday-0.jpg">
                    <LazyLoadImage className='images' alt="img2" src="https://i.ibb.co/GQCMWkW/Birthaday-0.jpg" />
                </a>
                <a  href="https://i.ibb.co/BrtftF7/Weddings-4.jpg">
                    <LazyLoadImage className='images' alt="img2" src="https://i.ibb.co/BrtftF7/Weddings-4.jpg" />
                </a>
                <a  href="https://i.ibb.co/hVnZg8Q/Engagement-01.jpg">
                    <LazyLoadImage className='images' alt="img2" src="https://i.ibb.co/hVnZg8Q/Engagement-01.jpg" />
                </a>
                <a href="https://i.ibb.co/9TLhg8f/Baby-3.jpg">
                    <LazyLoadImage className='images' alt="img2" src="https://i.ibb.co/9TLhg8f/Baby-3.jpg" />
                </a>
                <a href="https://i.ibb.co/GCc04LS/Parties.jpg">
                    <LazyLoadImage className='images' alt="img2" src="https://i.ibb.co/GCc04LS/Parties.jpg" />
                </a>
                <a href="https://i.ibb.co/6DbP579/Weddings-2.jpg">
                    <LazyLoadImage className='images' alt="img2" src="https://i.ibb.co/6DbP579/Weddings-2.jpg" />
                </a>
                <a href="https://i.ibb.co/FYydCZd/Engagement-22.jpg">
                    <LazyLoadImage className='images' alt="img2" src="https://i.ibb.co/FYydCZd/Engagement-22.jpg" />
                </a>
                <a href="https://i.ibb.co/w0mNQ88/Anniversaries-1.jpg">
                    <LazyLoadImage className='images' alt="img2" src="https://i.ibb.co/w0mNQ88/Anniversaries-1.jpg" />
                </a>
                <a href="https://i.ibb.co/j5R7RLD/Baby-4.jpg">
                    <LazyLoadImage className='images' alt="img2" src="https://i.ibb.co/j5R7RLD/Baby-4.jpg" />
                </a>
                <a href="https://i.ibb.co/BrtftF7/Weddings-4.jpg">
                    <LazyLoadImage className='images' alt="img2" src="https://i.ibb.co/BrtftF7/Weddings-4.jpg" />
                </a>
                <a href="https://i.ibb.co/sqKGmG1/Weddings-3.jpg">
                    <LazyLoadImage alt="img2" src="https://i.ibb.co/sqKGmG1/Weddings-3.jpg" />
                </a>
                <a href="https://i.ibb.co/DCyPrK3/Birthday-3.jpg">
                    <LazyLoadImage alt="img2" src="https://i.ibb.co/DCyPrK3/Birthday-3.jpg" />
                </a>
            </LightGallery>
        </div>
        </div>
    );
};

export default Galary;