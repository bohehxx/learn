const asyncFun = async ()=>{
    await new Promise(setTimeout, 2000)
    
    return '2s 延时后返回字符串'
  }
  export default asyncFun