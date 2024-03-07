import Link from "next/link";
export default async function Dashboard() {
    const res = await fetch("https://api.imgflip.com/get_memes")
    const response = await res.json()

    return(
        <>
        
        <h1 id="hello">Dashboard</h1>

        <div className="mems">
          {response.data.memes.map((item,index)=>{

            return(
              <div className="memediv" key={index}>
                {/* <h2>{item.id}</h2>
                <h2>{item.name}</h2> */}
                <img src={item.url} width={item.width} height={item.height}/>
                <h2>{item.name}</h2>
                {/* <button>Create Meme</button> */}
                <Link id="btnn" href={`/meme-editor?url=${item.url}`}> Create Meme </Link>
              </div>
            )
          })}
        </div>
        
        
        
        </>
    )


}