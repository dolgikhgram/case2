const btnNode = document.querySelector('.js-btn')
const trafficLightNode = document.querySelector('.js-traffic-light')

btnNode.addEventListener('click', function(){
    switchLight(trafficLightNode)
  
})