// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'batchtestnodesdk';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://batchtestnodesdk.japaneast.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = '00000000-0000-0000-0000-000000000000';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://batchtestnodesdk.japaneast.batch.azure.com:443')
  .head('/jobs/HelloWorldJobNodeSDKTest/tasks/HelloWorldNodeSDKTestTask2/files/stderr.txt?api-version=2017-05-01.5.0')
  .reply(200, "", { 'content-length': '0',
  'content-type': 'application/octet-stream',
  'last-modified': 'Fri, 26 May 2017 16:53:46 GMT',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '84b429ca-a5fd-44fa-bb4a-e129e941ab52',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  'ocp-creation-time': 'Fri, 26 May 2017 16:53:46 GMT',
  'ocp-batch-file-isdirectory': 'False',
  'ocp-batch-file-url': 'https%3A%2F%2Fbatchtestnodesdk.japaneast.batch.azure.com%2Fjobs%2FHelloWorldJobNodeSDKTest%2Ftasks%2FHelloWorldNodeSDKTestTask2%2Ffiles%2Fstderr.txt',
  date: 'Fri, 26 May 2017 16:55:48 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://batchtestnodesdk.japaneast.batch.azure.com:443')
  .head('/jobs/HelloWorldJobNodeSDKTest/tasks/HelloWorldNodeSDKTestTask2/files/stderr.txt?api-version=2017-05-01.5.0')
  .reply(200, "", { 'content-length': '0',
  'content-type': 'application/octet-stream',
  'last-modified': 'Fri, 26 May 2017 16:53:46 GMT',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '84b429ca-a5fd-44fa-bb4a-e129e941ab52',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  'ocp-creation-time': 'Fri, 26 May 2017 16:53:46 GMT',
  'ocp-batch-file-isdirectory': 'False',
  'ocp-batch-file-url': 'https%3A%2F%2Fbatchtestnodesdk.japaneast.batch.azure.com%2Fjobs%2FHelloWorldJobNodeSDKTest%2Ftasks%2FHelloWorldNodeSDKTestTask2%2Ffiles%2Fstderr.txt',
  date: 'Fri, 26 May 2017 16:55:48 GMT',
  connection: 'close' });
 return result; }]];