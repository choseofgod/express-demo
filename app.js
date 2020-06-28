const express = require('express')
const app = express()
const path = require('path')



app.engine('art',require('express-art-template'))
app.set('views',{
  debug : process.env.NODE_ENV !== 'production'
})
app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'art')
app.set('view engine', 'html')

app.use('/public',express.static(__dirname + '/public'))

app.get('/index', (req, res) => {
    res.render('index.art',{
      comments : [
        {
          name: '张三',
          message: '今天天气不错',
          dateTime: '2015-10-16'
        },
        {
          name: '张4',
          message: '今天天气不错',
          dateTime: '2015-10-16'
        },
        {
          name: '张5',
          message: '今天天气不错',
          dateTime: '2015-10-16'
        },
        {
          name: '张6',
          message: '今天天气不错',
          dateTime: '2015-10-16'
        },
        {
          name: '张7',
          message: '今天天气不错',
          dateTime: '2015-10-16'
        },
        {
          name: '张8',
          message: '今天天气不错',
          dateTime: '2015-10-16'
        }
      ]
    })
  }
)

app.get('/',(req,res) => {
  res.redirect('/index')
})

app.get('/about', (req, res) => res.send('hello i me about!'))

app.get('/post',(req,res) => {
  res.sendFile(__dirname +'/views/post.html')
})
app.listen(3000,function () {
  console.log('express app is running');
})