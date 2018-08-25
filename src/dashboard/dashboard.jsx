import React, {Component} from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'

import {getSummary} from './dashboardAction'
import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import ValueBox from '../common/widget/valueBox'
import Row from '../common/layout/row'



class Dashboard extends Component {

    //métodod executado ao Montar o componente na tela
    componentWillMount() {
        this.props.getSummary()

    }

    render(){
        //pegando os valores do estado que recebeu do REDUX
        const { credit, debt} = this.props.summary
        return(
            
            <div>
                <ContentHeader title='Dashboard' small='Versão 1.0' />
                <Content>
                    <Row>
                        <ValueBox cols='12 4' color='green' icon='bank'
                             value={`R$ ${credit}`} text = 'Total de Créditos' />
                        <ValueBox cols='12 4' color='red' icon='credit-card'
                              value={`R$ ${debt}`} text = 'Total de Débitos' />
                        <ValueBox cols='12 4' color='blue' icon='money'
                             value={`R$ ${credit - debt}`} text = 'Valor Consolidado' />
                    </Row>
                </Content>

            </div>

        )
    }
}
///vincular props do objeto atual com o do Redux
//summary: receber o state.dashobard.summary do reducers
const mapStateToProps = state => ({summary: state.dashboard.summary})
const mapDispatchToProps = dispatch => bindActionCreators({getSummary}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
