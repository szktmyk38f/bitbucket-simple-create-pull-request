# bitbucket-simple-create-pull-request
Solves the problem of access to the pull request creation screen, which becomes heavy as the number of files in the repository increases.

# Confirm that Node.js version 18 or higher is installed.
```bash
$ node -v
v18.15.0
```

# Edit create-pull-request.mjs
```js
const username = 'username'
const password = 'password'
const base64 = addAndConvertToBase64(username, password)
// Uncomment if through a proxy
// const proxy = "http://xxxxx:yyyyy@proxy.xxxx.xx.xx:xxxx"
```

## username
Enter the username found at https://bitbucket.org/account/settings/.

## password
Open https://bitbucket.org/account/settings/app-passwords/ and create an app password. Create it based on the information below.

![image](https://github.com/szktmyk38f/bitbucket-simple-create-pull-request/assets/40861943/5f9d3be2-8f4b-496c-b860-29c68fc3078f)

The password will be displayed, so enter it here.

![image](https://github.com/szktmyk38f/bitbucket-simple-create-pull-request/assets/40861943/8b4d1c61-2ad4-4d13-b204-3c1060da1014)

# library installation
```bash
npm install node-fetch
npm install https-proxy-agent
```

# Execute
Run the following command in the placed directory
```bash
$ node create-pull-request.mjs
```

You will be asked to set the Title, From branch, and To branch, so enter them.

```bash
$ node create-pull-request.mjs
Set Title: test pull request
Set Source Branch: feature
Set Destination Branch:   main
```

Click Enter to complete.
