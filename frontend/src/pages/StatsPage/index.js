import React from "react";
import Header from '../../components/Header'
import { Container } from 'react-bootstrap'

import ShortenerService from '../../service/shortenerService'

import { parseISO, formatRelative } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR' 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { StatsContainer, StatsBox, StatsRow, StatsBoxTitle } from './styles'

import './styles'

class StatsPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            shortenedUrl: {},
            errorMessage: ''
        }
    }

    async componentDidMount() {
        const { code } = this.props.match.params

        try {
            const service = new ShortenerService()
            const shortenedUrl = await service.getStats(code)

            const parsedDate = parseISO(shortenedUrl.updated)
            const currentDate = new Date()

            const relativeDate = formatRelative(parsedDate, currentDate, {
                locale: ptBR,
            })

            shortenedUrl.relativeDate = relativeDate

            this.setState({isLoading: false, shortenedUrl})
        } catch (error) {
            this.setState({ isLoading: false, errorMessage: 'Ops, a URL não existe'})
        }
    }    

    render() {
        const { errorMessage, shortenedUrl } = this.state

        return (
            <Container>
                <Header>Estatísticas: </Header>
                {errorMessage ? (
                    <StatsContainer className="text-center">
                        <FontAwesomeIcon size="3x" color="#f8d7da" icon="exclamation-triangle" />
                        <p className="m-3"> {errorMessage} </p>
                        <a className="btn btn-primary" href="/"> Encurtar nova URL</a>
                    </StatsContainer>
                ) : (
                    <StatsContainer className="text-center">
                        <p><b> https://pitu.tk/{shortenedUrl.code} </b></p>
                        <p>Redireciona para: <br /> {shortenedUrl.url}</p>
                        <StatsRow>
                            <StatsBox>
                                <b> {shortenedUrl.hits} </b>
                                <StatsBoxTitle> Visitas </StatsBoxTitle>
                            </StatsBox>
                            <StatsBox>
                                <b> {shortenedUrl.relativeDate} </b>
                                <StatsBoxTitle> Última visita </StatsBoxTitle>
                            </StatsBox>
                        </StatsRow>
                        <a className="btn btn-primary" href="/"> Encurtar nova URL</a>
                    </StatsContainer>

                )
                

                }
            </Container>
        )
    }
}

export default StatsPage