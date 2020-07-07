import { prisma } from "../../../../generated/prisma-client";
import { sendUserMail } from "../../../utils";

export default {
    Mutation: {
        createAccount: async(_, args) => {
            const { spId, name, email, addr, phone } = args;
            const salePerson = await prisma.salePerson({id: spId});
            if(salePerson){
                const newUser = await prisma.createUser({
                    salePerson: {
                        connect: {
                            id: spId
                        }
                    },
                    name,
                    email,
                    addr,
                    phone
                });
                sendUserMail("hwkim7419@gmail.com",name, email, addr, phone);
                return newUser;
            } else {
                return null;
            }
        }
    }
}