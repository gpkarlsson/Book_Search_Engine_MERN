const { AuthenticationError } = require('apollo-server-errors');
const { User, Book } = require('../models');
const { signToken } = require('../utils/auth');

//TODO: Define the query and mutation functionality to work with the Mongoose models.