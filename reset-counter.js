var queueId=10197


var conf = new Configuration()
OperationManager.scheduleResourceOperation(queueId, "resetMessageCounter", 10000, 100, 1, 10000, conf, "Reset Message Counter")
pretty.print("Queue's message [" + queueId + "] counter has been reset")
