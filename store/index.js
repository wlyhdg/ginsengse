import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      page: 'index',
      shops: [
        {
          name: 'Zen of Iroh',
          owner: 'Uncle Iroh',
          likes: 7034,
          dislikes: 47,
          menu: [
            {
              item: "Iroh's World Famous Tea",
              price: 48
            },
            {
              item: 'Oolong Tea',
              price: 48
            },
            {
              item: 'Jasmine Tea',
              price: 48
            },
            {
              item: 'Earl Gray Tea',
              price: 48
            }
          ],
          description: [
            {
              focus: ['Herbal Teas', 'Friendly Conversations'],
              special: [
                {
                  name: 'Meditation',
                  duration: [9, 11.5],
                  days: ['Sunday', 'Thursday']
                }
              ]
            }
          ]
        }
      ]
    },
    mutations: {
      updatePage(state, pageName) {
        state.page = pageName
      }
    }
  })
}

export default createStore
