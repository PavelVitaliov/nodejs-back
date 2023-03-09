// const mongoUrl = 'mongodb+srv://root:root@angular-edu-app-db.gvpze.mongodb.net/interns-database?retryWrites=true&w=majority';
const mongoUrl = '';

const secret = 'test';
const loggerMode = 'dev';

const port = Number(process.env.PORT) || 5000;
const dbUrl = process.env.PROD_DB_URL || mongoUrl;

const config = {
  app: {
    port,
    secret,
    loggerMode,
  },
  db: {
    url: dbUrl,
  },
};

export default config;
