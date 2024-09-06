import { jwtDecode } from "jwt-decode";


export const verifyToken = (tokken:string) => {
 return jwtDecode(tokken)
}