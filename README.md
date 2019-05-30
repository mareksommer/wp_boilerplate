# wp_boilerplate
Docker Wordpress bolilerplate

# Setup
1. Clone this repo
2. Set DB name and optionally other settings in docker-compose.yaml
3. Run docker-compose up -d
4. Browse to the address defined in the wp image in docker-compose file (default: localhost:8000)
5. Open template folder in terminal (wp-app/wp-content/themes/sommer) and install npm modules - npm install
6. Run npm run dev in template folder for building SASS

# Notes
Wordfence Security and Yoast SEO active only after deploy to the production server and domain
