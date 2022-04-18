import type { NextPage, NextPageContext } from 'next'
import { Props } from 'react-apexcharts'
import { Card, CardBody, CardTitle, Col, Row } from 'reactstrap'

export async function getServerSideProps(ctx: NextPageContext) {
    const cookie = ctx.req?.headers.cookie
    const token = await fetch('http://localhost:3000/api/auth/token', {
        method: "post",
        headers: {
            cookie: cookie!
        }
    })
    const tokens = await token.json()
    const listPasien = await fetch('http://localhost:3000/api/pasien/list', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + tokens.data.token
        },
    })
    const listPasiens = await listPasien.json()
    return {
        props: {
            dataPasien: listPasiens.data
        }
    }
}

const listPasien: NextPage = (props: Props) => {
    const { dataPasien } = props
    return (
        <Row>
            <Col>
                <Card>
                    <CardTitle tag='h6' className='border-bottom p-3 mb-0'>
                        <i className="bi bi-person-fill"></i>
                        List Pasien
                    </CardTitle>
                    <CardBody>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Nomor RM</th>
                                    <th>Nama Pasien</th>
                                    <th>Telepon</th>
                                    <th>Alamat</th>
                                    <th>Refer</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    dataPasien.map((element: any, index: any) => (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{element.nomor_rm}</td>
                                            <td>{element.name}</td>
                                            <td>{element.no_telepon}</td>
                                            <td>{element.alamat}</td>
                                            <td>{element.referral_name}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    )
}

export default listPasien