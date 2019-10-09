import Actions from './actions';
import Models from './models';

class Store {
    constructor() {
        this.actions = new Actions(this);
        this.models = new Models(this);
    }
}
export default new Store();