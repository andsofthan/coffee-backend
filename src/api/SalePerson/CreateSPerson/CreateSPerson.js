import { prisma } from "../../../../generated/prisma-client";

export default {
   Mutation: {
        createSPerson: async(_, args) => {
            const { theId, name, email = "", phone = "" } = args;
            const user = await prisma.salePerson({theId});
            if(user){
                if(user.name === name){
                    return user;
                } else {
                    return null;
                }
            } else {
                const newUser = await prisma.createSalePerson({theId,name,email,phone});
                return newUser;
            }
        }
   }
}