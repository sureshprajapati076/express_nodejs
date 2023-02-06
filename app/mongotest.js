const {MongoClient} = require('mongodb')

async function main(){

const uri = "mongodb+srv://admin:gNoCP6k5XVDrnPt@cluster1.ssk95tn.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);

try{
    await client.connect();
}
catch(e){
    console.log(e)
}
finally{
    await client.close();
}

}

main().catch(console.error)











