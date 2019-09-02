Start coding a fully fledged fullstack Serverless application with CI/CD in no time.

## Features / Components:
* [The Serverless Framework](https://serverless.com)
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

Deploying takes ~15min and requires very few steps. 
Just follow the [Startup Steps](docs/startup).

## Development

#### CI/CD Pipeline

The pipeline will start with every commit pushed to GitHub. The pipeline consists of:
* Fetch code from GitHub
* Build and deploy to staging
  * Build and test Backend using Maven
  * Build and test Frontend using Webpack
  * Deploy to `stageing` stage using the Serverless framework
* Wait for manual approval
* Deploy artifacts to `prod` stage using the Serverless framework

To make changes in the pipeline you look at `CICD.yml`. If you want to change this build and deploy 
flows look into `aws_buildspec_build_test_deploy_staging.yml` and `aws_buildspec_deploy_prod.yml`. 
Changes to the pipeline are provisioned when you deploy the `staging` stage usung the Serverless framework (just commit you changes and the pipeline will deploy them)

#### Backend development

The Backend is built using Maven to build a JAR which the Serverless framework 
deploys to AWS Lambda

* You can locally develop the Kotlin application
* If you want to deploy your code to a `dev` stage:
    * Build using `mvn -f backend clean install`
    * Deploy using `sls deploy --stage dev` (the first ever deployment will be slow due to CloudFront distribution provisioning)

* Tests will automatically run in the Pipeline   
   
#### Frontend development   

The Frontend is build by Webpack, test run by Jest and the artifacts are deploy to an S3 bucket using 
the Serverless Framework. They are then served using an AWS Cloudfront CDN.

* `npm run build --prefix frontend` to build the frontend
* `npm run start --prefix frontend` to interactively locally develop the Frontend
* `npm run test --prefix frontend` to run the tests
   


