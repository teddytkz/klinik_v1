import axios from 'axios'
import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { Props } from 'react-apexcharts'
import {
    Alert,
    UncontrolledAlert,
    Card,
    CardBody,
    CardTitle,
} from "reactstrap";

export async function getServerSideProps() {
    const listUsers = await axios.get('http://localhost:3000/api/users/list_user')
    return {
        props: {
            dataUser: listUsers.data.data
        }
    }
}

const listUser: NextPage = (props: Props) => {

    const [users, setUsers] = useState([]) as any

    const { dataUser } = props



    // useEffect(() => {
    //     getUsers()
    // }, [])

    // const getUsers = async () => {
    //     try {
    //         console.log('a')
    //         const listUsers = await fetch('http://localhost:3000/api/users/list_user')
    //         setUsers(listUsers)
    //         console.log(listUsers)
    //     } catch (error) {
    //         console.log(error)
    //     }

    // }

    return (
        <div>
            <Card>
                <CardTitle tag='h6' className='border-bottom p3-mb-0'>

                </CardTitle>
                <CardBody>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Name</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                dataUser.map((element: any, index: any) => (
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{element.name}</td>
                                        <td>{element.email}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </CardBody>
            </Card>

        </div>
    )
}

export default listUser