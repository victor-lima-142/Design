import * as BS from 'react-bootstrap'

export default function FormScope() {
    return (
        <BS.Form className={'p-0'} onSubmit={(event) => { event.preventDefault(); }}>
            <BS.Form.Group className="mb-3 mt-0" controlId="email">
                <BS.Form.Control size="sm" type="text" className='rounded-0' placeholder="Nome" />
            </BS.Form.Group>
            <BS.Form.Group className="mb-3" controlId="email">
                <BS.Form.Control size="sm" type="email" className='rounded-0' placeholder="Email" />
                <BS.Form.Text className="text-muted m-0 p-0">
                    <small className='m-0 p-0'><small className='m-0 p-0'>Não compartilhamos seu email</small></small>
                </BS.Form.Text>
            </BS.Form.Group>
            <BS.Form.Group className="mb-3" controlId="email">
                <BS.Form.Control size="sm" type="tel" className='rounded-0' placeholder="Telefone de contato" />
            </BS.Form.Group>
            <BS.Form.Group className="mb-0" controlId="email">
                <BS.Form.Control size="sm" type="text" className='rounded-0' placeholder="Endereço" />
            </BS.Form.Group>
        </BS.Form>
    )
}