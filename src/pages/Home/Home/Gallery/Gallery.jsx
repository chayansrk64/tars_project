import React, {  useEffect, useState } from 'react';
import './Gallery.css';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

const Gallery = () => {
    
    const [photos, setPhotos] = useState([]);
  
    useEffect(() => {
        fetch('https://api.unsplash.com/photos/?client_id=FRjjKABZG0FGS9KWWjzKBZ4wSkMB_X9la9IFAUn13_E')
        .then(res => res.json())
        .then(data => {
            setPhotos(data)
            // console.log(data)
        })
    }, [])

    
 
    return (
    <div className='mx-20'> 
    {
        photos.map(photo => {
            // console.log(photo)
        })
    }
        <div className='text-4xl text-center py-10'>Gallery</div>
        
         <div>
            <ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
            >
                <Masonry gutter='20px'>
                    {photos.map((photo, i) => (
                        <div className='shadow-md'>
                        <img
                            className='rounded-lg'
                            key={i}
                            src={photo.links.download}
                            style={{width: "100%", display: "block"}}
                            alt=""
                        />
                        <div className='flex justify-between py-5 px-5'>
                            <div className='flex items-center'>
                                <img className='rounded-full ' src={photo.user.profile_image.small} alt="" />
                                <div className='ps-2'>
                                <p>{photo.user.social.twitter_username}</p>
                                <p>{photo.user.name}</p>
                                </div>
                            </div>
                            <div>
                            <p>likes {photo.user.total_likes}</p>
                            </div>
                        </div>
                         
                        </div>
                        
                    ))}
                </Masonry>
          </ResponsiveMasonry>
         </div>
            
            </div>
       
    );
};

export default Gallery;