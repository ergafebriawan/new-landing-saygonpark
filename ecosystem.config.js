module.export = {
    apps: [{
            name: 'Saygonpark Landing Page',
            script: 'node_modules/.bin/next',
            args: 'start -p 3001',
            cwd: "/var/www/html/new-landing-saygonpark",
            instances: 3,
            autorestart: true,
            watch: false,
            max_memory_restart: '1G',
    }]
};
