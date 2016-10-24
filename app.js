module.exports = () => {
    let express = require('express');
    let bodyParser = require('body-parser');
    let app = express();

    app.use( bodyParser.json() );
    app.use( bodyParser.urlencoded({ extended: true }) );

    /* Static assets */
    app.use( express.static(__dirname + '/dist') );

	app.get('/api', (req, res) => {
        let data = {
            playlist: [
                {
                    _id: 'item1',
                    name: 'Item 1'
                },
                {
                    _id: 'item2',
                    name: 'Item 2'
                },
                {
                    _id: 'item3',
                    name: 'Item 3'
                }
            ]
        };

        res.setHeader('Content-Type', 'application/json');
        res.send( JSON.stringify( data ) );
	});

    app.use( (req, res, next) => {
        res.set('X-Powered-By', '');
        next();
    });

    return app;

}
