import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";

import './breadCrumbs.css';

function BreadCrumbs() {
    const navigate = useNavigate();
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

    const goToBreadCrumb = (item) => {
        let list = [];
        list = location.pathname.split("/")
        if (list[2] === item.replace("/", "") || list[3] === item.replace("/", "") || list[4] === item.replace("/", "")) {
            window.location.reload(true)
        } else {
            navigate("/" + item.replace("/", ""))
        }
    }

    return (
        <div className='breadCrumbs-container'>
            {breadCrumbsList.map((item, index) => {
                return <div className='bread-crumb' key={index} onClick={() => goToBreadCrumb(item)}>
                    <span key={index}>{item}</span>
                </div>
            })}
        </ div>
    );
}

export default BreadCrumbs;