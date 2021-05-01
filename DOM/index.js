document.querySelector(".spe").addEventListener("click",function(){
  var qu= Math.random();
  qu=Math.floor(qu*3+1);
  if(qu===1)
{
  this.innerHTML="“ One Swing Can Change The World ”";

}
if(qu===2)
{
this.innerHTML="“ I Am Here Why To Fear ”";
}
if(qu===3)
{
  this.innerHTML="“ Be Patient I Am With You ”";

}
});
