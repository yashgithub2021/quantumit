const fs = require('fs');
const ccav = require('./ccavutil');
const qs = require('querystring');
const crypto = require('crypto')

exports.postReq = function (request, response) {
    let body = '';
    const workingKey = '77CF8CE38F7B75AC22E01293CC460342'; // Put in the 32-Bit key shared by CCAvenues.
    const accessCode = 'AVKY01LG79AH73YKHA'; // Put in the Access Code shared by CCAvenues.
    let encRequest = '';
    let formbody = '';
    var ivBase64 = Buffer.from([0x00, 0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08, 0x09, 0x0a, 0x0b, 0x0c, 0x0d, 0x0e, 0x0f]).toString('base64');
    var md5 = crypto.createHash('md5').update(workingKey).digest();
    var keyBase64 = Buffer.from(md5).toString('base64');
    request.on('data', function (data) {
        body += data;
        encRequest = ccav.encrypt(body, keyBase64, ivBase64);
        formbody = `
            <form id="nonseamless" method="post" name="redirect" action="https://secure.ccavenue.com/transaction/transaction.do?command=initiateTransaction">
                <input type="hidden" id="encRequest" name="encRequest" value="${encRequest}">
                <input type="hidden" name="access_code" id="access_code" value="${accessCode}">
                <script language="javascript">document.redirect.submit();</script>
            </form>
        `;
    });

    request.on('end', function () {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write(formbody);
        console.log(formbody)
        response.end();
    });
};