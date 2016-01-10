/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

/*
 * Copyright 2015 Joyent, Inc.
 *
 * `triton image ...`
 */

var Cmdln = require('cmdln').Cmdln;
var util = require('util');



// ---- CLI class

function ImageCLI(top) {
    this.top = top;
    Cmdln.call(this, {
        name: top.name + ' image',
        /* BEGIN JSSTYLED */
        desc: [
            'List, get, create and update Triton images.'
        ].join('\n'),
        /* END JSSTYLED */
        helpOpts: {
            minHelpCol: 24 /* line up with option help */
        },
        helpSubcmds: [
            'help',
            'list',
            'get'
        ]
    });
}
util.inherits(ImageCLI, Cmdln);

ImageCLI.prototype.init = function init(opts, args, cb) {
    this.log = this.top.log;
    Cmdln.prototype.init.apply(this, arguments);
};

ImageCLI.prototype.do_list = require('./do_list');
ImageCLI.prototype.do_get = require('./do_get');


ImageCLI.aliases = ['img'];

module.exports = ImageCLI;