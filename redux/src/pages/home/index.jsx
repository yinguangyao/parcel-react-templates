import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { change_switch_status } from '../../stores/home/actions'
import './index.scss'
const Home = (props) => {
    return (
        <div className="home" onClick={props.changeSwitch}>点击切换状态：{props.switch ? 'on' : 'off'}</div>
    )
}

const mapStateToProps = (state) => {
    return {
        switch: state.home.switchStatus,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        changeSwitch: bindActionCreators(change_switch_status, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);