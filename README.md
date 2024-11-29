
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
- Create a public repository and push your project into it. 
- In the React directory, run `npm install gh-pages --save-dev`
- In the package.json file, add ```homepage: http://{github-username}.github.io/{repo-name}```.
- Add this to the scripts
```bash
"predeploy" : "npm run build",
"build" : "gh-pages -d build",

```
- After adding and pushing the changes, run `npm run deploy`, this will make the deployment to the gh-pages branch.


If using react + vite
- Open your vite.config.js file and ensure the base property matches your repository name:

```bash
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/<repository-name>/', // Replace <repository-name> with your GitHub repo name
});
```

- After making this change, rebuild and redeploy:
```bash
Copy code
npm run build
npm run deploy
```

https://blog.logrocket.com/deploying-react-apps-github-pages/



### To deploy to a github custom domain
Cloudfare offers free domain. Other cheap providers are GoDaddy and Namecheap
- Ensure the CNAME record on your domain service provider points to the GitHub URL of the deployed website (in the case of this example, nelsonmic.github.io/logdeploy/). To do so, navigate to the DNS management page of the domain service provider and add a CNAME record that points to username.github.io where username is your GitHub username. (An A record points a name to an IP . A CNAME record can point a name to another CNAME or to an A record.)

https://www.youtube.com/watch?v=VRgTYJyN9pg&ab_channel=KnowledgeBase