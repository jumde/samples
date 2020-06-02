/*
 *  Copyright (c) 2017 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
 /* eslint-env node */

'use strict';

var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.use(express.static('../'));

app.listen(port, function () {
 console.log(`Example app listening on port !`);
});
