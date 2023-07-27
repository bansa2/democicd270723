#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { DemawspipelineStack } from '../lib/demawspipeline-stack';

const app = new cdk.App();
new DemawspipelineStack(app, 'DemawspipelineStack', {
  env: {account: '108022054378', region: 'us-east-1'},
});