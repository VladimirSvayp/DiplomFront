import React from 'react'
import { Link } from 'react-router-dom'

import './BreadCrumb.scss'

const BreadCrumb = ({ items }) => {
    return (
        <section>
            <ol className="breadcrumb">
                {items.map(({ label, path }) => (
                    <li key={path} className={path ? "breadcrumb-item" : "breadcrumb-item active"} >
                        {path ? <Link to={path}>{label}</Link> : label}
                    </li>
                ))}
            </ol>
        </section >
    )
}

export default BreadCrumb
