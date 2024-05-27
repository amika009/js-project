/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's

/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's

let nftCollection = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(name, rarity, type, dmg) {
    const nft = {
        name: name,
        rarity: rarity,
        type: type,
        damage: dmg,
        
    };
    nftCollection.push(nft);
    console.log("Minted: " + name);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs() {
    console.log("\n");
    for (let i = 0; i < nftCollection.length; i++) {
        const nft = nftCollection[i];
        console.log(Name: ${nft.name});
        console.log(Rarity: ${nft.rarity});
        console.log(Type: ${nft.type});
        console.log(Damage: ${nft.damage});
       
        console.log("\n");
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    return nftCollection.length;
}

// call your functions below this line

mintNFT("Desert Eagle", "Legendary", "Pistol", 63, 50, 0.5);
mintNFT("AK-47", "Epic", "Rifle", 35, 300, 10);
mintNFT("AWP", "Legendary", "Sniper", 115, 1000, 1);
mintNFT("M4A1-S", "Rare", "Rifle", 33, 250, 9);
mintNFT("USP-S", "Common", "Pistol", 35, 40, 6);



listNFTs();

const totalNFTs = getTotalSupply();
console.log("Total Supply: " + totalNFTs);
