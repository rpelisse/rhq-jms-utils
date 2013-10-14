var jmsQueueIds = new Array()
var i = 0
jmsQueueIds[i++] = 10858
jmsQueueIds[i++] = 10194
jmsQueueIds[i++] = 10195
jmsQueueIds[i++] = 10196
jmsQueueIds[i++] = 10197
jmsQueueIds[i++] = 10858
jmsQueueIds[i++] = 10859
jmsQueueIds[i++] = 10860
jmsQueueIds[i++] = 10861
jmsQueueIds[i++] = 10862
jmsQueueIds[i++] = 10863
jmsQueueIds[i++] = 10864
jmsQueueIds[i++] = 10865
jmsQueueIds[i++] = 10866
jmsQueueIds[i++] = 10867
jmsQueueIds[i++] = 10868

var mesureDef = new MeasurementDefinitionCriteria()
mesureDef.addFilterResourceTypeName("Queue")
mesureDef.addFilterDefaultOn(true)


var allIds = new Array()
res = MeasurementDefinitionManager.findMeasurementDefinitionsByCriteria(mesureDef)
for ( var i = 0; i < res.size() ; i++ ) {
  //  pretty.print("id found:" + res.get(i))
  allIds[i] = res.get(i).id
}

for ( var i = 0 ; i < jmsQueueIds.length ; i++ ) {
  var jmsQueueCriteria = new ResourceCriteria()
  jmsQueueCriteria.addFilterId(jmsQueueIds[i])
  var queueName = ResourceManager.findResourcesByCriteria(jmsQueueCriteria).get(0).name

  var metricIterator = MeasurementDataManager.findLiveData(jmsQueueIds[i], allIds).iterator()
  while ( metricIterator.hasNext() ) {
    var metric = metricIterator.next()
    if ( metric.name == "messageCount" )
      pretty.print(metric.name + " on [" + queueName + "] : " + metric.value)
  }
}
