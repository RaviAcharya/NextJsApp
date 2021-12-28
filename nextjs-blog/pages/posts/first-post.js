import SecondPost from "./second-post";
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import Script from 'next/script'
import Layout from '../../components/layout.js'
export default function FirstPost() {
    return(
      
        <div> 
            <Head>
                <title>First Page </title>
                <link ref="icon" href="/favicon.ico"/>
                
            </Head>
           <Script src="https://connect.facebook.net/en_US/sdk.js" strategy="lazyOnload" onLoad={()=>console.log(`script loaded correctly, window.FB has been populated`)}/>
         <h1>First Post</h1>
         </div>
    )
  }