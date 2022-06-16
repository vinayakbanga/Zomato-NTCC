import React,{useState} from 'react'
import PhotoCollection from '../../components/restaurant/PhotosCollection'
import ImageViewer from "react-simple-image-viewer";
// PhotoCollection
const Photos = () => {
    const [photos,setPhotos] =useState(["https://b.zmtcdn.com/data/pictures/chains/1/18412861/c85dc63410117315e817a1f72805f53d.jpg",
    "https://b.zmtcdn.com/data/pictures/chains/1/18412861/e6f539da42bd43e956138ee22fba2fee.jpg",
"https://b.zmtcdn.com/data/pictures/chains/1/18412861/238a4ee089ba23e656ec4ff80682d416.jpg"])
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [CurrentImg, setCurrentImg] = useState(0);

    const closeViewer = () => setIsMenuOpen(false);

    const openViewer = () => setIsMenuOpen(true);
  
    return (
        <>
          {isMenuOpen && (
            <ImageViewer
              src={photos}
              currentIndex={CurrentImg}
              disableScroll={false}
              onClose={closeViewer}
            />
          )}
    
          <div className="flex flex-wrap gap-2 my-5">
            {photos.map((photo) => (
              <PhotoCollection image={photo} openViewer={openViewer} />
            ))}
          </div>
        </>
      );
}

export default Photos