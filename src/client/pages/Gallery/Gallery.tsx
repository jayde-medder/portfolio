import ThumbsCarousel from '../../components/general/ThumbsCarousel'
import { galleryDemoData } from './data'

function Gallery() {
  return (
    <>
      <div className="flex justify-center">
        <ThumbsCarousel demos={galleryDemoData} />
      </div>
    </>
  )
}

export default Gallery
