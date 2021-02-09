import { useState } from 'react'
import Lightbox from 'react-image-lightbox'

const ExpandableImage = ({ cls, src, alt, title }) => {
  const [expanded, setExpanded] = useState(false)
  const handleImageClick = () => {
    setExpanded(!expanded)
  }
  return (
    <>
      <img className={cls} src={src} onClick={handleImageClick} alt={alt} title={title} />
      {expanded && <Lightbox mainSrc={src} onCloseRequest={handleImageClick} />}
    </>
  )
}

export default ExpandableImage
