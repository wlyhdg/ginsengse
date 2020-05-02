import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      page: 'index',
      shops: [
        {
          tag: 'iroh',
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
        },
        {
          tag: 'toff',
          name: "Toff's Tea Temple",
          owner: 'Toff',
          likes: 6863,
          dislikes: 67,
          menu: [
            {
              item: 'Herbal Sake',
              price: 52
            }
          ],
          description: [
            {
              focus: ['Healing with a kick', 'Strengthening body'],
              special: [
                {
                  name: 'Earthbending Strength Training',
                  duration: [12, 1.5],
                  days: ['Monday']
                }
              ]
            }
          ]
        },
        {
          tag: 'kyoshi',
          name: 'Herbs Of Kyoshi',
          owner: 'Kyoshi Warriors',
          likes: 5977,
          dislikes: 19,
          menu: [
            {
              item: 'Sun Lake Tea',
              price: 50
            },
            {
              item: 'Kyoshi Moon Pie',
              price: 26
            }
          ],
          description: [
            {
              focus: ['Elegancy in art', 'Agile'],
              special: [
                {
                  name: 'Earthdance: Technique with Flow',
                  duration: [18, 19],
                  days: ['Wednesday', 'Thursday', 'Saturday']
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
