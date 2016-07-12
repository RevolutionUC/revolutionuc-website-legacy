# RevolutionUC-Website
RevolutionUC is a student hackathon in which we invite students from across the midwest
to partake in a weekend of code, community, and self-improvement. Join us to build, learn,
and grow together!

## Setup for development

#### To setup this environment for development for OSX:

1. Install Node with either brew (http://brew.sh/) or go to https://nodejs.org
2. In your terminal run `npm install -g grunt-cli`
3. Navigate to the root directory `/RevolutionUC-Website`

Execute the following commands in the terminal:

```sh
git submodule update --init --recursive
bower install
npm install
grunt
```

Navigate to the dist directory and run a simple server
  * For example `python -m SimpleHTTPServer 4000`
  * Then navigate to `localhost:4000`