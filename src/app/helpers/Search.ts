import { Users } from "../../../types/types";

export const SearchArray = (arr:Users[],str:string):Users[]=>{

    const updated = [...arr].filter((k)=>{
        if((k.email.toLowerCase())===(str.toLowerCase()) || (k.firstName.toLowerCase()).includes(str.toLowerCase()) || (k.lastName.toLowerCase()).includes(str.toLowerCase())){
            return k
        }
    })

    return updated;
}