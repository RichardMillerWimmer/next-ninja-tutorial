import React from 'react'
import styles from '../../styles/Ninjas.module.css'
import Link from 'next/link'

export const getServerSideProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    let data = await res.json()
    // data = null
    if(!data) {
        return {
            notFound: true
        }
    }
    return {
        props: {ninjas: data}
    }
}

const Ninjas = ({ninjas}) => {
    return (
        <div>
            <h1>All Ninjas</h1>
            {ninjas.map((ninja) => (
                <Link href={`/ninjas/${ninja.id}`} key={ninja.id}>
                    <a className={styles.single}>
                        <h3>{ninja.name}</h3>
                    </a>
                </Link>
            ))}
        </div>
    )
}

export default Ninjas
