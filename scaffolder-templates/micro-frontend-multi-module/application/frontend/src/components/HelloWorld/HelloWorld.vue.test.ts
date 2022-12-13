import { assert, describe, it, expect, afterEach, vi } from 'vitest'
import { mount } from '@vue/test-utils';
import HelloWorld from './HelloWorld.vue'

describe('Hello world suite', () => {
  afterEach(async () => {
    vi.restoreAllMocks()
  })
  it('basic test', () => {
    assert.equal(Math.sqrt(4), 2)
  })

  it('Should load component', async () => {
    const greetingMessage = 'Some greeting'
    const wrapper = mount(HelloWorld, {
        props: {
            msg: "Hello world",
            greetingMessage
        },
    });
    expect(wrapper).to.toBeDefined()
    expect(wrapper.text()).toContain("Hello world");
    expect(wrapper.text()).toContain(`Some content here: ${greetingMessage}: Message from func:0`);

    const button = wrapper.find({ ref: 'countButton' })
    expect(button.text()).to.equal('count is 0')

    button.trigger('click')
    await wrapper.vm.$nextTick()

    expect(button.text()).to.equal('count is 1')
    expect(wrapper.text()).toContain(`Some content here: ${greetingMessage}: Message from func:1`);
  })
})