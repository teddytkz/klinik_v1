import type { NextPage } from 'next'
import {
    Card,
    Row,
    Col,
    CardTitle,
    CardBody,
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    FormText,
} from 'reactstrap';

const addPasien: NextPage = () => {
    return (
        <Row>
            <Col>
                <Card>
                    <CardTitle tag='h6' className='border-bottom p-3 mb-0'>
                        <i className="bi bi-person-fill"></i>
                            Add Pasien
                    </CardTitle>
                    <CardBody>
                        <div className='col-md-6'>
                            <Form>
                                <FormGroup>
                                    <Label for='name'>Nama Pasien</Label>
                                    <Input
                                        id='name'
                                        name='name'
                                        placeholder='Nama Pasien'
                                        type='text'
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for='tglLahir'>Tanggal Lahir</Label>
                                    <Input
                                        id='tgl_lahir'
                                        name='tgl_lahir'
                                        placeholder='Tanggal Lahir'
                                        type='date'
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for='nomorTelepon'>Nomor Telepon</Label>
                                    <Input
                                        id='nomor_telepon'
                                        name='nomor_telepon'
                                        placeholder='Nomor Telepon'
                                        type='text'
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for='alamat'>Alamat</Label>
                                    <Input
                                        id='alamat'
                                        name='alamat'
                                        placeholder='Alamat'
                                        type='text'
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for='name'>Refer</Label>
                                    <Input
                                        id='name'
                                        name='name'
                                        placeholder='Nama Pasien'
                                        type='select'
                                    />
                                </FormGroup>
                                <Button className="btn" color="primary" size="md" active>
                                    Tambah
                                </Button>
                            </Form>
                        </div>

                    </CardBody>
                </Card>
            </Col>
        </Row>
    )
}

export default addPasien