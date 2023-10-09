
import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

import './Galary.css'
// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
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
              {/* b */}
                <a href="https://i.ibb.co/qdB0nrW/Birthday.jpg">
                    <img alt="img1" src="https://i.ibb.co/qdB0nrW/Birthday.jpg" />
                </a>
                <a href="https://i.ibb.co/mrpwPTQ/Birthday-1.png">
                    <img className='brithday' alt="img2" src="https://i.ibb.co/mrpwPTQ/Birthday-1.png" />
                </a>
                <a href="https://i.ibb.co/GQCMWkW/Birthaday-0.jpg">
                    <img alt="img2" src="https://i.ibb.co/GQCMWkW/Birthaday-0.jpg" />
                </a>
                <a href="https://i.ibb.co/DCyPrK3/Birthday-3.jpg">
                    <img alt="img2" src="https://i.ibb.co/DCyPrK3/Birthday-3.jpg" />
                </a>
               {/*  { "img_list": "https://i.ibb.co/cc5QWQ6/Weddings.jpg" },
      { "img_list": "https://i.ibb.co/6DbP579/Weddings-2.jpg" },
      { "img_list": "https://i.ibb.co/BrtftF7/Weddings-4.jpg" },
      { "img_list": "https://i.ibb.co/sqKGmG1/Weddings-3.jpg" }, */}
                <a href="https://i.ibb.co/qdB0nrW/Birthday.jpg">
                    <img alt="img1" src="https://i.ibb.co/qdB0nrW/Birthday.jpg" />
                </a>
                <a href="https://i.ibb.co/mrpwPTQ/Birthday-1.png">
                    <img className='brithday' alt="img2" src="https://i.ibb.co/mrpwPTQ/Birthday-1.png" />
                </a>
                <a href="https://i.ibb.co/GQCMWkW/Birthaday-0.jpg">
                    <img alt="img2" src="https://i.ibb.co/GQCMWkW/Birthaday-0.jpg" />
                </a>
                <a href="https://i.ibb.co/DCyPrK3/Birthday-3.jpg">
                    <img alt="img2" src="https://i.ibb.co/DCyPrK3/Birthday-3.jpg" />
                </a>
                {/* { "img_list": "https://i.ibb.co/cc5QWQ6/Weddings.jpg" },
      { "img_list": "https://i.ibb.co/6DbP579/Weddings-2.jpg" },
      { "img_list": "https://i.ibb.co/BrtftF7/Weddings-4.jpg" },
      { "img_list": "https://i.ibb.co/w0mNQ88/Anniversaries-1.jpg" },
      { "img_list": "https://i.ibb.co/kqtVRyq/Anniversaries-3.jpg" } */}
                <a href="https://i.ibb.co/qdB0nrW/Birthday.jpg">
                    <img alt="img1" src="https://i.ibb.co/qdB0nrW/Birthday.jpg" />
                </a>
                <a href="https://i.ibb.co/mrpwPTQ/Birthday-1.png">
                    <img className='brithday' alt="img2" src="https://i.ibb.co/mrpwPTQ/Birthday-1.png" />
                </a>
                <a href="https://i.ibb.co/GQCMWkW/Birthaday-0.jpg">
                    <img alt="img2" src="https://i.ibb.co/GQCMWkW/Birthaday-0.jpg" />
                </a>
                <a href="https://i.ibb.co/DCyPrK3/Birthday-3.jpg">
                    <img alt="img2" src="https://i.ibb.co/DCyPrK3/Birthday-3.jpg" />
                </a>
               {/*  { "img_list": "https://i.ibb.co/cc5QWQ6/Weddings.jpg" },
      { "img_list": "https://i.ibb.co/6DbP579/Weddings-2.jpg" },
      { "img_list": "https://i.ibb.co/BrtftF7/Weddings-4.jpg" },
      { "img_list": "https://i.ibb.co/GCc04LS/Parties.jpg" },
      { "img_list": "https://i.ibb.co/FYydCZd/Engagement-22.jpg" } */}
                <a href="https://i.ibb.co/qdB0nrW/Birthday.jpg">
                    <img alt="img1" src="https://i.ibb.co/qdB0nrW/Birthday.jpg" />
                </a>
                <a href="https://i.ibb.co/mrpwPTQ/Birthday-1.png">
                    <img className='brithday' alt="img2" src="https://i.ibb.co/mrpwPTQ/Birthday-1.png" />
                </a>
                <a href="https://i.ibb.co/GQCMWkW/Birthaday-0.jpg">
                    <img alt="img2" src="https://i.ibb.co/GQCMWkW/Birthaday-0.jpg" />
                </a>
                <a href="https://i.ibb.co/DCyPrK3/Birthday-3.jpg">
                    <img alt="img2" src="https://i.ibb.co/DCyPrK3/Birthday-3.jpg" />
                </a>
               {/*  { "img_list": "https://i.ibb.co/cc5QWQ6/Weddings.jpg" },
      { "img_list": "https://i.ibb.co/6DbP579/Weddings-2.jpg" },
      { "img_list": "https://i.ibb.co/hVnZg8Q/Engagement-01.jpg" },
      { "img_list": "https://i.ibb.co/6DbP579/Weddings-2.jpg" },
      { "img_list": "https://i.ibb.co/BrtftF7/Weddings-4.jpg" } */}
                <a href="https://i.ibb.co/qdB0nrW/Birthday.jpg">
                    <img alt="img1" src="https://i.ibb.co/qdB0nrW/Birthday.jpg" />
                </a>
                <a href="https://i.ibb.co/mrpwPTQ/Birthday-1.png">
                    <img className='brithday' alt="img2" src="https://i.ibb.co/mrpwPTQ/Birthday-1.png" />
                </a>
                <a href="https://i.ibb.co/GQCMWkW/Birthaday-0.jpg">
                    <img alt="img2" src="https://i.ibb.co/GQCMWkW/Birthaday-0.jpg" />
                </a>
                <a href="https://i.ibb.co/DCyPrK3/Birthday-3.jpg">
                    <img alt="img2" src="https://i.ibb.co/DCyPrK3/Birthday-3.jpg" />
                </a>
               {/*  { "img_list": "https://i.ibb.co/Zf0kF1d/Baby.jpg" },
      { "img_list": "https://i.ibb.co/JjhLgtT/Baby-1.jpg" },
      { "img_list": "https://i.ibb.co/9TLhg8f/Baby-2.jpg" },
      { "img_list": "https://i.ibb.co/j5R7RLD/Baby-4.jpg" },
      { "img_list": "https://i.ibb.co/xG91JSC/Baby-3.jpg" } */}
                <a href="https://i.ibb.co/qdB0nrW/Birthday.jpg">
                    <img alt="img1" src="https://i.ibb.co/qdB0nrW/Birthday.jpg" />
                </a>
                <a href="https://i.ibb.co/mrpwPTQ/Birthday-1.png">
                    <img className='brithday' alt="img2" src="https://i.ibb.co/mrpwPTQ/Birthday-1.png" />
                </a>
                <a href="https://i.ibb.co/GQCMWkW/Birthaday-0.jpg">
                    <img alt="img2" src="https://i.ibb.co/GQCMWkW/Birthaday-0.jpg" />
                </a>
                <a href="https://i.ibb.co/DCyPrK3/Birthday-3.jpg">
                    <img alt="img2" src="https://i.ibb.co/DCyPrK3/Birthday-3.jpg" />
                </a>
            </LightGallery>
        </div>
        </div>
    );
};

export default Galary;