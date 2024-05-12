import React from 'react'
import Header from './Header'
import Footer from './Footer'

import styles from '@/styles/Home.module.css'

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className={styles.wrap}>
            <Header />
            <main className={styles.main}>{children}</main>
            <Footer />
        </div>
    )
}

export default Layout
