import _ from 'underscore';

export default class Observer {
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

/* Event Observer Pattern */
/*
let clickHandler = (item) => {
    console.log(item);
};

const observer = new Observer();

observer.subscribe(clickHandler);
observer.fire('event #1');
observer.unsubscribe(clickHandler);
observer.fire('event #2');
observer.subscribe(clickHandler);
observer.fire('event #3');
*/
