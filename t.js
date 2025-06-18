
var b = {
  __callback_id: 'd',
  func: "apiParam",
  params: {
    method: "GET",
  },
  JSSDK: "1.2.1",
  __msg_type: "call"
}
  function call(){
    window.ToutiaoJSBridge._handleMessageFromToutiao=function(p1){
      let re = JSON.stringify(p1);
      console.log('=1='+re)
      alert(re)
    }
    window.ToutiaoJSBridge.invokeMethod(JSON.stringify(b))
  }
try{
  call()
}catch(e){
  alert(e)
}
