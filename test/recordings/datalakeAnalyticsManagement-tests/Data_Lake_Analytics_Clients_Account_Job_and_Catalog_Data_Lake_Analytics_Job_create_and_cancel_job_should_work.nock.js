// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'East US 2';
  process.env['AZURE_TEST_RESOURCE_GROUP'] = 'xplattestadlarg05';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'ce4a7590-4722-4bcf-a2c6-e473e9f11778';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://xplattestadla7793.azuredatalakeanalytics.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/Jobs/d059392c-e921-4b4b-ad8a-f5e0afd119f7?api-version=2016-11-01', '*')
  .reply(200, "{\"jobId\":\"d059392c-e921-4b4b-ad8a-f5e0afd119f7\",\"name\":\"xplattestjob\",\"type\":\"USql\",\"submitter\":\"jasonsrptest2@SPI\",\"degreeOfParallelism\":1,\"priority\":1000,\"submitTime\":\"2017-06-09T09:25:09.5124408+00:00\",\"state\":\"Compiling\",\"result\":\"None\",\"stateAuditRecords\":[{\"newState\":\"New\",\"timeStamp\":\"2017-06-09T09:25:09.5124408+00:00\",\"details\":\"userName:;submitMachine:N/A\"}],\"properties\":{\"owner\":\"jasonsrptest2@SPI\",\"resources\":[],\"runtimeVersion\":\"default\",\"rootProcessNodeId\":\"00000000-0000-0000-0000-000000000000\",\"algebraFilePath\":\"adl://xplattestadls1506.azuredatalakestore.net/system/jobservice/jobs/Usql/2017/06/09/09/25/d059392c-e921-4b4b-ad8a-f5e0afd119f7/algebra.xml\",\"compileMode\":\"Semantic\",\"errorSource\":\"Unknown\",\"totalCompilationTime\":\"PT0S\",\"totalPausedTime\":\"PT0S\",\"totalQueuedTime\":\"PT0S\",\"totalRunningTime\":\"PT0S\",\"expirationTimeUtc\":\"0001-01-01T00:00:00Z\",\"type\":\"USql\"}}", { 'cache-control': 'private, no-cache, no-store, max-age=0',
  'transfer-encoding': 'chunked',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'aa882d34-b2a8-4baf-a9fb-3f19ae7737bf',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Fri, 09 Jun 2017 09:25:09 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadla7793.azuredatalakeanalytics.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/Jobs/d059392c-e921-4b4b-ad8a-f5e0afd119f7?api-version=2016-11-01', '*')
  .reply(200, "{\"jobId\":\"d059392c-e921-4b4b-ad8a-f5e0afd119f7\",\"name\":\"xplattestjob\",\"type\":\"USql\",\"submitter\":\"jasonsrptest2@SPI\",\"degreeOfParallelism\":1,\"priority\":1000,\"submitTime\":\"2017-06-09T09:25:09.5124408+00:00\",\"state\":\"Compiling\",\"result\":\"None\",\"stateAuditRecords\":[{\"newState\":\"New\",\"timeStamp\":\"2017-06-09T09:25:09.5124408+00:00\",\"details\":\"userName:;submitMachine:N/A\"}],\"properties\":{\"owner\":\"jasonsrptest2@SPI\",\"resources\":[],\"runtimeVersion\":\"default\",\"rootProcessNodeId\":\"00000000-0000-0000-0000-000000000000\",\"algebraFilePath\":\"adl://xplattestadls1506.azuredatalakestore.net/system/jobservice/jobs/Usql/2017/06/09/09/25/d059392c-e921-4b4b-ad8a-f5e0afd119f7/algebra.xml\",\"compileMode\":\"Semantic\",\"errorSource\":\"Unknown\",\"totalCompilationTime\":\"PT0S\",\"totalPausedTime\":\"PT0S\",\"totalQueuedTime\":\"PT0S\",\"totalRunningTime\":\"PT0S\",\"expirationTimeUtc\":\"0001-01-01T00:00:00Z\",\"type\":\"USql\"}}", { 'cache-control': 'private, no-cache, no-store, max-age=0',
  'transfer-encoding': 'chunked',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'aa882d34-b2a8-4baf-a9fb-3f19ae7737bf',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Fri, 09 Jun 2017 09:25:09 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadla7793.azuredatalakeanalytics.net:443')
  .post('/Jobs/d059392c-e921-4b4b-ad8a-f5e0afd119f7/CancelJob?api-version=2016-11-01')
  .reply(200, "", { 'cache-control': 'private, no-cache, no-store, max-age=0',
  'transfer-encoding': 'chunked',
  expires: '-1',
  'x-ms-request-id': '68618980-ea8e-4c44-a290-32476b450ea1',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Fri, 09 Jun 2017 09:25:11 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadla7793.azuredatalakeanalytics.net:443')
  .post('/Jobs/d059392c-e921-4b4b-ad8a-f5e0afd119f7/CancelJob?api-version=2016-11-01')
  .reply(200, "", { 'cache-control': 'private, no-cache, no-store, max-age=0',
  'transfer-encoding': 'chunked',
  expires: '-1',
  'x-ms-request-id': '68618980-ea8e-4c44-a290-32476b450ea1',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Fri, 09 Jun 2017 09:25:11 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadla7793.azuredatalakeanalytics.net:443')
  .get('/Jobs/d059392c-e921-4b4b-ad8a-f5e0afd119f7?api-version=2016-11-01')
  .reply(200, "{\"jobId\":\"d059392c-e921-4b4b-ad8a-f5e0afd119f7\",\"name\":\"xplattestjob\",\"type\":\"USql\",\"submitter\":\"jasonsrptest2@SPI\",\"degreeOfParallelism\":1,\"priority\":1000,\"submitTime\":\"2017-06-09T09:25:09.5124408+00:00\",\"endTime\":\"2017-06-09T09:25:11.0593325+00:00\",\"state\":\"Ended\",\"result\":\"Cancelled\",\"errorMessage\":[{\"errorId\":\"I_USER_CJS_CANCELEDBYUSER\",\"name\":\"CANCELED_BY_USER\",\"severity\":\"Info\",\"source\":\"User\",\"component\":\"CJS\",\"message\":\"Job was cancelled.\",\"details\":\"\",\"description\":\"Job was cancelled by jasonsrptest2@SPI.\",\"resolution\":\"\",\"helpLink\":\"\",\"innerError\":null}],\"stateAuditRecords\":[{\"newState\":\"New\",\"timeStamp\":\"2017-06-09T09:25:09.5124408+00:00\",\"details\":\"userName:;submitMachine:N/A\"},{\"newState\":\"Compiling\",\"timeStamp\":\"2017-06-09T09:25:09.8249458+00:00\",\"details\":\"CcsAttempts:1;Status:Dispatched\"},{\"newState\":\"Ended\",\"timeStamp\":\"2017-06-09T09:25:11.0593325+00:00\",\"details\":\"result:CanceledByUser\"}],\"properties\":{\"owner\":\"jasonsrptest2@SPI\",\"resources\":[{\"name\":\"Profile\",\"resourcePath\":\"adl://xplattestadls1506.azuredatalakestore.net/system/jobservice/jobs/Usql/2017/06/09/09/25/d059392c-e921-4b4b-ad8a-f5e0afd119f7/profile\",\"type\":\"StatisticsResource\"},{\"name\":\"__ScopeRuntimeStatistics__.xml\",\"resourcePath\":\"adl://xplattestadls1506.azuredatalakestore.net/system/jobservice/jobs/Usql/2017/06/09/09/25/d059392c-e921-4b4b-ad8a-f5e0afd119f7/__ScopeRuntimeStatistics__.xml\",\"type\":\"StatisticsResource\"}],\"runtimeVersion\":\"default\",\"rootProcessNodeId\":\"00000000-0000-0000-0000-000000000000\",\"script\":\"DROP DATABASE IF EXISTS FOO; CREATE DATABASE FOO; DROP DATABASE IF EXISTS FOO;\",\"algebraFilePath\":\"adl://xplattestadls1506.azuredatalakestore.net/system/jobservice/jobs/Usql/2017/06/09/09/25/d059392c-e921-4b4b-ad8a-f5e0afd119f7/algebra.xml\",\"compileMode\":\"Semantic\",\"errorSource\":\"UserError\",\"totalCompilationTime\":\"PT1.2343867S\",\"totalPausedTime\":\"PT0S\",\"totalQueuedTime\":\"PT0S\",\"totalRunningTime\":\"PT0S\",\"expirationTimeUtc\":\"0001-01-01T00:00:00\",\"type\":\"USql\"}}", { 'cache-control': 'private, no-cache, no-store, max-age=0',
  'transfer-encoding': 'chunked',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '66c208ed-115f-411d-ab49-911411540bb4',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Fri, 09 Jun 2017 09:25:13 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadla7793.azuredatalakeanalytics.net:443')
  .get('/Jobs/d059392c-e921-4b4b-ad8a-f5e0afd119f7?api-version=2016-11-01')
  .reply(200, "{\"jobId\":\"d059392c-e921-4b4b-ad8a-f5e0afd119f7\",\"name\":\"xplattestjob\",\"type\":\"USql\",\"submitter\":\"jasonsrptest2@SPI\",\"degreeOfParallelism\":1,\"priority\":1000,\"submitTime\":\"2017-06-09T09:25:09.5124408+00:00\",\"endTime\":\"2017-06-09T09:25:11.0593325+00:00\",\"state\":\"Ended\",\"result\":\"Cancelled\",\"errorMessage\":[{\"errorId\":\"I_USER_CJS_CANCELEDBYUSER\",\"name\":\"CANCELED_BY_USER\",\"severity\":\"Info\",\"source\":\"User\",\"component\":\"CJS\",\"message\":\"Job was cancelled.\",\"details\":\"\",\"description\":\"Job was cancelled by jasonsrptest2@SPI.\",\"resolution\":\"\",\"helpLink\":\"\",\"innerError\":null}],\"stateAuditRecords\":[{\"newState\":\"New\",\"timeStamp\":\"2017-06-09T09:25:09.5124408+00:00\",\"details\":\"userName:;submitMachine:N/A\"},{\"newState\":\"Compiling\",\"timeStamp\":\"2017-06-09T09:25:09.8249458+00:00\",\"details\":\"CcsAttempts:1;Status:Dispatched\"},{\"newState\":\"Ended\",\"timeStamp\":\"2017-06-09T09:25:11.0593325+00:00\",\"details\":\"result:CanceledByUser\"}],\"properties\":{\"owner\":\"jasonsrptest2@SPI\",\"resources\":[{\"name\":\"Profile\",\"resourcePath\":\"adl://xplattestadls1506.azuredatalakestore.net/system/jobservice/jobs/Usql/2017/06/09/09/25/d059392c-e921-4b4b-ad8a-f5e0afd119f7/profile\",\"type\":\"StatisticsResource\"},{\"name\":\"__ScopeRuntimeStatistics__.xml\",\"resourcePath\":\"adl://xplattestadls1506.azuredatalakestore.net/system/jobservice/jobs/Usql/2017/06/09/09/25/d059392c-e921-4b4b-ad8a-f5e0afd119f7/__ScopeRuntimeStatistics__.xml\",\"type\":\"StatisticsResource\"}],\"runtimeVersion\":\"default\",\"rootProcessNodeId\":\"00000000-0000-0000-0000-000000000000\",\"script\":\"DROP DATABASE IF EXISTS FOO; CREATE DATABASE FOO; DROP DATABASE IF EXISTS FOO;\",\"algebraFilePath\":\"adl://xplattestadls1506.azuredatalakestore.net/system/jobservice/jobs/Usql/2017/06/09/09/25/d059392c-e921-4b4b-ad8a-f5e0afd119f7/algebra.xml\",\"compileMode\":\"Semantic\",\"errorSource\":\"UserError\",\"totalCompilationTime\":\"PT1.2343867S\",\"totalPausedTime\":\"PT0S\",\"totalQueuedTime\":\"PT0S\",\"totalRunningTime\":\"PT0S\",\"expirationTimeUtc\":\"0001-01-01T00:00:00\",\"type\":\"USql\"}}", { 'cache-control': 'private, no-cache, no-store, max-age=0',
  'transfer-encoding': 'chunked',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '66c208ed-115f-411d-ab49-911411540bb4',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Fri, 09 Jun 2017 09:25:13 GMT',
  connection: 'close' });
 return result; }]];
 exports.uuidsGenerated = function() { return ['d059392c-e921-4b4b-ad8a-f5e0afd119f7'];};