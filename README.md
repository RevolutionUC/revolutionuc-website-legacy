# RevolutionUC-Website
RevolutionUC is a student hackathon in which we invite students from across the midwest
to partake in a weekend of code, community, and self-improvement. Join us to build, learn,
and grow together!

## Setup for development

#### To setup this environment for development for OSX:

1. Install Node with either brew (http://brew.sh/) or go to http://nodejs.org
2. In your terminal run 'npm install -g grunt-cli'
3. Navigate to the root directory `/RevolutionUC-Website`
4. In the terminal run 'git submodule update --init --recursive'
5. Then run 'bower install'
6. Then run 'npm install'
7. Then 'grunt build'
8. Navigate to the dist directory and run a simple server
    * For example `python -m SimpleHTTPServer`
