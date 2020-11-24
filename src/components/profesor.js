import React, { Component } from 'react'
import ContainerLayout from '../layouts/profesorLayout'
class Body extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: props.username,
            loading: false,
            //Los items son los objetos que se mostraran en el FlatList del contenido final.
            Items: [
                {
                    id: '1',
                    title: 'ZonaComunicacion.png',
                    url: require('../img/ZonaComunicacion.png'),
                },
                {
                    id: '2',
                    title: 'Ejercicios, Examenes',
                    url: require('../img/SeguimientoEducativo.png'),
                }
            ]
        }
    }
    render() {
        let username,message,items = this.state
        return (
            <ContainerLayout
                username={username}
                message={message}
                Items={items}
            />
        )
    }
}

export default Body