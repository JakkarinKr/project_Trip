import styles from '../styles/About.module.css'
import Head from 'next/head';
const text = [
    {descrption:'Trip planning is the process of researching and organizing the details of a travel itinerary. This can include selecting a destination, choosing transportation options, booking accommodations, planning activities, and creating a budget.'},
    {descrption:'The first step in trip planning is typically deciding on a destination. This may involve researching different cities or countries, considering factors such as climate, culture, and language. Once a destination is chosen, the next step is to determine the best way to get there, whether by plane, train, or other means of transportation.'},
    {descrption:'Accommodation is another important aspect of trip planning, and may involve researching hotels, hostels, or vacation rentals in the chosen destination. Budget considerations will likely play a role in this decision, as well as location, amenities, and availability.'},
    {descrption:'Planning activities is also an important part of the trip planning process. This can involve researching popular tourist attractions, museums, cultural events, and outdoor activities in the area. It may also involve making reservations for tours or activities in advance.'},
    {descrption:'Finally, creating a budget is an essential part of trip planning. This involves estimating the cost of transportation, accommodation, food, and activities, as well as accounting for any unexpected expenses. Budgeting can help travelers avoid overspending and ensure that they can enjoy their trip without financial stress.'},
    {descrption:'Overall, trip planning requires careful research and organization to ensure a smooth and enjoyable travel experience.'}
]

export default function about() {
    return(
        <>
        <Head>
        <title>ABOUT</title>
        </Head>
            <div className={styles.container}>
                <h1 className={styles.title}>ABOUT</h1>
                {text.map(des =>{
                    return(
                        <div className={styles.box} key = {des.descrption}>
                            <p>{des.descrption}</p>
                        </div>
                    )
                })}
            </div>
        </>
    )
}