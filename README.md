# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh





## Deploying React steps

- `npm run build` to create a dist folder which contains an html file and assets
- `npm run preview` to preview the built version

### Use Netlify to publish
- Create an account in netlify.com
- Select Add new site and click on Deploy manually
- Drop the dist folder into the browser. 
- Click open production deploy to see the deployed app (curently hosted on netlify domain)
- To change domain, Go to deploy options, domain settings, domain management, then next to your project, click options and change site name. 
- To chage the top-level domain from netlify.app, you need to buy a domain. 
- You can use domain.com


## Deploying React to github
- Create a repository and push your project into it. 
- In the React directory, run `npm install gh-pages --save-dev`
- In the package.json file, add ```homepage: http://{github-username}.github.io/{repo-name}```.
- Add this to the scripts
```bash
"predeploy" : "npm run build",
"build" : "gh-pages -d build",

```
- After adding and pushing the changes, run `npm run deploy`, this will make the deployment to the gh-pages branch. 

https://blog.logrocket.com/deploying-react-apps-github-pages/