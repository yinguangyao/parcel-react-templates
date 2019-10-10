import React from 'react'
import { inject } from 'mobx-react'
import './index.scss'
const Home = (props) => {
    return (
        <div className="home" onClick={props.changeSwitch}>点击切换状态：{props.switch ? 'on' : 'off'}</div>
    )
}

const mapStoreToProps = ({ store }) => {
    return {
        switch: store.home.switch,
        changeSwitch: store.home.changeSwitch
    }
}
export default inject(mapStoreToProps)(Home);