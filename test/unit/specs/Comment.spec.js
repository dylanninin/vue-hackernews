import Comment from 'src/components/Comment'

describe('Comment.vue', () => {
  it('should open child comments by default', () => {
    expect(Comment.data().open).to.equal(true)
  })

  it('should return correct reply form', () => {
    expect(Comment.methods.pluralize(1)).to.equal('1 reply')
    expect(Comment.methods.pluralize(2)).to.equal('2 replies')
  })
})
