import { print, output, abc } from './pkg/option';
import Vue from 'vue';
import LVue from './vue.runtime.esm'
// import './style.css';

print('heooloo');
output('ok2');
console.log(process.env.NODE_ENV)

class Demo {
  constructor() {
    this.name = 'demo';
  }

  jump() {
    console.log('jump');
  }
}
