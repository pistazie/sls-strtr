An opinionated serverless fullstack starter including multiple stages and a CI/CD pipeline.

Start coding a fully fledged fullstack Serverless application with CI/CD in 15min!

## Features / Components:
* [https://serverless.com](The Serverless Framework)
* AWS
* Backend
   * Kotlin + Maven
   * Apigateway
   * Lambda
   * JUnit5
* Frontend
   * S3 + Cloudfront
   * Webpack
   * SASS
   * Babel
   * Jest
* CI/CD
   * GitHub (source code)
   * AWS CodePipeline + CodeBuild
   * staging, prod and more on demand stages (frontend and backend)    
   * Serverless framework testing

## Getting started

### Preconditions
* AWS CLI is locally installed with default credentials for an AWS account
* Node / NPM
* Maven

### Steps: 
Fork
locally git clone
npm install

Github secret and config
AWS config (region, app name)

mvn clean install
npm run build
sls deploy --stage staging
sls deploy --stage dev
Done!
   
### Serverless + CI/CD
* sls deploy and creates seperate CF stack with all resources
* only staging has CI/CD pipeline  and it carries it for prod too
* buildspec files define the building steps
* Writes to publicOutputs.js
* Staging stage (wass the name?) runs all tests and deploys to staging (you can add here E2E)
* manual release for prod
* Prod deployes previously built front and backend artifacts to Prod stage
* Get U R prod url from CodeBuild. it won't change afterwards. 
   
### Backend
* maven runs tests.. locally and in CI/CD
        
### Frontend
 useful command and work flows:
   local developemnt:
        * cd frontend && npm run dev (set the publicOutpts of this to working dev stage)
        * ... npm run dev (set the publicOutpts of this to localyrunnign thing?)
   To know
        * publicOutputs.js
        * S3 + CF + invalidation
        * Testing (run locally and where the CICD runs them)
        
             

## Wishlist / Backlog
* Mocito Kotlin in backend testing
* LocalStack integration for testing against mocked AWS services
* Custom Cloudfront Domain with SSL        
* X-Ray integration
* Add Cloudwatch logs to outputs
* Add Cloudwatch monitoring link and/or dashboard


