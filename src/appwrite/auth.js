import conf from "../conf"
import { Client, Account, ID } from "appwrite"

export class AuthService {
    client = new Client();
    account;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectid);
        
        this.account = new Account(this.client);
    }

    async createAccount({email, passwrod, name}){
        try {
            const userAccount = await this.account.create(ID.unique(), email, passwrod, name);
            if(userAccount){
                //call another method 
                return this.login({email, passwrod});
            } else {
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    async login({email, passwrod}){
        try {
            return await this.account.createEmailPasswordSession(email, passwrod);
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite Service :: getCurrentUser :: error ", error);
        }

        return null;
    }

    async logout(){
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite Service :: logout :: error ", error);
        }
    }
} 

const authService = new AuthService();

export default authService;