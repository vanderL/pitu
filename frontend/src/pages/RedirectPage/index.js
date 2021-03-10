import React from "react"
import Header from '../../components/Header'
import { Container, Spinner } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import ShortenerService from '../../service/shortenerService'

import { StatsContainer, StatsRow } from './styles'


class RedirectPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoading: false,
            url: '',
            errorMessage: ''
        }
    }

    async componentDidMount() {
        const { code } = this.props.match.params

        try {
            const service = new ShortenerService()
            const { url } = await service.getLink(code)

            window.location = url

        } catch (error) {
            this.setState({ isLoading: false, errorMessage: 'Ops, a URL não existe'})
        }
    }    

    render() {
        const { errorMessage } = this.state

        return (
           <Container>
               {errorMessage ? (
                   <>
                    <Header> Seu novo encurtador de URL </Header>
                    <StatsContainer className="text-center">
                        <FontAwesomeIcon size="3x" color="#f8d7da" icon="exclamation-triangle" />
                        <p className="m-3"> {errorMessage} </p>
                        <a className="btn btn-primary" href="/"> Encurtar nova URL</a>
                    </StatsContainer>
                   </>
               ) : (
                   <Header>
                        <Spinner animation="border" />
                   </Header>
               )}
           </Container>
        )
    }
}

export default RedirectPage