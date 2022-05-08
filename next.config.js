const {PHASE_DEVELOPMENT_SERVER} = require('next/constants');

module.exports = (phase) => {
    if (phase === PHASE_DEVELOPMENT_SERVER) {
        return {
            env: {
                mongodb_username: 'user',
                mongodb_password: '5Qq43w3dKqqQZ8tf',
                mongodb_cluster: 'cluster0',
                mongodb_database: 'myFirstDatabase-dev',
            },
        };
    }

    return {
        env: {
            mongodb_username: 'user',
            mongodb_password: '5Qq43w3dKqqQZ8tf',
            mongodb_cluster: 'cluster0',
            mongodb_database: 'myFirstDatabase',
        },
    };
};
