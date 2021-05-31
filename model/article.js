 module.exports =  class Article extends require('./model'){
    static getHot(num){
            return new Promise((reslove,reject)=>{
                let sql = 'SELECT id,title,content,`time` FROM article WHERE hot =1 LIMIT ?'
                this.query(sql,num).then(resluts=>{
                    reslove(resluts)
                }).catch(err =>{
                    console.log(`获取热门推荐文章失败 : ${err.message}`)
                    reject(err)
                })
            })
    }
}