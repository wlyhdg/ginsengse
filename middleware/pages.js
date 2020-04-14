export default function(context) {
  // tell the store to update the page
  context.store.commit('updatePage', context.route.name)
}
