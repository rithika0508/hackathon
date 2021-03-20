import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css';
import { Card, Image } from 'semantic-ui-react'
import './allinvestors.css'
import Navbar from './Navbar'

function AllInvestors() {
    const [investors, setinvestors] = useState([])
    const [search, setsearch] = useState('')
    useEffect(() => {
        axios.get("/investors/all").then((response) => {
            setinvestors(response.data)
            console.log(investors)
            //     for (let i = 0; i < investors.length; i++) {
            //         console.log('inside for loop')
            //         console.log('hey')
            //         investors[i].finalidea = investors[i].idea.substring(0, 3)
            //         console.log(investors[i].finalidea)
            //     }
        })
    }, [])
    const filter = investors.filter(investor => {
        return investor.name.toLowerCase().includes(search.toLowerCase())
    })
    const Details = (investor) => {
        const udemy = JSON.stringify(investor)
        window.localStorage.setItem("DetailInvestor", udemy)
    }
    return (
        <div className="full">
            <Navbar />
            <input className="search" value={search} onChange={e => setsearch(e.target.value)} type="text" placeholder="Search by name"></input>
            {filter.map(investor => (
                <div className="card-deck">
                    <div className="card">
                    <Card>
                        <Image alt="image" src="https://st.depositphotos.com/1779253/5140/v/950/depositphotos_51405259-stock-illustration-male-avatar-profile-picture-use.jpg" wrapped ui={false} />
                        <Card.Content>
                            <Card.Header>
                                {investor.name}
                            </Card.Header>
                            <Card.Meta>
                                <span className='date'>{investor.username}</span>
                            </Card.Meta>
                            <Card.Description>
                                <h4>{investor.location}</h4>
                                <Link to={`/allinvestors/${investor._id}`} onClick={() => Details(investor)}>Know more..</Link>
                            </Card.Description>
                        </Card.Content>
                    </Card>
                    </div>
                </div>
            ))
            }
        </div>

    )
}
export default AllInvestors