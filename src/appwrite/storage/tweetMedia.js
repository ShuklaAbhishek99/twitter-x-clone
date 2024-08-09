import { config } from "../../config/config";
import { Client, Storage, ID, ImageGravity } from "appwrite";

class TweetMediaService {
    client = new Client();
    storage;

    constructor() {
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId);

        this.storage = new Storage(this.client);
    }

    async uploadFile(file) {
        try {
            return await this.storage.createFile(
                config.appwriteTweetsBucketId,
                ID.unique(),
                file
            );
        } catch (error) {
            console.log("Appwrite Service :: uploadFile :: error ", error);
        }
    }

    async deleteFile(fileId) {
        try {
            return await this.storage.deleteFile(
                config.appwriteTweetsBucketId,
                fileId
            );
        } catch (error) {
            console.log("Appwrite Service :: deleteFile :: error ", error);
        }
    }

    getFilePreview(fileId) {
        try {
            return this.storage.getFilePreview(
                config.appwriteTweetsBucketId,
                fileId
            );
        } catch (error) {
            console.log("Appwrite Service :: getFilePreview :: error ", error);
        }
    }

    getCustomFilePreview({ fileId, width, height, quality = "" }) {
        try {
            return this.storage.getFilePreview(
                config.appwriteTweetsBucketId,
                fileId,
                width,
                height,
                ImageGravity.Center,
                quality
            );
        } catch (error) {
            console.log(
                "Appwrite Service :: getCustomFilePreview :: error ",
                error
            );
        }
    }
}

const tweetMediaService = new TweetMediaService();

export default tweetMediaService;
