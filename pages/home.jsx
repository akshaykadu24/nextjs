import Head from 'next/head'
import Image from 'next/Image'
import Link from 'next/Link'



export default function Start({data}) {
  console.log(data)
  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
        
        <div>
          {/* <h1>{data.name}</h1> */}
          {/* <Image src={data.avatar_url} width={200} height={200} alt="img" /> */}

          {/* <p>Id: @{data.login}</p> 
          <p>{data.bio}</p>
          <p>company: {data.company}</p>
          <p>location: {data.location}</p>
          
          <p>followers: {data.followers}</p>
          <p>following: {data.following}</p> */}
hii
        </div>
        {/* <Link href="/projects"><button>Projects</button> </Link> */}
        
        
      </main>

      
    </div>
  )

  
}



export async function getServerSideProps(){
  let res = await fetch("https://api.github.com/users/riteshf")
  let data = await res.json()
  return{
    props:{
      data:data
    }
  }
}