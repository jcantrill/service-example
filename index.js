
if(process.env.PROVIDER){
  require ('./lib/consumer/consumer');
}else{
  require ('./lib/provider/app');
}
