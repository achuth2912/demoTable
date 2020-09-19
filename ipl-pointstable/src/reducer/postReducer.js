const postReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TEAM':
      return state.concat([action.data]);
    case 'UPDATEBTN':
      return state.map((post) => post.id === action.id ? { ...post, update: !post.update } : post)
    case 'EDIT_POST':
      return state.map((post) => post.id === action.id ? { ...post, editing: !post.editing } : post)
    case 'UPDATE':
      return state.map((post) => {
        if (post.id === action.id) {
          return {
            ...post,
            name: action.data.name,
            matches: action.data.matches,
            won: action.data.won,
            lost: action.data.lost,
            points: action.data.points,
            editing: !post.editing,
            update: !post.update
          }
        } else return post;
      })
    default:
      return state;
  }
}
export default postReducer;