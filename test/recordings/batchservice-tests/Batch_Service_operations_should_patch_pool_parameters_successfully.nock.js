// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'batchtestnodesdk';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://batchtestnodesdk.japaneast.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = '00000000-0000-0000-0000-000000000000';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://batchtestnodesdk.japaneast.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.patch('/pools/nodesdktestpool1?api-version=2017-05-01.5.0', '*')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Fri, 26 May 2017 16:46:35 GMT',
  etag: '0x8D4A456C59C3C83',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '4571a306-2899-4bc0-b0a2-603975798358',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  dataserviceid: 'https://batchtestnodesdk.japaneast.batch.azure.com/pools/nodesdktestpool1',
  date: 'Fri, 26 May 2017 16:46:35 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://batchtestnodesdk.japaneast.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.patch('/pools/nodesdktestpool1?api-version=2017-05-01.5.0', '*')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Fri, 26 May 2017 16:46:35 GMT',
  etag: '0x8D4A456C59C3C83',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '4571a306-2899-4bc0-b0a2-603975798358',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  dataserviceid: 'https://batchtestnodesdk.japaneast.batch.azure.com/pools/nodesdktestpool1',
  date: 'Fri, 26 May 2017 16:46:35 GMT',
  connection: 'close' });
 return result; }]];