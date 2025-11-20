import "./Header.css"

export default function Header() {

  return (
    <>
      <div className="headerContainer">
        <img 
          src="../../assets/bannerHeader.png" 
          alt="Banner hero MerPro" 
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: -1
          }}
          loading="lazy"
        />
      </div>
    </>
  )
}