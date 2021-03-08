import React from "react";
import Header from '../../components/Header'
import { Container } from 'react-bootstrap'
import ShortenerService from '../../service/shortenerService'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { StatsContainer, StatsBox, StatsRow, StatsBoxTitle } from './styles'

import './styles'

class StatsPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            shortenedUrl: {},
            errorMessage: 'error viu!'
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
                    <p>Resultado</p>
                )

                }
            </Container>
        )
    }
}

export default StatsPage