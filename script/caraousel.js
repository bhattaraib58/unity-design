/**
 *
 *
 * @class Caraousel
 */
class Caraousel
{
  /**
   * @param slideContainerId string
   * @param startingSlideIndex number
   * @param indicatorId string
   * @param activeClassName string
   * @param leftRightIndicator boolean
   * @param indicatorSet boolean
   */
    constructor(slideContainerId,startingSlideIndex,indicatorId,activeClassName,leftRightIndicator,indicatorSet)
    {
        this.slideContainerId=slideContainerId;
        this.indicatorId=indicatorId;
        this.slideIndex=startingSlideIndex;
        this.activeClassName=activeClassName;
        this.leftRightIndicator=leftRightIndicator;
        this.indicatorSet=indicatorSet;
        
        this.showCaraousel(this.slideIndex);
        this.setIndicatorButtonEvents();
    }

    setIndicatorButtonEvents()
    {
      // get indicators
        let indicators = document.getElementById(this.indicatorId).children;

        // if its not left right indicator set as normal 
        if(!this.leftRightIndicator)
        {
        for(let i=0;i<indicators.length;i++)
        {
            indicators[i].addEventListener('click',(e)=>{
              e.preventDefault();
                this.showCaraousel(i);
            });
        }
      }
      // if its left right indicator set event
        else
        {

          // set first indicator mostly left button event
        indicators[0].addEventListener('click',(e)=>{
          e.preventDefault();
            this.nextCaraousel(-1);
        });
        // set last indicator mostly right button event
        indicators[indicators.length-1].addEventListener('click',(e)=>{
          e.preventDefault();
            this.nextCaraousel(1);
        });

        //if has child indicators like 1,2,3 like suchappreaing with left right button
        if(this.indicatorSet)
        {
          // get all sub indicators except left and right
          for(let i=1;i<indicators.length-1;i++)
          {
            // get child indicators
            let childIndicators=indicators[i].children;
            // set child indicators event
            for(let j=0;j<childIndicators.length;j++)
            {
              childIndicators[j].addEventListener('click',(e)=>{
                e.preventDefault();
                  this.showCaraousel(j);
              });
            }
          }
        }
        }
    }

    nextCaraousel(increment) {
        this.showCaraousel(this.slideIndex += increment);
      }
      
    showCaraousel(index) {
        this.slideIndex=index;

        // get slides and indicators
        let slides =document.getElementById(this.slideContainerId).children;
        let indicators = document.getElementById(this.indicatorId).children;

        // check for index values
        if (index > slides.length-1) 
        {
            this.slideIndex = 0;
        }    

        if (index < 0) 
        {
            this.slideIndex = slides.length-1;
        }

        // loop through all and hide them 
        let i;
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        slides[this.slideIndex].style.display = "block";  

        // if has active class name remove and add on indexed indicator
        if(this.activeClassName && !this.indicatorSet)
        {
            for (i = 0; i < indicators.length; i++) {
                indicators[i].classList.remove(this.activeClassName);
            }
            indicators[this.slideIndex].classList.add(this.activeClassName);
        }

        // if caraousel has both left and right arrow and indicator
        if(indicators.length>2 && this.indicatorSet)
        {
          for (i = 0; i < indicators[1].childElementCount; i++) 
          {
            indicators[1].children[i].classList.remove(this.activeClassName);
            indicators[1].children[this.slideIndex].classList.add(this.activeClassName);
          }
        }

      }
}
