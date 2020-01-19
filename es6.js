// node
const ObservableNode = require('zen-observable')

// rxjs 下面两种导入方式等效
const {Observable,range} = require('rxjs') 
// const Observable = require('rxjs').Observable

const { map, filter,reduce } = require('rxjs/operators')
var obj = new Proxy({}, {
  get: function(target, key,receiver){
    console.log(`gettting ${key}!`)
    return Reflect.get(target, key,receiver);
  },
  set: function(target, key,value,receiver){
    console.log(`settting ${key}!`)
    return Reflect.get(target, key,value,receiver);
  }
})

// obj.coun = 1;
// ++obj.count

var proxy = new Proxy({}, {
  get: function(target, property){
    return 35
  }
});

let obj1= Object.create(proxy);  // Proxy实例作为其他对象的原型对象
// console.log(obj1.time, obj1.name)

async function timeout() {
  return 'hello world'
}

// console.log(timeout())   // async函数返回promise对象把内部的值封装进promise  Promise { 'hello world' }
timeout().then((result)=> {
  // console.log(result);   // 可以为Promise对象注册回调 async函数执行完毕 该回调加入到异步队列等待执行完毕返回结果  helllo world
})

async function timeout1() {
  for(let i = 0;i<3;i++) {
    console.log('async' + i);
    // return('async' + i) 
  }
}
// console.log(timeout1()) // async 函数顺序执行 

function doubleAfter2seconds(num) {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve(2*num)
    }, 2000);
  })
}

doubleAfter2seconds(3).then((result)=> {  //　为Promise注册回调
  // console.log(result)
})

async function test() {
    const xxx = await doubleAfter2seconds(20);
    console.log(xxx);
}

async function test123() {
  const first = await doubleAfter2seconds(10);
  const second = await doubleAfter2seconds(20);
  const third = await doubleAfter2seconds(30);
  console.log(first,second,third);
}

// test123(); 
// console.log('first')


var arr = ['a', 'b', 'c'];
// console.log(arr.join(''))
var msg = 'hello'
// console.log(arr.reverse())
// console.log(msg.split('').reverse().join(''))

// var tags = require( 'svg-tags' );

// console.log( JSON.stringify( tags ) );

function maxlines(arr){
  const resulte = [];
  const max = arr[arr.length - 1];
  for (let i = 1; i < max + 1; i++) {
    resulte.push(i);
  }
  return resulte;
}

// console.log(maxlines([1,2,3,4]))  // [ 1, 2, 3, 4 ]
// console.log(maxlines([2,5,6,7]))  // [ 1, 2, 3, 4, 5, 6, 7 ]
// console.log(maxlines([4,3,2,1]))  // [ 1 ]

// node zen-observable
var Observable1= new ObservableNode(observer => {
  observer.next(1);
  observer.next(2);
  observer.next(3);
  setTimeout(()=> {
    observer.next(4);
    observer.complete();
  }, 1000)

}) 


// console.log('before subscribe');
// Observable1.subscribe({
//   next: x=> console.log('got value:' + x),
//   error: err=> console.log('error'),
//   complete: ()=> console.log('done')
// });
// console.log('after subscribe');

// before subscribe
// after subscribe
// got value:1
// got value:2
// got value:3
// got value:4
// done


// rxjs

const observableRxjs = Observable.create(function(observer){
  observer.next(1);
  observer.next(2);
  observer.next(3);
  setTimeout(()=> {
    observer.next(4);
    observer.complete();
  }, 1000);
});



// console.log('before subscribe');
// observable.subscribe({
//   next: x => console.log('got value'+ x),
//   error: ()=> console.log('error'),
//   complete: ()=> console.log('done')
// });
// console.log('after subscribe');

// before subscribe
// got value1
// got value2
// got value3
// after subscribe
// got value4
// done

// range(5, 10).pipe(
//   filter(x => x % 2 === 1),
//   map(x => x + x)
// ).subscribe(x => console.log(x));


// const numbers = range(1, 10);
// numbers.subscribe(x => console.log(x));
const add = function(total, num) {
  return total * num
}
// range(1,5).pipe(
//   filter(x => x%2 ===1),
//   reduce(add)
// ).subscribe(x => console.log(x))

function fun(x,y,z) {
  return x+y+z
}

console.log(fun(...[1,2,3]))

// 1.Angular内置过滤器
// 2.single page web application  优缺点
// 3.event.currentTarget(事件的监听者)   event.Targer(事件的触发者)
// 大部分时候事件由子元素触发。冒泡捕获过程中，父元素设置监听　子元素负责触发
