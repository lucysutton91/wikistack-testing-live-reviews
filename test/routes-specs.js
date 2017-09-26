const chai = require('chai');
const Promise = require('bluebird');
const expect = chai.expect;
const supertest = require('supertest');

const app = require('../app');
const agent = supertest.agent(app);
const db = require('../models').db;
const Page = require('../models').Page;
const User = require('../models').User;

describe('HTTP requests', () => {

});