import { observable, action } from 'mobx'

export default class Store {
    @observable switch = false;
    constructor(store) {
        this.rootStore = store;
    }
    @action
    changeSwitch = () => {
        this.switch = !this.switch;
    }
}