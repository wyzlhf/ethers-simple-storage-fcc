// const ethers=require("ethers")
// const fs=require('fs-extra')
// require('dotenv').config()
import {ethers} from "ethers";
import * as fs from 'fs-extra'
import 'dotenv/config'

async function main() {
    const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL)
    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY!, provider)
    const encryptedJsonKey = await wallet.encrypt(
        process.env.PRIVATE_KEY_PASSWORD!,
        process.env.PRIVATE_KEY!
    )
    console.log(encryptedJsonKey)
    fs.writeFileSync('./encryptedKey.json', encryptedJsonKey)
}

main()