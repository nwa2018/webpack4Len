import { join } from 'lodash-es'
import 'jquery'
import { printMe } from './print.js';
import '~@/style.css';

// import('./util.js').then(_ => console.log('异步加载代码完成！'))
// setTimeout(_ => {
//   import(/* webpackPrefetch: true */ './util').then(_ => console.log('异步加载jquery完成！'))
// }, 5000)
function component() {
  var element = document.createElement('div');
  element.className = 'hello'

  var btn = document.createElement('button');
  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;
  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = join(['Hello', 'webpack', '012'], ' ');

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());

if (module.hot) {
  module.hot.accept('./print.js', function() {
    console.log('Accepting the updated printMe module!');
    printMe();
  })
}
