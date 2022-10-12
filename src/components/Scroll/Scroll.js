import { useState, useEffect, useRef } from "react"

const useMyRef = (inital) => useState({ current: inital})[0]

const Scroll = () => {
    const [background, setBackground] = useState('orange')

    const divRef = useRef()

    useEffect(() => {
        const onScroll = () => {
            // const div = document.getElementById('scroll-div')
            // console.log(divRef)

            // console.log(div.getBoundingClientRect())
            const { y } = divRef.current.getBoundingClientRect()

            const backgroundColor = y <= 0 ? 'pink' : 'orange'

            setBackground(backgroundColor)
        }


        window.addEventListener('scroll', onScroll)

        return () => {
            window.removeEventListener('scroll', onScroll)
        }
    }, [])


    return (
        <div>
            <div ref={divRef} 
                // id={'scroll-div'} 
                style={{ background: background, height: '180vh', margin: 30 }}>
                <h1>SCrollear para cambiar el color</h1>
            </div>
        </div>
    )
}

export default Scroll


const useRef2 = (inital) => useState({ current: inital})[0]