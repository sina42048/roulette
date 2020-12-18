const privateRoutes = require('./routes/privateRoutes');
const publicRoutes = require('./routes/publicRoutes');

const config = {
  migrate: false,
  privateRoutes,
  publicRoutes,
  port: process.env.PORT || '2017',
  emailHost: 'smtp.mailtrap.io',
  emailPort: 2525,
  emailUserName: '912db61f207f8c',
  emailPassword: 'b95db6f514ed28',
  url: 'http://192.168.1.83:4200',
};

module.exports = config;
