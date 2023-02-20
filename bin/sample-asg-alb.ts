#!/usr/bin/env node
require("dotenv").config();
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { SampleAsgAlbStack } from "../lib/sample-asg-alb-stack";

const env = {
  // put your account number and region to deploy to here
  account: process.env.AWS_ACCOUNT,
  region: process.env.CDK_REGION || "us-east-1",
};

const app = new cdk.App();
new SampleAsgAlbStack(app, "SampleAsgAlbStack", {
  env,
});
