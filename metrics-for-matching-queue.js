var DEBUG = false

if (args.length != 1) {
    throw "Missing required argument - Queue name filter";
}

var queueNameFilter = "^.*" + args[0]  + ".*$"
if ( DEBUG )
    pretty.print("Resulting name filter regex is" + queueNameFilter)

/** Get ids for all queues */
var resourceCriteria = new ResourceCriteria()
resourceCriteria.clearPaging()
resourceCriteria.addFilterResourceTypeName("Queue")

var jmsQueueIds = new Array()
var i = 0

var it = ResourceManager.findResourcesByCriteria(resourceCriteria).iterator()

while (it.hasNext() ) {
    var next = it.next()
    if ( next.name.matches(queueNameFilter) ) {
	    jmsQueueIds[i++] = next.id
        if ( DEBUG )
	      pretty.print("queue id added " + next.name)
    }
}


/** Get our measures */
var mesureDef = new MeasurementDefinitionCriteria()
mesureDef.addFilterResourceTypeName("Queue")
mesureDef.addFilterDefaultOn(true)

var allIds = new Array()
res = MeasurementDefinitionManager.findMeasurementDefinitionsByCriteria(mesureDef)
for ( var i = 0; i < res.size() ; i++ ) {
  if ( DEBUG )
    pretty.print(res.get(i))
  allIds[i] = res.get(i).id
}

for ( var i = 0 ; i < jmsQueueIds.length ; i++ ) {
  var jmsQueueCriteria = new ResourceCriteria()
  jmsQueueCriteria.addFilterId(jmsQueueIds[i])
  var queue = ResourceManager.findResourcesByCriteria(jmsQueueCriteria).get(0)
  var queueName = queue.name
  var queueAncestry = queue.getAncestry()
  var queueHost = queueAncestry.substring(queueAncestry.lastIndexOf("_:_") + 3)

  var metricIterator = MeasurementDataManager.findLiveData(jmsQueueIds[i], allIds).iterator()
  while ( metricIterator.hasNext() ) {
    var metric = metricIterator.next()

   //if ( metric.name == "messageCount" )
      pretty.print(metric.name + " on [" + queueName + "] running on [" + queueHost + "] : " + metric.value)
  }
}
