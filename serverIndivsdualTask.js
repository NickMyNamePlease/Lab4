import { graphql, buildSchema } from 'graphql';
import express from 'express';
import { graphqlHTTP } from 'express-graphql';

let schema = buildSchema(`
  type Query {
    sum(numbers: String!): Int
  }
`);

let root = {
  sum: ({ numbers }) => {
    const regex = /\d+/g;
    const numbersArray = numbers.match(regex);

    if (numbersArray) {
      const sum = numbersArray.reduce((acc, curr) => parseInt(acc) + parseInt(curr), 0);
      return sum;
    } else {
      return 0;
    }
  },
};

let app = express();

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(4003);
console.log('http://localhost:4003/graphql');