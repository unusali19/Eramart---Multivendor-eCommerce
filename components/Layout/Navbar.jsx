import React from 'react'
// import { Link } from 'react-router-dom'
import { navItems } from '../staticData/data'
import styles from '../styles/styles'
import Link from 'next/link'

const Navbar = ({active}) => {
  return (
    <div className={`block mt-8 ${styles.noramlFlex}`}>
         {
            navItems && navItems.map((i,index) => (
                <div className="flex" key={index}>
                    <Link href={i.url}
                    className={`${active === index + 1 ? "text-[#17dd1f]" : "text-white 800px:text-[#fff]"} pb-7.5 px:pb-0 font-medium px-6 cursor-pointer}`}
                    >
                    {i.title}
                    </Link>
                </div>
            ))
         }
    </div>
  )
}

export default Navbar