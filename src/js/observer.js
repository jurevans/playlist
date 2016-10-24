import _ from 'underscore';

class Observer {
    constructor () {
        this.handlers = [];
    }

    subscribe (fn) {
        this.handlers.push(fn);
    }

    unsubscribe (fn) {
        this.handlers = this.handlers.filter(
            (item) => {
                if (item !== fn) {
                    return item;
                }
            }
        );
    }

    fire (o, thisObj) {
        let scope = thisObj || window;

        _.each(this.handlers, (item) => {
            item.call(scope, o);
        });
    }
}
