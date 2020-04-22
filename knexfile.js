// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection: {
      database: 'ven10test',
      user:     'postgres',
      password: 'naan'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },
  staging: {
    client: 'pg',
    connection: {
      database: 'ven10test',
      user:     'postgres',
      password: 'naan'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'pg',
    connection: {
      database: 'ven10test',
      user:     'postgres',
      password: 'naan'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
