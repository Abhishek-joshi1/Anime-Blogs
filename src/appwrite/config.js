import conf from "../conf"
import { Client, Account, ID, Databases, Storage, Query } from "appwrite"

export class Service{
    client = new Client();
    account;
    databases;
    bucket;

    constructor () {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectid);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({title, slug, content, featuredImage, status, userID}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseid,
                conf.appwriteCollectionid,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userID,
                }
            )
        } catch (error) {
            console.log("Appwrite Service :: createPost :: error", error);
        }
    }

    async updatePost(slug, {title, content, featuredImage, status}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseid,
                conf.appwriteCollectionid,
                slug, 
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )
        } catch (error) {
            console.log("Appwrite Service :: updatePost :: error", error);
        }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseid,
                conf.appwriteCollectionid,
                slug,
            )
            return true
        } catch (error) {
            console.log("Appwrite Service :: deletePost :: error", error);
            return false
        }
    }
    
}

const service = new Service()

export default service;