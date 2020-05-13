import { Request, Response } from "express";
import createUser from "./services/CreateUser";

export function helloworld( request:Request, response:Response){
  const user = createUser({ // Assim passo um variável obj e não variáveis com ocorria acima
    email:'joezer@smaniotto.com.br',
    password: '12345',
    techs:[
      'Node.js',
      'Reactjs',
      'React Native',
     {title:'Javascript',experience:100},
    ],

    

  });

  const user1 = createUser({ // Assim passo um variável obj e não variáveis com ocorria acima
    email:'j@smaniotto.com.br',
    password: '12345',
    techs:[
      'Node.js',
      'Reactjs',
      'React Native',
     {title:'Javascript',experience:100},
    ],

  return response.({message:'Hello World'});

}