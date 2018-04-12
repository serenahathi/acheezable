const env = process.env.NODE_ENV || 'development';
console.log('env ****', env);

if (env === 'development') {
  process.env.PORT = 3000;
  process.env.MONGODB_URI = 'mongodb://heroku_2bkcpqtl:te5p15oamr008ndu15578n12g6@ds241019.mlab.com:41019/heroku_2bkcpqtl';
} else if (env === 'test') {
  process.env.PORT = 3000;
  process.env.MONGODB_URI = 'mongodb://localhost:27017/AcheezableTest';
}
