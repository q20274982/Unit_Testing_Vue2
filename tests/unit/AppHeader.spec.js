// write tests here
import AppHeader from '@/components/AppHeader'
import { mount } from '@vue/test-utils'

describe('AppHeader', () => {
  test('If user is not logged in, do not show logout btn', () => {
    const wrapper = mount(AppHeader)
    expect(wrapper.find('button').isVisible()).toBe(false)
  })
  test('If user is logged in, show logout btn', async () => {
    const wrapper = mount(AppHeader)
    wrapper.setData({ loggedIn: true })

    // setData 到 DOM 渲染 需要時間, 如果如下行 isVisible 驗證 DOM 會失敗,所以要改成非同步
    await wrapper.vm.$nextTick()
    expect(wrapper.find('button').isVisible()).toBe(true)
  })
})
