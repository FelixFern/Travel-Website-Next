import React from 'react'
import ActivitiesCard from './ActivitiesCard'

import styles from './activities.module.scss'

const Activities = () => {
    const activitiesList = [
        {
            title: "Seafood", 
            source: "assets/seafood.jpg"
        },
        {
            title: "Snorkeling Tour", 
            source: "assets/snorkeling.jpg"
        },
        {
            title: "Snorkeling Tour", 
            source: "assets/snorkeling-2.jpg"
        },
        {
            title: "Mangrove Tour", 
            source: "assets/hutan-m.jpg"
        },
        {
            title: "Spa & Message", 
            source: "assets/spa.webp"
        },
        {
            title: "City Tour", 
            source: "assets/city.jpeg"
        },
        {
            title: "Hotel", 
            source: "assets/hotel.jpeg"
        },
        {
            title: "Fireflies", 
            source: "assets/firefly.webp"
        },
        {
            title: "Fishing Tour", 
            source: "assets/fishing.jpg"
        },
        {
            title: "Gunung Bintan Trekking", 
            source: "assets/gunung-b.jpg"
        },
        {
			title: 'Sleeping Buddha',
			source: './assets/sleeping-buddha.jpg'
		},
		{
			title: 'Trans Studio Garden',
			source: './assets/trans-studio.jpg'
		},
		{
			title: 'White Sand Island',
			source: './assets/white-sand.jpg'
		}, 
		{
			title: 'Treasure Bay',
			source: './assets/treasure-bay.jpg'
		}, 
        {
			title: 'Lagoi Bay',
			source: './assets/lagoi-bay.jpg'
		},
        {
			title: 'Lohan Temple',
			source: './assets/lohan.jpg'
		},
        {
			title: 'Lohan Temple',
			source: './assets/1000-buddha (1).jpeg'
		},
        {
			title: 'Lohan Temple',
			source: './assets/1000-buddha (2).jpeg'
		},
    ]
    return (
        <div className={styles.activitiesParent}>
            {activitiesList.map((val, i) => {
                return (
                    <ActivitiesCard
                        key={i}
                        item={val}
                    ></ActivitiesCard>
                )
            })}
            
            
        </div>
    )
}

export default Activities