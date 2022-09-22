import './AvatarJsx.css'

const AvatarJsx = ({ color, id, children }) => {
    let arrayChildren = []

    if(!Array.isArray(children)) {
        arrayChildren = [children]
    } else {
        arrayChildren = children
    }

    const [component1, ...restComponents] = arrayChildren

    const src = `https://randomuser.me/api/portraits/lego/${id}.jpg`

    return (
        <picture style={{ color: color }}>
            <img src={src}  alt='avatar' style={{ width: 200}}/>
            { component1 }
        </picture>
    )
}

export default AvatarJsx
