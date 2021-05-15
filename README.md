# Portfolio website - react

### How to deploy react app to Github

* Installation in server: Git, Node.js, Npm

1. Create a repository
`npm init react-app app-name`

2. Install github pages pagckage as a dev-dependency

`cd app-name
 npm install gh-pages --save-dev`

3. Add following properties in package.json file

`"homepage": "http://githubID.github.io/app-name"`

`"scripts": {
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
...
}`

4. Create a repository in Github
5. Initialize and add Github repository as a remote in the local git repository.
`git init
 git remote add original `


Reference : https://dev.to/yuribenjamin/how-to-deploy-react-app-in-github-pages-2a1f


