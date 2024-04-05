"use client";
import {usePathname} from 'next/navigation';
import style from '@/app/entertainment/entertainment.module.css';
import BackButton from '@/app/_component/BackButton';
import Image from 'next/image';
import {  Table,  TableHeader,  TableBody,  TableColumn,  TableRow,  TableCell} from "@nextui-org/table";


export default function Entertainment() {
    const pathname = usePathname();
    const parts = pathname.split("/"); 
    const title = parts[parts.length - 2];

    console.log(title);

    return (
    <div className={style.main}>
         <div className={style.header}>
                    <BackButton/>
                    <h1>2024 Global Marketing Meeting <br/>Entertainment</h1>
                        <Image
                    className={style.logo}
                    src="/parksystemsLogo.svg"
                    alt="Park Logo"
                    width={180}
                    height={37}
                    priority
                    />
                    </div>
        <div className={style.body}>
            <h3>Groups</h3>
            
            <div className={style.bodyComponents}>
                <div className={style.group}>
                <h5>Event Running Team</h5>
                Hitomi Makabe, Sun Ham, Cherie Jung, John Jun, Lina Ma, Soo Lee, Judy Kim, Jack Cha, and Eric Kim
                </div>

                <div className={style.group}>
                <h5>Group A</h5>
                Insu Kim, Xiaowei Tian, Yuya Wagatsuma, Kenneth Kang, Hyein Kim, Katie Yang, Raina Lee, Elizabeth Martinez, and Caleb Chu 
                </div>

                <div className={style.group}>
                <h5>Group B</h5>
                Takahiro Fujimoto, Shin Matsuda, Yi-Chen Lu, Haichao Guo, Katija Kniffer, Alejandro Bonilla, Brian Kim, Vamsi Bendalam, and Peter Park
                </div>

                <div className={style.group}>
                <h5>Group C</h5>
                Dr. Kim, Shun Okano, Chie Goto, Sang-Joon Cho, Jessica Kang, Eileen Shin, Cathy Lee, Xun Hao Chok, and Primrose Arcillas
                </div>
            </div>
            <h3>Dining</h3>
            <div className={style.bodyComponents}>

                <h5>Day 1: <a href='https://hyoto.jp/menu/%e9%a3%b2%e3%81%bf%e6%94%be%e9%a1%8c%e4%bb%98%e3%81%8d-%e4%ba%ac%e9%83%bd%e3%81%bd%e3%83%bc%e3%81%8f-%e5%87%ba%e6%b1%81%e3%81%97%e3%82%83%e3%81%b6%e4%bc%9a%e5%b8%ad-%e7%b4%ab%e8%8d%89/'>Hyoto Shibuya​</a>​</h5>
                <div className={style.bodyComponents}>
                <h5>Kaiseki (traditional multi-course Japanese dinner)</h5>
                <h5>- Brand Pork Dashi Shabu Kaiseki Murasaki</h5>
                <h5>- Vegan Kaiseki</h5>​
                </div>
                <div className={style.imgBox}>
                    <Image
                    className={style.logo}
                    src="/dinnerDay2.png"
                    alt="Dinner Day2"
                    width={700}
                    height={500}
                    priority
                    />
                </div>

                <h5>Day 2: <a href='https://hyoto.jp/menu/%e9%a3%b2%e3%81%bf%e6%94%be%e9%a1%8c%e4%bb%98%e3%81%8d-%e4%ba%ac%e9%83%bd%e3%81%bd%e3%83%bc%e3%81%8f-%e5%87%ba%e6%b1%81%e3%81%97%e3%82%83%e3%81%b6%e4%bc%9a%e5%b8%ad-%e7%b4%ab%e8%8d%89/'>Hyoto Shibuya​</a>​</h5>
                <div className={style.bodyComponents}>
                <h5>Kaiseki (traditional multi-course Japanese dinner)</h5>
                <h5>- Brand Pork Dashi Shabu Kaiseki Murasaki</h5>
                <h5>- Vegan Kaiseki</h5>​
                </div>
                <div className={style.imgBox}>
                    <Image
                    className={style.logo}
                    src="/dinnerDay2.png"
                    alt="Dinner Day2"
                    width={700}
                    height={500}
                    priority
                    />
                    </div>
            </div>
            <h3>Activity</h3>
            <div className={style.bodyComponents}>
                    
                <h5><a href='https://www.shibuya-scramble-square.com.e.apy.hp.transer.com/sky/'>Shibuya Sky</a></h5>
                <strong>Admission time:</strong> 19:40-20:00​<br/>
                <strong>Schedule:</strong> ~21:30
                <div className={style.imgBox}>
                    <Image
                    className={style.logo}
                    src="/ShybuyaSky.png"
                    alt="Shybuya Sky"
                    width={900}
                    height={300}
                    priority
                    />
                </div>

                    
            </div>
            <h3>Schedule</h3>
            <div className={style.bodyComponents}>
        
            <div className={style.group}>
            <Table className={style.table} aria-label="schedule table">
            <TableHeader >
                <TableColumn className={style.tableHeadColumn}>Time</TableColumn>
                <TableColumn className={style.tableHeadColumn}>Action</TableColumn>
            </TableHeader>
            <TableBody>
                <TableRow key="1">
                <TableCell className={style.cell}>16:30</TableCell>
                <TableCell className={style.cell}>Move to Shibuya(bus)</TableCell>
                </TableRow>
                <TableRow key="2">
                <TableCell className={style.cell}>17:00</TableCell>
                <TableCell className={style.cell}>Arrival at Shubuya</TableCell>
                </TableRow>
                <TableRow key="3">
                <TableCell className={style.cell}>17:30 - 19:30</TableCell>
                <TableCell className={style.cell}>Dinner at Hyoto Shibuya</TableCell>
                </TableRow>
                <TableRow key="4">
                <TableCell className={style.cell}>19:30 - 20:00</TableCell>
                <TableCell className={style.cell}>Move to Shibuya Sky and activity time</TableCell>
                </TableRow>
                <TableRow key="5">
                <TableCell className={style.cell}>21:30</TableCell>
                <TableCell className={style.cell}>Move to TKP Shibuya(bus) and back to accommodation</TableCell>
                </TableRow>
                <TableRow key="6">
                <TableCell className={style.cell}>22:00</TableCell>
                <TableCell className={style.cell}>Arrival at accommodation</TableCell>
                </TableRow>
            </TableBody>
            </Table>

                 
                 
            </div>


            </div>

        </div>           
               
    </div>
    )}