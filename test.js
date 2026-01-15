const containers = [
  {id: 1, count: 5},
  {id: 2, count: 10}
]

const newContainers = containers.map( container => {
  if(container.id === 1){
    container.count = container.count+6
  }
  return container
})

console.log(containers)
console.log(newContainers)