"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import SakuraFalls from "@/app/_component/SakuraFalls";
import { useState } from 'react';

export default function Home() {
  const [isParkyTime, setIsParkyTime] = useState(false);

  const onClickParky = () => {

      if(isParkyTime === false){
          setIsParkyTime(true)
      }else {
          setIsParkyTime(false)
      }
  }
  return (
    <main className={styles.main}>
      
      

      
      <div className={styles.center}>
      <div className={styles.centerLogBox}>
      
        <Image
          className={styles.logo}
          src="/parksystemsLogo.svg"
          alt="Park Logo"
          width={200}
          height={157}
          priority
        /> 
      
      </div>
        <h1>2024 Global Marketing Meeting <br/>In Japan</h1>
        
        
  
      </div>
      <div className={styles.upperMenubar}>
      
      <button className={styles.marketo}>  
      <Link href="/training/introduction" title="Marketo Training Session">
      <Image
          src="/Marketo_logo.png"
          alt="Marketo Logo"
          width={70}
          height={30}
          priority
        />
        </Link>
        </button>
    

    <button className={styles.vote} onClick={onClickParky}><Image
                      src="/sakura.png"
                      alt="sakura icon"
                      width={50}
                      height={50}
                      priority
                      /></button>

        {/* <button className={styles.vote}> 
      <Link href="/vote" title="Vote for Best Performance Award Winner">
      <Image
          src="/vote.svg"
          alt="vote Icon"
          width={50}
          height={50}
          priority
        />
        </Link>
        
        </button> */}
       
        </div>
      <div className={styles.grid}>
        <Link
          href="/eBook"
          className={styles.card}
        >
          <h2>
            Presentation <span>-&gt;</span>
          </h2>
          <p>ebooks for the meeting</p>
        </Link>

        <Link
          href="/programs"
          className={styles.card}
        >
          <h2>
            Schedule <span>-&gt;</span>
          </h2>
          <p>Check the agendas & schedule</p>
        </Link>


        <Link
          href="/location"
          className={styles.card}
        >
          <h2>
            Location<span>-&gt;</span>
          </h2>
          <p>Accommodation, venues, and access</p>
        </Link>

        <Link
          href="/quiz"
          className={styles.card}
        >
          <h2>
            Quiz<span>-&gt;</span>
          </h2>
          <p>Test your understanding</p>
        </Link>

        <Link
          href="/entertainment"
          className={styles.card}
        >
          <h2>
            Entertainment<span>-&gt;</span>
          </h2>
          <p>After Meeting Activities & Dining</p>
        </Link>

        <Link
          href="https://parkafm-my.sharepoint.com/:w:/g/personal/sun_ham_parksystems_com/Eez7N4TLBTtOqKR0bWQ8_ScBCE_NSyPCmeeey-FaMpXf8Q?e=PVSEDW"
          className={styles.card}
        >
          <h2>
            Meeting Note<span>-&gt;</span>
          </h2>
          <p>Check all agendas and discussed topics</p>
        </Link>

        <Link
          href="https://parkafm.sharepoint.com/:f:/r/sites/Park-Intranet/WW%20Marketing%20Forum/2024%20Annual%20Marketing%20Meeting?csf=1&web=1&e=xgp0FB"
          className={styles.card}
        >
          <h2>
            Records <span>-&gt;</span>
          </h2>
          <p>Presentation videos</p>
        </Link>
        <Link
          href="/survey"
          className={styles.card}
        >
          <h2>
            Survey<span>-&gt;</span>
          </h2>
          <p>Please leave a meaningful message for improvement</p>
        </Link>
      </div>
      
       <div className={styles.footer}>
        <div className={styles.contactUs}>
        <h5>Contact Us</h5>
        <div className={styles.contact}>
          <p><strong>Cherie Jung:</strong> +8210 6573 9295</p>
          
          <Image
          className={styles.icon}
          src="/kakaoIcon.png"
          alt="Kakao"
          width={20}
          height={20}
          priority
        />
        <div className={styles.kaKao}>
        <Image
          src="/cherieKakao.png"
          alt="cherie Kakao"
          width={340}
          height={400}
          priority
        />
        </div>
        </div>
        <div className={styles.contact}>
          <p><strong>Sun Ham: </strong> +8210 9245 0553</p>
          
          <Image
          className={styles.icon}
          src="/kakaoIcon.png"
          alt="Kakao"
          width={20}
          height={20}
          priority
        />
        <div className={styles.kaKao}>
        <Image
          src="/sunKakao.png"
          alt="Sun Kakao"
          width={340}
          height={400}
          priority
        />
        </div>
      
        </div>
        
        <div className={styles.contact}>
          <p><strong>Hitomi Makabe: </strong> +8190 9018 4554</p>
          
          <Image
          className={styles.icon}
          src="/kakaoIcon.png"
          alt="Kakao"
          width={20}
          height={20}
          priority
        />
        <div className={styles.kaKao}>
        <Image
          src="/hitomiKakao.jpg"
          alt="hitomi Kakao "
          width={340}
          height={400}
          priority
        />
        </div>
      
        </div>

        </div>
        </div>
        { isParkyTime ?(<SakuraFalls/>): null}
    </main>
  );
}
