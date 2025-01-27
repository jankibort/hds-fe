### Getting Started

To run the <b>development</b> server:

- install NPM CLI [https://docs.npmjs.com/downloading-and-installing-node-js-and-npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

- upon first launch or modifing packages run CLI command to install dependencies specified in package.json - `npm i`

- to start a server execute a CLI command - `npm run dev`

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

- To run the <b>designsystem</b> server locally:

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Display all stories - `npm run storybook`

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; or display just pages (view that's suppose to be deployed for client) - `npm run storybook-docs`

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Open [http://localhost:6006](http://localhost:6006) with your browser to check components documentation.

\
Modifying the project refer to Next.js 15.1.5 docs and dependencies specified in `package.json`

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- upon working on a project ensure you execute linting and formatting commands either with help of CLI tools or plugins for IDE of your choice for:
  - [[Prettier](https://prettier.io/docs/en/cli)] (`npx prettier --write .`)
  - [[EsLint](https://eslint.org/docs/latest/use/command-line-interface)] (`npm run lint`)
