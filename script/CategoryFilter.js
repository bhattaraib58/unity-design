/**
 *
 *
 * @class CategoryFilter
 */
class CategoryFilter
{
  constructor(category,activeClass){
    this.category=category;
    this.activeClass=activeClass;
    this.addFilterForCategory();
  }

  addFilterForCategory()
  {
    for(let i=0;i<this.category.length;i++)
    {
    let dataFilter=document.querySelector(`[data-filter="${this.category[i]}"]`);
    let allDataFilter=document.querySelectorAll(`[data-filter]`);
    let dataCategory=document.querySelectorAll(`[data-category="${this.category[i]}"]`);
    let allDataCategory=document.querySelectorAll(`[data-category]`);
  
    dataFilter.addEventListener('click',(event)=>{
        event.preventDefault();
        

        // remove active class list from other buttons
        for(let i=0;i<allDataFilter.length;i++)
        {
          allDataFilter[i].classList.remove(this.activeClass);
        }

        // add active class
        dataFilter.classList.add(this.activeClass);


        //call the inital hide function
        for (let i = 0; i < allDataCategory.length; ++i) { 
          allDataCategory[i].style.display = 'none'; 
        }

        //show the box by category
        for (let i = 0; i < dataCategory.length; ++i) { 
          this.applyStyles(i,dataCategory[i]);
        } 
  
        //show all cards if  all button clicked *
        if(this.category[i]==='*')
        {
          for (let i = 0; i < allDataCategory.length; ++i) { 
            this.applyStyles(i,allDataCategory[i]);
          }
        }
      },false);
    }
  }

  applyStyles(index,element)
    {
      element.style.display = 'inline-block'; 
      if(index%2==0)
      {
        element.style.cssFloat ='left';
        element.style.transform ='translateY(0%)';
        element.querySelector('.info').style.left='-52px';
      }
      else
      {
        element.style.transform ='translateY(15%)';
        element.style.cssFloat ='right';
        element.querySelector('.info').style.right='-52px';
      }
    }
}
