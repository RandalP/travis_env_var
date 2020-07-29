
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  const typeName = process.env.MICROSERVICE_TYPE;
  while(true) {
    console.log(`${typeName} Microservices rock!`);
    await sleep(5000);
  }
}

main();
