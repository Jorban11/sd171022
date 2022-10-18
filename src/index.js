import { createServer } from "@graphql-yoga/node";

//Especificar as operações existentes. Ou seja, a nossa interface

const typeDefs = `
    type Query{
        hello: String! 
        name: String!
        id: ID!
        localizacao: String!
        idade: Int!
        deMaior: Boolean!
        salario: Float
    }
`;


//Como as operações funcionam. Escrever um "resolver" para cada operação prometida. O "resolver" é uma operação
const meuId = 14
const minhaIdade = 19

const resolvers = {
    Query:{
        hello(){
            return "Hello GraphQL"
        },
        name(){
            return "Luiz"
        },
        id(){
            return meuId
        },
        localizacao(){
            return "SP"
        },
        idade(){
            return minhaIdade
        },
        deMaior(){
            return true
        },
        salario(){
            return 1223
        }

    }
}

//Construir um servidor entregando a ele a especificação das operações e, mais ainda, sua implementação

const server = createServer({
    schema:{
        typeDefs,
        resolvers
    },
})

server.start()