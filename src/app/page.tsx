import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      
      

      
      <div className={styles.center}>
      <div className={styles.centerLogBox}>
      
        <Image
          className={styles.logo}
          src="/parksystemsLogo.jpg"
          alt="Park Logo"
          width={180}
          height={137}
        /> 
        
      
      </div>
        <h1>2024 Global Marketing Meeting <br/>In Japan</h1>
        
        
  
      </div>
      <div className={styles.upperMenubar}>
      
      <button className={styles.marketo}>  
      <Link href="/training" >
      <Image
          src="/Marketo_logo.png"
          alt="Marketo Logo"
          width={50}
          height={20}
          priority
        />
        </Link>
        </button>

        <button className={styles.vote}> 
      <Link href="/vote" >
      <Image
          src="/vote.svg"
          alt="vote Icon"
          width={30}
          height={30}
          priority
        />
        </Link>
        </button>
       
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
          href="/meal"
          className={styles.card}
        >
          <h2>
            Lunch Menu <span>-&gt;</span>
          </h2>
          <p>Lunch menu</p>
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
          href="/qnA"
          className={styles.card}
        >
          <h2>
            Q&A<span>-&gt;</span>
          </h2>
          <p>Leave any questions here</p>
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
          <Image
          className={styles.parky}
          src="/parky.svg"
          alt="Parky"
          width={30}
          height={30}
          priority
        />
        
    </div>
   
    </main>
  );
}
