import Home from './home';

class Store {
    constructor() {
        this.home = new Home(this);
    }
}
export default new Store();