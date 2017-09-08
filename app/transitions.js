export default function(){

  this.transition(
    this.fromRoute('posts.index'),
    this.toRoute('posts.details'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.fromRoute('posts.new'),
    this.toRoute('posts.index'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.fromRoute('posts.details'),
    this.toRoute('posts.new'),
    this.use('toRight'),
    this.reverse('toLeft')
  );

}
