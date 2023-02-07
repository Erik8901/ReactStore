import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";

import './breadCrumbs.css';


function BreadCrumbs() {
    const location = useLocation(); // React Hook
    const [breadCrumbsList, setBreadCrumbsList] = useState([]);

    useEffect(() => {
        let list = [];
        const home = "Home"

        list = location.pathname.split("/")
        list.shift()

        const breadList = [home].concat(list)
        const newBreadList = breadList.map(i => i + "/")
        const latestElement = breadList[breadList.length - 1]

        newBreadList.pop()
        const last = latestElement.replace("/", "")

        newBreadList.push(last)
        setBreadCrumbsList(newBreadList)
    }, [location])


    return (
        <div className='breadCrumbs-container'>
            {breadCrumbsList.map((item, index) => {
                return <div key={index}>
                    <span key={index}>{item}</span>
                </div>
            })}
        </ div>
    );
}

export default BreadCrumbs;