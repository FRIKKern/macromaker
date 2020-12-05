import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>WoW Macromaker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <section className="header">
            <div className="navigation">
                <div className="logo">
                     <a href="#"><h1>Macromaker.io</h1> </a>
                </div>

                <div className="menu two">
                    <a href="https://kurs.xn--btfrerprven-x8a3wf.no/playerapp/participate/batfrerprvenno-norges-beste-batfrerkurs-10870/"> Login</a>   
                </div>
            </div>
            <div className="hero">
                <div margin="" className="first-menu vertical-menu">
               <h1>1th Menu</h1>
            </div>

                <div className="second-menu vertical-menu ">
                  <div margin="" className="">
                     <h1>2th Menu</h1>
                  </div>
               </div>

               <div className="third-menu vertical-menu ">
                  <div margin="" className="">
                 
                     <p>Original</p>
                      <textarea id="originalCode" className="code-editor"  onchange="copyCleanCode()" rows="12" cols="50" placeholder="input original macro here" name="comment" f> Test</textarea>
                      <input type="submit">

                     <p id="">Result</p>
                     <textarea id="optimizedCode" className="code-editor"  rows="12" cols="50" placeholder="input original macro here" name="comment" > Test</textarea>
                    
                     <p id="">Test</p>
                    <div>  
               </div>
               <div className="fourth-menu vertical-menu ">
                  <div margin="" className="">
                     <h1>4th Menu</h1>
                  </div>
               </div>

            </div>
        </section>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
