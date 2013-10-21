var resourceCriteria = new ResourceCriteria()
resourceCriteria.clearPaging() 
resourceCriteria.addFilterResourceTypeName("Queue")

var it = ResourceManager.findResourcesByCriteria(resourceCriteria).iterator()

while (it.hasNext() ) {
    var next = it.next()
    pretty.print(next.name + ", id:" + next.id + ".")
}
