import { expect } from 'chai';
import { shallowMount, mount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';

describe('test demo', () => {
  it('the first item', () => {
    const message = 'are you ok ?';
    const wrapper = shallowMount(HelloWorld, {
      props: {
        msg: message,
      }
    });

    expect(wrapper.find('.message').text()).to.include(message);
  });

  it('find custom element', () => {
    const wrapper = mount(HelloWorld);

    expect(wrapper.vm.text).to.equal('this is a line message.');
  });

  it('counter', () => {
    const wrapper = mount(HelloWorld);

    expect(wrapper.vm.counter).to.equal(0);

    wrapper.find('button').trigger('click');

    expect(wrapper.vm.counter).to.equal(1);
  });

  it('attached', () => {
    const wrapper = mount(HelloWorld);

    expect(wrapper.find('.change-text').attributes('name')).to.equal('ccc');
  });

  it('exist', () => {
    const wrapper = mount(HelloWorld);



    expect(wrapper.findComponent({ ref: 'title' }).exists()).to.equal(true);
  });
});