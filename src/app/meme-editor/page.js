'use client'
import Draggable from 'react-draggable';
import { useState, createRef } from 'react';
import { useSearchParams } from 'next/navigation'
import { exportComponentAsJPEG } from 'react-component-export-image'

// import Link from 'next/link';

function Meme() {
    const [Text1, setText1] = useState('');
    const [Text2, setText2] = useState('');
    const [Memename, setMemeName] = useState('Meme');

    const[fontSize01, setFontSize01] = useState(30);
    const[fontSize02, setFontSize02] = useState(30);

    const [color1, setColor1] = useState("#aabbcc");
    const [color2, setColor2] = useState("#aabbcc");

    const searchParams = useSearchParams()

    const memeName = searchParams.get('name')
    const memeUrl = searchParams.get('url')

    const memeRef = createRef()


    const Download = () => {
        exportComponentAsJPEG(memeRef, {
            fileName: Memename // You can pass custom file name here
        });
    }


    return (
        <div  className="container">
            <div ref={memeRef} className='box'>
                <h2>{memeName}</h2>
                <img src={memeUrl} />
                <Draggable><div style={{ fontSize: fontSize01, fontWeight: 'bold' }}> {Text1}</div></Draggable>
                <Draggable><div style={{ fontSize: fontSize02, fontWeight: 'bold'  }}>  {Text2}</div></Draggable>
            </div>

            <div className="Memeh2">
                <h2>Meme Details</h2>
                <div className="textSec">

                    <div className='inputt'>
               <input type="text" placeholder='Type Text 1' onChange={e => setText1(e.target.value)} />
               <input type="number" placeholder='Text 1 Size' onChange={e => setFontSize01(e.target.value+"px")}/>
                   </div>


                </div> 

               <div className="textSec">

               <div className='inputt'>
               <input type="text" placeholder='Type Text 2' onChange={e => setText2(e.target.value)} />
               <input type="number" placeholder='Text 1 Size' onChange={e => setFontSize02(e.target.value+"px")} />
               </div>

                </div> 

                <button onClick={Download}>Download Meme</button>
            </div>

        </div>
    )
}

export default Meme