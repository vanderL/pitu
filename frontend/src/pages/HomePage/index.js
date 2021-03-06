import React from "react";
import { Container, Input, FormControl, Button, Alert, InputGroup } from 'react-bootstrap'
import Header from '../../components/Header'
import { ContentContainer, Form } from './styles'
import ShortenerService from '../../service/shortenerService'


class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            url: '',
            code: '',
            errorMessage: ''
        }
    }

    handleSubmit = async(event) => {
        event.preventDefault()

        const { url } = this.state

        this.setState({ isLoading: true, errorMessage: '' })

        if (!url) {
            this.setState({ isLoading: false, errorMessage: 'Informe uma url para encurtar'})
        } else {
            try {
                const service = new ShortenerService()
                const result = await service.generate({
                    url
                })

                this.setState({isLoading: false, code: result.code })
            } catch (error) {
                this.setState({ isLoading: false, errorMessage: 'Ops, ocorreu um erro!'})
            }
        }
    }



    render() {
        return (
            <Container>
                <Header> Seu novo encurtador de URL </Header>
                <ContentContainer>
                    <Form onSubmit={this.handleSubmit}>
                        <InputGroup>
                            <FormControl 
                                placeholder="Digite a URL para encurtar"
                                defaultValue=""
                                onChange={e => this.setState({ url: e.target.value })}
                            />
                            <InputGroup.Append>
                                <Button variant="primary" type="subimit" >Encutar!</Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </Form>
                </ContentContainer>
            </Container>
        )
    }
}

export default HomePage