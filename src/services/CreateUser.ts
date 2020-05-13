
interface TechObject {
    title: string;
    experience: number;
}

interface createUserData{ // Como eu defino os tipos de um conjunto de informações
  name?:string;
  email: string;
  password:string;
  techs: Array<string |TechObject>; 

} 

export default function createUser({name='',email,password}:createUserData){ // Usando Desistruturação
  const user = {
    name,
    email,
    password
  } 
  return user;
}