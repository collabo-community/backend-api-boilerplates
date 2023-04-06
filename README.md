# @code-collabo's node-mongo API boilerplate templates

This is the manual download option for the API boilerplate templates generated by [@code-collabo/node-mongo-cli](https://code-collabo.gitbook.io/node-mongo/).

> Note 
> cd into any of the 3 folders ts, esm or cjs before installing or running the project as instructed below. 

## Running the API's Development server
Make sure to either have mongoDB installed and running on your computer, or have a monogDB atlas cluster set up in the cloud. Set the environment variables in the .env file you create (see example in .env.example file). Use the commands below to run the API locally on your computer.

Install dependencies:

````
npm install
````

Start dev server for connection to mongoDB (local):

````
npm run dev
````

Or, start dev server for connection to mongoDB (Atlas):

````
npm run dev:atlas
````

Open up localhost port in the browser:

```
http://localhost:8080
```

## Further help

Consult the [API boilerplate template documentation](https://code-collabo.gitbook.io/node-mongo/boilerplate-templates).


## Contributors ✨

Thanks to these [amazing contributors to the node-mongo project](https://github.com/code-collabo/node-mongo-cli#appreciation). This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. See [emoji key](https://allcontributors.org/docs/en/emoji-key). Contributions of any kind welcome!