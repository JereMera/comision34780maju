import './AvatarJsx.css'

const AvatarJsx = () => {
    const src = `https://randomuser.me/api/portraits/lego/2.jpg`

    return (
        <picture className="row col-12" style={{ color: 'red'}}>
            <img src={src}  alt='avatar'/>
            Andres
        </picture>
    )
}

export default AvatarJsx
