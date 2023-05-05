// https://react.dev/reference/react/useEffect
// https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key
// https://www.youtube.com/watch?v=kkNnb-urQ7c

import React from 'react'
import ProjectData from '../../data/ProjectData'
import { useState, useEffect } from 'react'



function ProjectCard1() {
    const [data, setData] = useState([]);
    const [collection, setCollection] = useState([]);

    useEffect(() => {
        setData(ProjectData);
        setCollection([... new Set(ProjectData.map((item) => item.title))])
    }, [])

    console.log(data);
    console.log(collection);

    const Project_filter = (itemData) => {
        const filterData = ProjectData.filter((item) => item.title === itemData);
        setData(filterData);
    }

    return (
        <section id="project" class="project">

            <div class="heading">our projects</div>

            <div className='filterItem'>
                <ul>
                    <li> <button onClick={() => setData}>All</button> </li>
                    {
                        collection.map((item) =>
                            <li><button
                                onClick={() => (Project_filter)}
                            >
                                {item}</button></li>
                        )
                    }
                </ul>
            </div>

            <div class="box-container mx-auto">
                {
                    ProjectData.map((item) =>

                        <a key={item.id} href={item.href} title={item.title} class="box">
                            <img src={item.imgUrl} key={item.id} alt="" />
                        </a>
                    )
                }
            </div>

        </section >
    )
}

export default ProjectCard1
