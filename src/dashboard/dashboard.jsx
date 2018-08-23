import React, {Component} from 'react'
import { connect } from 'react-redux'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import ValueBox from '../common/widget/valueBox'
import Row from '../common/layout/row'



class Dashboard extends Component {
    render(){
        //pegando os valores do redux
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
const mapStateToProps = state => ({summary: state.dashboard.summary})
export default connect(mapStateToProps)(Dashboard)
