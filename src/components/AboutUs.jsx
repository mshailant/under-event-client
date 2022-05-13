import React from "react";
import AboutUsCard from "./AboutUsCard";
import data from "./DevelopersData/data.json"
import BackButton from "./Button/BackButton";
import { BsGithub } from "react-icons/bs"
import styles from "./AboutUs.module.css"
import Footer from "./Footer/Footer";

export default function AboutUs(){
    return(
        <div className={styles.body}>
            <div className={styles.title}>
                <h1 >The programmers teams</h1>
            </div>
            <BackButton/>
            <div className={styles.containerCards}>
                {data.map((e) => {
                        return (
                            <div className={styles.cards}>
                            {console.log(e.github)}
                            <AboutUsCard
                            name={e.name}
                            image={e.image}
                            birthDay={e.birthDay}
                            description={e.description}
                            github={e.github}
                            />
                        </div>
                        );
                })}
            </div>
            <Footer />
        </div>
    )
}