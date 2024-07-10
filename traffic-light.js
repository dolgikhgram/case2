const LIGHTS = {
    red:'red',
    yellow:'yellow',
    green:'green'
}

const CLASSES_BY_LIGHT = {
   [LIGHTS.red] : 'traffic-light_red', 
   [LIGHTS.yellow]: 'traffic-light_yellow', 
   [LIGHTS.green]: 'traffic-light_green'
}

const NEXT_LIGHT_BY_LIGHT = {
    [LIGHTS.red]:LIGHTS.green,
    [LIGHTS.green]:LIGHTS.yellow,
    [LIGHTS.yellow]:LIGHTS.red
}

let currentLight = LIGHTS.red

function switchLight(node){
    const currentClas = CLASSES_BY_LIGHT[currentLight]
    const nextLight = NEXT_LIGHT_BY_LIGHT[currentLight]
    const nextClass = CLASSES_BY_LIGHT[nextLight]

    currentLight = NEXT_LIGHT_BY_LIGHT[currentLight]

    node.classList.replace(currentClas,nextClass) //replace() Метод String values возвращает новую строку с одним, некоторыми или всеми совпадениями
}

function initLight(node){
    node.classList.add(CLASSES_BY_LIGHT[currentLight]) // .classlist.add - это метод , чтобы добавлять классы в HTML
}

initLight(trafficLightNode)