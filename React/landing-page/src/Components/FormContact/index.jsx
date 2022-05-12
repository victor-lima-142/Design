import * as BS from 'react-bootstrap'
import './FormContact.css'
import FormInvite from './FormInvite'
import FormScope from './FormScope'

export default function FormContact() {
    return (
        <BS.Container className={`container-form-contact shadow`} fluid>
            <BS.Row>
                <BS.Col md={4} xs={12} sm={12} lg={4} className={"col-formulario-contato mx-auto"}>
                    <BS.Card className={`shadow card-form-contact`}>
                        <BS.Card.Header>
                            <h3 className={`text-center`}>Agendar visita</h3>
                            </BS.Card.Header>
                        <BS.Card.Body className='card-form-contact-body'>
                            <FormScope />
                        </BS.Card.Body>
                        <BS.Card.Footer className={`text-center`}>
                            <BS.Button size='sm' type={'button'} variant={'warning'} className={'rounded-0 bg-gradient'}>Agendar</BS.Button>
                        </BS.Card.Footer>
                    </BS.Card>
                </BS.Col>
            </BS.Row>
        </BS.Container>
    )
}