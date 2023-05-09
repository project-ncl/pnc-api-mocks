# PNC API mocks

## Prerequisites

See `"engines"` in [package.json](./package.json) for minimum version requirements (for example `node` and `npm`).

## Workflows

Contribute using [GitHub flow](https://guides.github.com/introduction/flow/), once new Pull request is created, [GitHub Workflows](https://github.com/project-ncl/pnc-api-mocks/tree/main/.github/workflows) are started and jobs consisting of building and testing are executed.

First prepare project locally:

```bash
git clone <yourGitForkUrl> pnc-api-mocks
cd ./pnc-api-mocks/
npm install
```

To start the mock backend:

```bash
npm start   # runs the server on http://localhost:8020
```

## Mocking data

In order to create an endpoint for some data, follow these steps.

Create JavaScript file in the `mocks` directory representing one endpoint. The file needs to export array of entities (using `module.exports`). See, for example, [product-milestone-statistics.js](./mocks/product-milestone-statistics.js)
