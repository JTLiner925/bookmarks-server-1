module.exports = {
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  API_TOKEN: process.env.API_TOKEN || 'dummy-api-token',
  DATABASE_URL: process.env.DATABASE_URL || 'postgres://cseyjqprfqoiax:bc9f678df932528ccf4fee7fc94db5fd563ec1f38e8283ee2f2b1b789a862f55@ec2-52-70-15-120.compute-1.amazonaws.com:5432/d52biacuneajk7',
}
